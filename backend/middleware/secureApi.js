let secureApi =(res, req, next)=>{
    console.log('ami', req.headers);
    next()
    // if(req.headers.authorization == "vDWM'0QSb49O"){
    //     next()
    // }
    // else{
    //     res.send({error: 'invalid api'})
    // }
}

module.exports = secureApi