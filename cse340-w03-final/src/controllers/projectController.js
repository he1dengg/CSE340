import { getUpcomingProjects, getProjectById } from '../models/projects.js';
import { getCategoriesByProjectId } from '../models/categories.js';

export const showProjects = async (req, res, next) => {
  try {
    const projects = await getUpcomingProjects();
    res.render('projects', {
      title: 'Upcoming Service Projects',
      projects
    });
  } catch (error) {
    next(error);
  }
};

export const showProjectDetail = async (req, res, next) => {
  try {
    const projectId = req.params.id;
    const project = await getProjectById(projectId);

    if (!project) {
      return res.status(404).render('404', { title: '404 - Project Not Found' });
    }

    const categories = await getCategoriesByProjectId(projectId);

    res.render('project-detail', {
      title: project.project_name,
      project,
      categories
    });
  } catch (error) {
    next(error);
  }
};
