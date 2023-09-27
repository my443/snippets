""""This script generates SQL insert statements"""


table = {
    'namea': 'varchar(max)'
    ,'nameb': 'date'
    ,'namec': 'number'
}

# column_name mapped to the column number in the csv
column_order = ['namea', 'nameb', 'namec']

values = [['a', 'b', 1], ['c','d',1]]

full_list = []
for row in values:
    current_list = []
    for index, item in enumerate(row):
        if table[column_order[index]] == 'number':
            value = str(item)
        else:
            value = f"'{item}'"

        current_list.append(value)

    full_list.append(current_list)

list_to_join = []

for item in full_list:
    insert_row = "(" + ', '.join(item)+ ")"
    list_to_join.append(insert_row)

values_list = '\n\t,'.join(list_to_join)

columns_list_text = ', '.join(table.keys())

table = 'mytable'
column_names = columns_list_text
# values_list = """('a', 'b', 'c')\n,('c','d','e')"""

insert_statement = f"""INSERT INTO {table} ({column_names}) \nVALUES \n\t{values_list};"""

print(insert_statement)

if __name__ == "__main__":
    pass