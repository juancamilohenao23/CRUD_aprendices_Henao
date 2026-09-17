const jsonwebtoken = require('jsonwebtoken');

const autenticarToken = (req, res, next) => {
    //extraer o capturar el token
    const token = req.header("autenticacion")?.split(" ")[1]
    if (!token) {
        res.status(401).json({error: "Acceso denegado, no existe el token"})
    }
    //verificacion del token
    jsonwebtoken.verify(token, process.env.JWT_SECRET, (error, usuario) => {
        if (error) res.status(403).json({Error: "Token Invalido"});
        req.usuario = usuario;
        console.log("de autenticaion", req.usuario);
        next();
    });
}

module.exports = autenticarToken