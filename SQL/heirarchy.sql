USE scratch_pad; -- on local hosted sqlserver
-- gets the level one in the hierarchy
/** 
create table hierarchy
(parent int,
child int)
*/

/*
insert into hierarchy (parent, child)
values (2216, 2227),
(2216, 2218),
(2216, 2219),
(2217, 2216),
(2220, 2221)
*/
-- https://www.sqlservertutorial.net/sql-server-basics/sql-server-recursive-cte/

with rec as (
	select 
		parent,
		child
	from hierarchy
	where parent is null

	UNION ALL 

	select
		e.parent,
		e.child
	FROM
		hierarchy as e
		inner join hierarchy o
			ON o.child = e.parent
			

)

select * from rec
--select * 
--from #hierarchy
--where parent = 2216

/*
drop table #hierarchy;
*/