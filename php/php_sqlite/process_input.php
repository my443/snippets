<?php

include "php_sqlite.php";


/**
 * A function that uses a list of names for form elements, and then puts them into an array to write. 
 */
function process_data(){
    //List each input element by name
    // TODO - change this to the list of form inputs. 
    $list_of_inputs_to_process = ["firstname", "lastname", "annual_income", "school"];
    $fields_to_save_in_database = Array();

    $post_data = $_POST;

    // Loop through each element of your items that you defined. See if there is a posted value.
    foreach ($list_of_inputs_to_process as $item){
        // If this item isn't posted, then return a blank.
        if (isset($post_data[$item])){
            $fields_to_save_in_database[$item] = $post_data[$item];
        }
        else{
            $fields_to_save_in_database[$item] = '';
        }    
    }

    return $fields_to_save_in_database;
}

$fields = process_data();
// print_r($fields);
echo("<h2>New Data Entered</h2>");
$db = new Database;
$db->insert_record($fields);

$result_array = $db->get_all_records();
?>
<a href="download_export.php">Click here to download records</a>