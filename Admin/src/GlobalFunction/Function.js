const checkLogin = async () => {
    const promise = await new Promise((resolve,reject) => {
        if(localStorage.getItem('user')){
            resolve(JSON.parse(localStorage.getItem( 'user')))
        }else{
            reject('Out');
        }
    })
    return promise
} 
export{
    checkLogin
}