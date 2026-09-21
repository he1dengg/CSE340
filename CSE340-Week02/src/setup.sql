DROP TABLE IF EXISTS project_categories CASCADE;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS organizations CASCADE;

CREATE TABLE organizations (
    org_id SERIAL PRIMARY KEY,
    org_name VARCHAR(255) NOT NULL,
    org_description TEXT
);

CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);

CREATE TABLE projects (
    project_id SERIAL PRIMARY KEY,
    project_name VARCHAR(255) NOT NULL,
    project_description TEXT,
    org_id INT REFERENCES organizations(org_id) ON DELETE CASCADE
);

CREATE TABLE project_categories (
    project_id INT REFERENCES projects(project_id) ON DELETE CASCADE,
    category_id INT REFERENCES categories(category_id) ON DELETE CASCADE,
    PRIMARY KEY (project_id, category_id)
);

INSERT INTO organizations (org_name, org_description) VALUES
('Tech for Good', 'Non-profit technology organization delivering digital infrastructure to local initiatives.'),
('Eco Dev', 'Green environment development organization supporting urban forestry and park restoration.');

INSERT INTO categories (category_name) VALUES
('Web Development'),
('Data Analysis'),
('Environmental Cleanup'),
('Community Service');

INSERT INTO projects (project_name, project_description, org_id) VALUES
('Community Portal', 'Building a web portal to coordinate local voluntary initiatives and resources.', 1),
('Forest Tracker', 'Tracking neighborhood tree planting, survival rates, and canopy growth using data.', 2),
('River Habitat Restoration', 'Restoring local watershed flora and collecting microplastics.', 2);

INSERT INTO project_categories (project_id, category_id) VALUES
(1, 1),
(1, 4),
(2, 2),
(2, 3),
(3, 3),
(3, 4);
