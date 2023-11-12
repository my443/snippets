-- Shows all of the children that directly report to a parent. 

DECLARE @ID INT;
SET @ID = 3001;

SELECT * FROM parent_child_relationship
	WHERE parent_id = @ID;