import csv
""""This script generates SQL insert statements"""


table = {
    'namea': 'string'
    ,'nameb': 'date'
    ,'namec': 'number'
    , 'namee': 'integer'
}

# column_name mapped to the column number in the csv
column_order = ['namea', 'nameb', 'namec', 'namee']

def get_values(filename, has_header=True):
    file = open(filename)
    csv_reader = csv.reader(file)

    if has_header:
        next(csv_reader)

    values = list(csv_reader)

    return values

def return_insert_values(row, table, column_order):
    current_list = []
    for index, item in enumerate(row):
        if table[column_order[index]] == 'number' or table[column_order[index]] == 'integer':
            value = str(item)
        else:
            value = f"'{item}'"

        current_list.append(value)

    return current_list

def get_text_for_insert_values(list_of_values_to_be_inserted):

    list_to_join = []
    for item in list_of_values_to_be_inserted:
        insert_row = "(" + ', '.join(item) + ")"
        list_to_join.append(insert_row)

    values_list = '\n\t,'.join(list_to_join)

    return values_list

def get_columns_names(table):
    columns_list_text = ', '.join(table.keys())

    return columns_list_text

def get_list_of_values(values):
    list_of_values_to_be_inserted = []

    for row in values:
        values_in_this_row = return_insert_values(row, table, column_order)
        list_of_values_to_be_inserted.append(values_in_this_row)

    return list_of_values_to_be_inserted


values = get_values('test.csv', True)
list_of_values_to_be_inserted = get_list_of_values(values)
# print ('values to be inserted', list_of_values_to_be_inserted)

table_name = 'mytable'
column_names = get_columns_names(table)
values_list = get_text_for_insert_values(list_of_values_to_be_inserted)
# values_list = """('a', 'b', 'c')\n,('c','d','e')"""

insert_statement = f"""INSERT INTO {table_name} \n\t({column_names}) \nVALUES \n\t{values_list};"""

print(insert_statement)

##TODO - If the number of values on the value list exceeds a certain number, you will need a whole new insert statement.
#            (eg. SQL Server doesn't allow more than 1000 rows of values in each statement.)

if __name__ == "__main__":
    pass
