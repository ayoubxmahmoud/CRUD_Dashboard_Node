var Admindb = require('../model/Admin');
var express = require('express');

exports.login = (req, res)=>{

    if (req.body.email){
        const email = req.body.email;

        Admindb.findByEmail(email)
            .then(data => {
                if(!data){
                    res.status(404).send({ message: "No admin found"})
                }else{
                    const password = req.body.password
                    if (password == data.password){
                        req.session.admin = data
                        res.redirect('/dashboard');
                    }else{
                        res.status(500).send({ message: "Incorrect password"});
                    }
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error retrieving user with id"+id})
            });
    }
}



exports.logout = (req, res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send("Error")
        }else{
            res.render('admin/login', { title: "Express", logout : "logout Successfully...!"})
        }
    })
}


