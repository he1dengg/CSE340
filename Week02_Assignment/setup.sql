DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS organizations;

CREATE TABLE organizations (
    organization_id SERIAL PRIMARY KEY,
    organization_name VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);

CREATE TABLE projects (
    project_id SERIAL PRIMARY KEY,
    project_name VARCHAR(255) NOT NULL,
    organization_id INT REFERENCES organizations(organization_id),
    category_id INT REFERENCES categories(category_id)
);

INSERT INTO organizations (organization_name, description) VALUES
('Tech for Good', 'Non-profit technology organization.'),
('Eco Dev', 'Green environment development organization.');

INSERT INTO categories (category_name) VALUES
('Web Development'),
('Data Analysis');

INSERT INTO projects (project_name, organization_id, category_id) VALUES
('Community Portal', 1, 1),
('Forest Tracker', 2, 2);