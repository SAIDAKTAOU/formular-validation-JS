const express = require('express');
const router = express.Router();



// form page
router.get('/',(req, res )=>{
    res.render('form',);
});

// cible page
router.post('/',(req, res )=>{

    var name=req.body.name;
    var prenom = req.body.prenom;
    var email= req.body.email;
    var mobile = req.body.mobile;
    var country = req.body.country;

    res.render('cible',{
        name,
        prenom,
        email,
        mobile,
        country
    });

    });




module.exports = router;
