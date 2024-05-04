import axios from "axios";

async function useGenStableDiffusion({ prompt }) {
    const url = await axios.post(import.meta.env.VITE_APP_NEXRA_STABLE_DIFFUSION_BASE_URL, {
        prompt: prompt,
        model: "stablediffusion-1.5",
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        let err = null;
        let result = null;

        if((typeof response.data).toString().toLowerCase() === "Object".toLowerCase()){
            if(response.data.code != undefined && response.data.code != null && response.data.code === 200 && response.data.status != undefined && response.data.status != null && response.data.status === true){
                result = response.data;
                err = null;
            } else {
                result = null;
                err = response.data;
            }
        } else {
            let js = null;
            let count = -1;
            for(let i = 0; i < response.data.length; i++){
                if(count <= -1){
                    if(response.data[i] === "{"){
                        count = i;
                    }
                } else {
                    break;
                }
            }

            if(count <= -1){
                err = {
                    "code": 500,
                    "status": false,
                    "error": "INTERNAL_SERVER_ERROR",
                    "message": "general (unknown) error"
                };
                result = null;
            } else {
                try {
                    js = response.data.slice(count);
                    js = JSON.parse(js);
                    if(js != undefined && js != null && js.code != undefined && js.code != null && js.code === 200 && js.status != undefined && js.status != null && js.status === true){
                        result = js;
                        err = null;
                    } else {
                        err = js;
                        result = null;
                    }
                } catch(e){
                    err = {
                        "code": 500,
                        "status": false,
                        "error": "INTERNAL_SERVER_ERROR",
                        "message": "general (unknown) error"
                    };
                    result = null;
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
    return url
}

export default useGenStableDiffusion