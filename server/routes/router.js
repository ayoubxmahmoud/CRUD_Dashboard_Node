const express = require('express');
const route = express.Router()

const services = require('../services/render');
const user_controller = require('../controller/userController');
const admin_controller = require('../controller/adminController');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.login);
route.get('/dashboard', services.dashboard);

/**
 *  @description add users
 *  @method GET /add-user
 */
// add /user/
route.get('/add-user', services.add_user)

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get('/update-user', services.update_user)


// API
route.post('/api/users', user_controller.create);
route.get('/api/users', user_controller.find);
route.put('/api/users/:id', user_controller.update);
route.delete('/api/users/:id', user_controller.delete);

//Authentication
route.post('/login', admin_controller.login);
route.get('/logout', admin_controller.logout);



module.exports = route