DROP TABLE IF EXISTS project_categories CASCADE;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS organizations CASCADE;

CREATE TABLE organizations (
    org_id SERIAL PRIMARY KEY,
    org_name VARCHAR(255) NOT NULL,
    org_description TEXT,
    contact_email VARCHAR(255) NOT NULL,
    logo VARCHAR(255) NOT NULL
);

CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);

CREATE TABLE projects (
    project_id SERIAL PRIMARY KEY,
    project_name VARCHAR(255) NOT NULL,
    project_description TEXT,
    location VARCHAR(255) NOT NULL,
    project_date DATE NOT NULL,
    org_id INT NOT NULL REFERENCES organizations(org_id) ON DELETE CASCADE
);

CREATE TABLE project_categories (
    project_id INT NOT NULL REFERENCES projects(project_id) ON DELETE CASCADE,
    category_id INT NOT NULL REFERENCES categories(category_id) ON DELETE CASCADE,
    PRIMARY KEY (project_id, category_id)
);

INSERT INTO organizations (org_name, org_description, contact_email, logo) VALUES
('Tech for Good', 'Empowering non-profits and community initiatives with modern digital infrastructure and tools.', 'contact@techforgood.org', 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop'),
('Eco Action Alliance', 'Leading local reforestation, native biodiversity revival, and clean riverbank initiatives.', 'info@ecoaction.org', 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=600&auto=format&fit=crop'),
('Youth Literacy Project', 'Providing academic mentorship, digital skills training, and STEM workshops for local students.', 'support@youthliteracy.org', 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop');

INSERT INTO categories (category_name) VALUES
('Environmental'), ('Educational'), ('Community Service'), ('Health and Wellness');

INSERT INTO projects (project_name, project_description, location, project_date, org_id) VALUES
('Community Aid Web Portal', 'Developing an open-source civic web portal to connect volunteer resources.', 'Downtown Tech Hub', '2026-10-10', 1),
('Digital Literacy for Seniors', 'Hosting weekend computer skills workshops at the public library.', 'Central Public Library', '2026-10-17', 1),
('Nonprofit Database Optimization', 'Assisting regional shelters in structuring donation records safely.', 'Community Civic Center', '2026-10-24', 1),
('Youth Robotics Mentorship', 'Mentoring middle school teams preparing for national STEM exhibitions.', 'Northside Middle School', '2026-11-05', 1),
('Public Open Data Initiative', 'Publishing accessible municipal data visualizers for civic transparency.', 'City Hall Innovation Lab', '2026-11-12', 1),
('Riverside Native Flora Planting', 'Restoring wetland habitats and eliminating harmful plastic debris from riverbanks.', 'Riverside Nature Reserve', '2026-10-12', 2),
('Urban Forestry Tree Planting', 'Planting indigenous trees in urban heat corridors and school grounds.', 'East District Parklands', '2026-10-19', 2),
('Community Organic Greenhouse', 'Constructing hydroponic beds to supply produce for neighborhood food drives.', 'South Valley Garden', '2026-10-26', 2),
('Coastal Dune Habitat Protection', 'Installing protective biodegradable barriers along eroded shoreline ridges.', 'Ocean Beachfront', '2026-11-02', 2),
('Zero-Waste Neighborhood Workshop', 'Teaching households local composting methods and reusable packaging solutions.', 'Greenwood Pavilion', '2026-11-09', 2),
('Weekend STEM Reading Club', 'Reading sessions focused on inspiring curiosity in scientific disciplines.', 'Community Youth Center', '2026-10-15', 3),
('After-School Math Tutoring', 'Free tutoring sessions for elementary students struggling with fundamentals.', 'Franklin Elementary School', '2026-10-22', 3),
('Coding with Scratch for Kids', 'Introductory block-based programming lessons for young learners.', 'Westside Tech Hub', '2026-10-29', 3),
('Young Writers Workshop', 'Creative writing circles helping youth develop storytelling and essays.', 'Downtown Arts Pavilion', '2026-11-06', 3),
('Book Drive for Rural Libraries', 'Collecting and distributing over 2,000 children books to under-resourced schools.', 'Civic Warehouse B', '2026-11-13', 3);

INSERT INTO project_categories (project_id, category_id) VALUES
(1, 2), (1, 3), (2, 2), (2, 3), (3, 1), (3, 3), (4, 2), (4, 4), (5, 2), (5, 3),
(6, 1), (6, 3), (7, 1), (7, 4), (8, 1), (8, 4), (9, 1), (9, 3), (10, 1), (10, 4),
(11, 2), (11, 3), (12, 2), (12, 3), (13, 2), (13, 4), (14, 2), (14, 3), (15, 2), (15, 3);
