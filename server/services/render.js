const axios = require('axios');



exports.login = (req, res)=>{
    res.render('admin/login', { title: "Login System"});
}

exports.dashboard = (req, res) => {
    if (req.session.admin){
        // Make a get request to /api/users
        axios.get('http://localhost:3000/api/users')
            .then(function(response){
                res.render('dashboard', { users : response.data, admin:req.session.admin });
            })
            .catch(err =>{
                res.send(err);
            })        
    }else{
        res.send("Unauthorize User");
    }    

}

exports.add_user = (req, res) =>{
    res.render('user/add_user');
}

exports.update_user = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("user/update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}