<?php 


class Database{
    /** TODO: Activate SQLite for your PHP
     * In the php.ini file look for the line that looks like: 
     *          ;extension=sqlite3 
     *      Remove the semi-colon so that the line looks like this:
     *          extension=sqlite3
     *        Save php.ini
    **/

    public SQLite3 $database;

    function create_main_table($database){
        $create_query = 
        "CREATE TABLE survey_items (
            id           INTEGER PRIMARY KEY AUTOINCREMENT
                                 NOT NULL,
            firstname        TEXT,
            lastname        TEXT,
            annual_income TEXT,
            school         TEXT
        );";

        $database->query($create_query);
    }

    /**
     * Uses the values from the input data to populate the query. 
     * TODO: use the $input_data array to make the query more generic.
     */
    function insert_record($input_data){
        $insert_query = "INSERT INTO survey_items
                        ('firstname', 'lastname', 'annual_income', 'school')
                        VALUES ('{$input_data["firstname"]}' , '{$input_data["lastname"]}', '{$input_data["annual_income"]}', '{$input_data["school"]}');
                        ";    

        $statement = $this->database->prepare($insert_query);
        $statement->execute();

    }

    function get_all_records(){
        $all_records = Array();
        $select_query = "SELECT * from survey_items;";

        $query = $this->database->query($select_query);    

        while ($row = $query->fetchArray()) {
            array_push($all_records, $row);
        }

        return $all_records;

    }

    function download_csv($result_array){
        $filename = 'personal_information_export.csv';

        header('Content-Type: application/csv');
        header('Content-Disposition: attachment; filename="'.$filename.'";');
        echo('"ID", "Firstname", "Lastname", "Annual Income", "School"'."\r\n");

        foreach ($result_array as $line) {
            $line_array = Array($line[0], $line[1], $line[2], $line[3], $line[4]);
            $row_string = '"' . implode('","', $line_array).'"';
            echo $row_string."\r\n";
        }

    }


    public function __construct(){
        $this->database = new SQLite3('mydb.db');

        // $this->create_main_table($database);

        // // Test if the table exists
        // $results = $database->query("SELECT name FROM sqlite_master WHERE type='table' AND name='survey_items';");
        
        // foreach ($results as $result){
        //     print_r($result);
        // }


    }
}

$db = new Database;

?>