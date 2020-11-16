const providerController = require("../controllers/provider.controller");

module.exports = (app) => {
    app.get("/providers", providerController.getProviders);
    app.get("/providers/:id", providerController.getProviderById);
    app.get('/counts', providerController.getCounts)
}