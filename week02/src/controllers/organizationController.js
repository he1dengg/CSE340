import { getAllOrganizations, getOrganizationById } from '../models/organizations.js';
import { getProjectsByOrganizationId } from '../models/projects.js';

export const showOrganizations = async (req, res, next) => {
  try {
    const orgs = await getAllOrganizations();
    res.render('organizations', {
      title: 'Partner Organizations',
      orgs
    });
  } catch (error) {
    next(error);
  }
};

export const showOrganizationDetail = async (req, res, next) => {
  try {
    const orgId = req.params.id;
    const org = await getOrganizationById(orgId);

    if (!org) {
      return res.status(404).render('404', { title: '404 - Organization Not Found' });
    }

    const projects = await getProjectsByOrganizationId(orgId);

    res.render('organization-detail', {
      title: org.org_name,
      org,
      projects
    });
  } catch (error) {
    next(error);
  }
};
