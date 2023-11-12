WITH DESCENDANTS (CHILD, PARENT, LVL) 
AS
  ( 
	SELECT [parent_id] AS PARENT, [child_id] as CHILD,  0 AS LVL
		FROM [dbo].[parent_child_relationship] WHERE [parent_child_relationship].parent_id = 0
	UNION all
    SELECT SOURCE.child_id AS PARENT , DESCENDANTS.parent AS CHILD,  DESCENDANTS.lvl + 1 AS LVL
    from DESCENDANTS  
      join [dbo].[parent_child_relationship]  SOURCE
        on DESCENDANTS.CHILD = SOURCE.parent_id
  ) 
select *
from DESCENDANTS 
order by lvl, CHILD, PARENT;