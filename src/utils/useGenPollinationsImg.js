function useGenPollinationsImg({ prompt }) {
    const prompt_ = prompt.replace(' ', '+')
    const ran = Math.floor(Math.random() * 1000) + 1
    const url = `https://image.pollinations.ai/prompt/${prompt_}?nologo=poll&nofeed=yes&seed=${ran}`
    //return response.data.response
    console.log(url)
    return url
    // return `https://image.pollinations.ai/prompt/photorealistic%20${prompt}`
}

export default useGenPollinationsImg