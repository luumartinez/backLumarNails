const jwt = require('jsonwebtoken');

const comprobacionJwt = (req, res, next) =>{
    const token = req.header("auth-token")
    if (!token){
        return res.status(401).json("Acceso denegado")
    }
    try {
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        req.usuario = verifyToken;
        next()
    } catch (error) {
        res.status(400).json("Token invalido")        
    }
};

module.exports = comprobacionJwt;
