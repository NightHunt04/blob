import axios from "axios";

async function useGenProdia({ prompt }) {
    const response = axios.post(import.meta.env.VITE_APP_NEXRA_STABLE_DIFFUSION_BASE_URL, {
                        prompt: prompt,
                        model: "prodia",
                        data: {
                            model: "absolutereality_V16.safetensors [37db0fc3]",
                            steps: 75,
                            cfg_scale: 8,
                            sampler: "DPM++ 2M Karras",
                            negative_prompt: "low quality, low sharpness, unclear image, ugly, bad lighting"
                        }
                    }, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then(response => {
                        let err = null
                        let result = null
                    
                        if((typeof response.data).toString().toLowerCase() === "Object".toLowerCase()){
                            if(response.data.code != undefined && response.data.code != null && response.data.code === 200 && response.data.status != undefined && response.data.status != null && response.data.status === true){
                                result = response.data
                                err = null
                            } else {
                                result = null
                                err = response.data
                            }
                        } else {
                            let js = null
                            let count = -1
                            for(let i = 0; i < response.data.length; i++){
                                if(count <= -1){
                                    if(response.data[i] === "{"){
                                        count = i
                                    }
                                } else {
                                    break
                                }
                            }
                    
                            if(count <= -1){
                                err = {
                                    "code": 500,
                                    "status": false,
                                    "error": "INTERNAL_SERVER_ERROR",
                                    "message": "general (unknown) error"
                                };
                                result = null
                            } else {
                                try {
                                    js = response.data.slice(count);
                                    js = JSON.parse(js);
                                    if(js != undefined && js != null && js.code != undefined && js.code != null && js.code === 200 && js.status != undefined && js.status != null && js.status === true){
                                        result = js
                                        err = null
                                    } else {
                                        err = js
                                        result = null
                                    }
                                } catch(e){
                                    err = {
                                        "code": 500,
                                        "status": false,
                                        "error": "INTERNAL_SERVER_ERROR",
                                        "message": "general (unknown) error"
                                    };
                                    result = null
                                }
                            }
                        }
                    
                        if(result === null && err != null){
                            return 'ERROR'
                        } else {
                            return result.images[0]
                        }
                    }).catch(error => {
                        return 'ERROR'
                    });
                
    return response
} 

export default useGenProdia