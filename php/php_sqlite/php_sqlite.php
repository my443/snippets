<?php 
echo "hello\n\n";




class Database{

    function create_main_table(){
        //
    }

    public function __construct(){
        $database = new SQLite3('mydb.db');
    }
}

$db = new Database;

?>