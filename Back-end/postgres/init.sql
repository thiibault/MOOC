-- create table users (id int);


-- CREATE TABLE users (
--     id           integer  PRIMARY KEY   NOT NULL,
--     name         VARCHAR(50)            NOT NULL,
--     password     VARCHAR(50)            NOT NULL,
--     mail_address VARCHAR(50)            NOT NULL,
--     role_id      integer                NOT NULL REFERENCES roles
--     );

-- CREATE TABLE roles (
--     id          integer PRIMARY KEY    NOT NULL,
--     role_name   VARCHAR(50) REFERENCES permissions
-- );

-- CREATE TABLE permissions (
--     role_name          VARCHAR(50) PRIMARY KEY    NOT NULL,
--     admin              BOOL,
--     permissions        integer[]
-- );



-- -- CREATE TABLE IF NOT EXISTS cours (
-- --     id                  INT     PRIMARY KEY   NOT NULL,
-- --     title               VARCHAR(50)           NOT NULL,
-- --     estimated_time      interval hour to minute,
-- --     creation_date       DATE,
-- --     overall_rating      FLOAT4,
-- --     material_needed     integer ARRAY,
-- --     user_list           integer[],
-- --     resume              VARCHAR(150),
-- --     steps               INT REFERENCES steps,
-- --     UNIQUE(title)
-- -- );

-- -- CREATE TABLE IF NOT EXISTS  steps (
-- --     id          INT PRIMARY KEY     NOT NULL,
-- --     sub_title   VARCHAR(50)         NOT NULL,
-- --     contend     VARCHAR(150)
-- -- );