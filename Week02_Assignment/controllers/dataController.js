const dbModel = require('../models/databaseModel');

async function renderDataPage(req, res) {
    try {
        const organizations = await dbModel.getOrganizations();
        const projects = await dbModel.getProjects();
        const categories = await dbModel.getCategories();
        res.render('dataView', { organizations, projects, categories });
    } catch (error) { 
        console.error("Error:", error);
        res.status(500).send("Error retrieving data"); 
    }
}

module.exports = { renderDataPage };