-- Create a new temp table
create TABLE ##temp_table (
	names varchar(MAX)
)

-- Insert a record into the table. 
insert into ##temp_table
	(names)
values
	('123;#jvandijk;#234;#jdoe;#335;#tswift')

-- Make sure that you have data in there. 
select * from ##temp_table;

-- Select sthe value based on the split
(SELECT names, value
FROM ##temp_table  
	CROSS APPLY string_split(names, ';')       -- Split into rows based on the list of responsible persons
) 

-- Remove the number sign from the names
SELECT trim('#' from row.value) as trimmed_value
from
(SELECT names, value
FROM ##temp_table  
	CROSS APPLY string_split(names, ';')       -- Split into rows based on the list of responsible persons
) as row

-- Check if it is numeric and only return that
-- You can also ONLY return the name if you reverse the last line
SELECT trim('#' from row.value) as trimmed_value
from
(SELECT names, value
FROM ##temp_table  
	CROSS APPLY string_split(names, ';')       -- Split into rows based on the list of responsible persons
) as row
where ISNUMERIC(TRIM('#' FROM row.value)) != 0

DROP TABLE ##temp_table;