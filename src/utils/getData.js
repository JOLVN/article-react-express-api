const getData =  async (url, cb) => {
    const response = await fetch(url)
    const result = await response.json()
    cb(result)
}   

export default getData