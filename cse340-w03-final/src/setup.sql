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
    project_date DATE NOT NULL DEFAULT CURRENT_DATE,
    org_id INT NOT NULL REFERENCES organizations(org_id) ON DELETE CASCADE
);

CREATE TABLE project_categories (
    project_id INT NOT NULL REFERENCES projects(project_id) ON DELETE CASCADE,
    category_id INT NOT NULL REFERENCES categories(category_id) ON DELETE CASCADE,
    PRIMARY KEY (project_id, category_id)
);

INSERT INTO organizations (org_name, org_description) VALUES
('Tech for Good', 'Empowering non-profits and community initiatives with modern digital infrastructure and tools.'),
('Eco Action Alliance', 'Leading local reforestation, native biodiversity revival, and clean riverbank initiatives.'),
('Youth Literacy Project', 'Providing academic mentorship, digital skills training, and STEM workshops for local students.');

INSERT INTO categories (category_name) VALUES
('Environmental'),
('Educational'),
('Community Service'),
('Health and Wellness');

INSERT INTO projects (project_name, project_description, project_date, org_id) VALUES
('Community Aid Web Portal', 'Developing an open-source civic web portal to connect volunteer resources.', '2026-10-10', 1),
('Riverside Native Flora Planting', 'Restoring wetland habitats and eliminating harmful plastic debris from riverbanks.', '2026-10-18', 2),
('Seniors Mobile Literacy Clinic', 'Hands-on weekend workshops guiding elderly residents in safe digital device usage.', '2026-10-25', 1),
('STEM Robotics Weekend Camp', 'Interactive coding and robotics workshops for middle school students.', '2026-11-05', 3),
('Urban Pollinator Garden', 'Transforming vacant public lots into organic community gardens and pollinator shelters.', '2026-11-15', 2),
('Youth Mindfulness and Fitness Walk', 'Neighborhood active walks promoting adolescent mental wellness and physical health.', '2026-12-01', 3);

INSERT INTO project_categories (project_id, category_id) VALUES
(1, 2), (1, 3),
(2, 1), (2, 3),
(3, 2), (3, 4),
(4, 2), (4, 3),
(5, 1), (5, 4),
(6, 3), (6, 4);
