-- A simple query to show all of the children for any given parent.
-- Children are shown all the way down.

DECLARE @ID INT;
SET @ID = 2001;

WITH RECURSIVE_CTE AS (
	SELECT @ID AS child_id
	UNION ALL
	SELECT parent_child_relationship.child_id
		FROM RECURSIVE_CTE
		JOIN parent_child_relationship ON parent_child_relationship.parent_id = RECURSIVE_CTE.child_id
)

SELECT * FROM RECURSIVE_CTE;