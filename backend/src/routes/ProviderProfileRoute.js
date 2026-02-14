const express = require('express');
const routes = express.Router();

const { 
    createProviderProfile, 
    getAllProviders, 
    getProviderById, 
    updateProviderProfile } = require('../controllers/providerProfileController');

const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');


routes.post('/profile', authMiddleware, roleMiddleware('provider'), createProviderProfile);

routes.get('/Providers', authMiddleware, getAllProviders);
routes.get('/Provider/:id', authMiddleware, getProviderById);

routes.put('/edit/:id', authMiddleware, roleMiddleware('provider'), updateProviderProfile);


module.exports = routes;