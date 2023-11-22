-- Remove a newline from a feild.
DECLARE @str varchar(10);
SET @str = CONCAT('something', CHAR(13), CHAR(10));

Select @STR AS WithCRLF, REPLACE(REPLACE(@str, CHAR(13), ''), CHAR(10), '') as WithoutCRLF