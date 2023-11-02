<?php
include "php_sqlite.php";

$db = new Database;
$result_array = $db->get_all_records();
$db->download_csv($result_array);

?>