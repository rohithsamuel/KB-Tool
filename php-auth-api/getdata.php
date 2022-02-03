<?php


require __DIR__ . '/classes/Database.php';
$db_connection = new Database();
$conn = $db_connection->dbConnection();

function msg($success, $status, $message, $extra = [])
{
    return array_merge([
        'success' => $success,
        'status' => $status,
        'message' => $message
    ], $extra);
}

// DATA FORM REQUEST
$data = json_decode(file_get_contents("php://input"));
$returnData = [];

if ($_SERVER["REQUEST_METHOD"] != "POST") :

    $returnData = msg(0, 404, 'Page Not Found!');

elseif (
    !isset($data->language)
    || !isset($data->module)
    || !isset($data->error)
    || !isset($data->fixes)
    || !isset($data->createdby)
    || !isset($data->date)
    
) :

    $fields = ['fields' => ['language', 'module', 'error', 'fixes', 'createdby', 'date']];
    $returnData = msg(0, 422, 'Please Fill in all Required Fields!', $fields);

// IF THERE ARE NO EMPTY FIELDS THEN-
else :
    $language=($data->language);
    $module=($data->module);
    $error=($data->error);
    $fixes=($data->fixes);
    $createdby=($data->createdby);
    $date=($data->date);

    
        try {


            
                $insert_query = "INSERT INTO `techfaq`(`language`,`module`,`error`,`fixes`,`createdby`,`date`) VALUES(:language,:module,:error,:fixes,:createdby,:date)";

                $insert_stmt = $conn->prepare($insert_query);

                // DATA BINDING
                $insert_stmt->bindValue('language', htmlspecialchars(strip_tags($language)), PDO::PARAM_STR);
                $insert_stmt->bindValue(':module', htmlspecialchars(strip_tags($module)), PDO::PARAM_STR);
                $insert_stmt->bindValue(':error', htmlspecialchars(strip_tags($error)), PDO::PARAM_STR);
                $insert_stmt->bindValue(':fixes', htmlspecialchars(strip_tags($fixes)), PDO::PARAM_STR);
                $insert_stmt->bindValue(':createdby', htmlspecialchars(strip_tags($createdby)), PDO::PARAM_STR);
                $insert_stmt->bindValue(':date', htmlspecialchars(strip_tags($date)), PDO::PARAM_STR);
               
                $insert_stmt->execute();

                $returnData = msg(1, 201, 'You details are successfully uploaded.');

        
        } catch (PDOException $e) {
            $returnData = msg(0, 500, $e->getMessage());
        }


        
    endif;

echo json_encode($returnData);