const jwt = require('jsonwebtoken');
module.exports =  (req, res, next) => {
    const token =req.header('Authorization');
    if (!token) return res.status(401).send('access denied');
    try {
        const version =jwt.verify(token,'tokenscrit')
        req.user=version
    }catch(e) {
        next(e)
        res.status(400).send('invalid token')
    }

}