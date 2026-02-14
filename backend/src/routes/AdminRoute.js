const express = require('express');
const routes = express.Router();
const { 
    getProviders, 
    approveProvider, 
    getAllServices, 
    createServiceAdmin, 
    updateServiceAdmin, 
    deleteServiceAdmin, 
    getAllUsers,
    deleteUser } = require('../controllers/adminContoller');

    const authMiddleware = require('../middleware/authMiddleware');
    const roleMiddleware = require('../middleware/roleMiddleware');

    routes.get('/users', authMiddleware, roleMiddleware('admin'), getAllUsers);
    routes.get('/providers', authMiddleware, roleMiddleware('admin'), getProviders);
    routes.get('/services', authMiddleware, roleMiddleware('admin'), getAllServices);

    routes.put('/approve/:id', authMiddleware, roleMiddleware('admin'), approveProvider);
    routes.put('/updateService/:id', authMiddleware, roleMiddleware('admin'), updateServiceAdmin);

    routes.post('/createService', authMiddleware, roleMiddleware('admin'), createServiceAdmin);

    routes.delete('/deleteService/:id', authMiddleware, roleMiddleware('admin'), deleteServiceAdmin);
    routes.delete('/deleteUser/:id', authMiddleware, roleMiddleware('admin'), deleteUser);


module.exports = routes;