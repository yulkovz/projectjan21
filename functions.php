<?php 
 require('includes/config.php');


class functions {


  var $host = DB_SERVER;
  var $username = DB_SERVER_USERNAME;
  var $password = DB_SERVER_PASSWORD;
  var $daba = DB_DATABASE;


//connect to Database
  public function connect() {
	    mysql_connect($this->host,$this->username,$this->password) or die("Could not connect. " . mysql_error());
	    mysql_select_db($this->daba) or die("Could not select database. " . mysql_error());

  }


  var $pdo;
  function __construct() {
    try {
        $this->pdo = new PDO("mysql:host=".DB_SERVER.";dbname=".DB_DATABASE.";charset=UTF8", DB_SERVER_USERNAME, DB_SERVER_PASSWORD, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));
    } catch(PDOException $e) {
        echo $e->getMessage();
    }
  }


 
  function set_wda_results($p){

	  	$name=$p['name'];
	  	$email=$p['email'];	
	    $message=$p['message'];		
     
        $this->pdo->beginTransaction();
        $stmt = $this->pdo->prepare("INSERT INTO `wda_project_results` (`name`, `email`, `message`) VALUES (:name, :email, :message )");
        $stmt->bindParam(':name', $name, PDO::PARAM_STR);
        $stmt->bindParam(':email', $email, PDO::PARAM_STR);
        $stmt->bindParam(':message', $message, PDO::PARAM_STR);
        $result= $stmt->execute();
        $this->pdo->commit();
   
  } 

  function get_wda_results(){

 		return $result = $this->pdo->query("SELECT * FROM `wda_project_results` order by `id` DESC ");
  
  }  


   function check_emails($email){

    	return $result = $this->pdo->query("SELECT * FROM `wda_project_results` where `email`='".$email."' ")->fetch(PDO::FETCH_ASSOC);
  
  } 


}

  ?>