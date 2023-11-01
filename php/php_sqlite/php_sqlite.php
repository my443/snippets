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
            fname        TEXT,
            lname        TEXT,
            fav_language TEXT,
            cars         TEXT
        );";

        $database->query($create_query);
    }

    /**
     * Uses the values from the input data to populate the query. 
     * TODO: use the $input_data array to make the query more generic.
     */
    function insert_record($input_data){
        $insert_query = "INSERT INTO survey_items
                        ('fname', 'lname', 'fav_language', 'cars')
                        VALUES ('{$input_data["fname"]}' , '{$input_data["lname"]}', '{$input_data["fav_language"]}', '{$input_data["cars"]}');
                        ";    

        echo ($insert_query);
        $statement = $this->database->prepare($insert_query);
        $statement->execute();

    }


    public function __construct(){
        $this->database = new SQLite3('mydb.db');
        echo('got here');

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