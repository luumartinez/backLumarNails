const express = require("express");
const router = express.Router();

router.get("/admin", (req, res)=>{
    res.json({
        error: null,
        data:{
            title:"ruta protegida",
            user: req.usuario
        }
    });
});

module.exports = router;