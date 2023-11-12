 CREATE DATABASE hierarchy_example;

CREATE TABLE parent_child_relationship (
	child_id int,
	parent_id int
)

INSERT INTO parent_child_relationship (child_id, parent_id) 
VALUES (1000, 0),
		(2001, 1000),
		(2002, 1000),
		(2003, 1000),
		(3001, 2001),
		(3002, 2001),
		(3003, 2002),
		(3004, 2002), 
		(3005, 2003),
		(4000, 1000), 
		(4001, 3001), 
		(4002, 3001), 
		(4003, 3001),
		(4004, 3005),
		(4005, 3005),
		(4006, 2003)