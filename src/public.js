const { default: Axios } = require("axios");

const Get = (url,callback)=>{
    Axios.get(url).then((res)=>{
        if (typeof(callback)==='function') callback(res)
    }).catch((err)=>{
        console.log(err);
    })
    console.log(url+' action done');
}
export {Get}