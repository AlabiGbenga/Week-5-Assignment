const handleGetRequest = (request, response)=>{
if(!user){
    return response.status(401).json({message: "access denied"})
}
if(!email){
    return response.status(400).json({message: "please add email"})
}
if(!phone){
    return response.status(404).json({message: "not found"})
}
if(!serverError){
    return response.status(401).json({message: "server error"})
}
    return response.status(200).json({message: "post request successful"})
}

const handlePostRequest = (request, response)=>{

    if(!user){
        return response.status(401).json({message: "access denied"})
    }
    if(!email){
        return response.status(400).json({message: "please add email"})
    }
    if(!phone){
        return response.status(404).json({message: "not found"})
    }
    if(!serverError){
        return response.status(401).json({message: "server error"})
    }
        return response.status(200).json({message: "post request successful"})

}

module.exports = { 
    handleGetRequest,
    handlePostRequest
}
