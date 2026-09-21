import express from 'express';
import { showOrganizations, showOrganizationDetail } from '../controllers/organizationController.js';

const router = express.Router();
router.get('/organizations', showOrganizations);
router.get('/organization/:id', showOrganizationDetail);

export default router;
