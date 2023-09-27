""""This script generates SQL insert statements"""


table = {
    'namea': 'varchar(max)'
    ,'nameb': 'date'
    ,'namec': 'number'
}

# column_name mapped to the column number in the csv
column_order = ['namea', 'nameb', 'namec']

values = [['a', 'b', 1], ['c','d',1]]

string_output = []
for row in values:
    for index, item in enumerate(row):
        if table[column_order[index]] == 'number':
            value = item
        else:
            value = f"'{item}'"

        string_output.append(value)

print (string_output)

columns_list_text = ', '.join(table.keys())

table = 'mytable'
column_names = columns_list_text
values_list = """('a', 'b', 'c')\n,('c','d','e')"""

insert_statement = f"""INSERT INTO {table} ({column_names}) values {values_list};"""

print(insert_statement)