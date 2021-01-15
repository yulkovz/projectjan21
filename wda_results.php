 <?php 

 	include_once('functions.php');
    $obj = new functions();
    $obj->connect();  
    $mysqli = new mysqli(DB_SERVER, DB_SERVER_USERNAME, DB_SERVER_PASSWORD, DB_DATABASE);

	
	if (isset($_POST['email'])){
	  $check=$obj->check_emails($_POST['email']);
	  if($check==false)	{
 	   $obj->set_wda_results($_POST);
 	  }
	
	}
?>

<!DOCTYPE html>
<html lang="en">
    <head>
	    <meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
	    <meta name="description" content="">
	    <meta name="author" content="">
	    <link rel="icon" href="favicon.ico">

	    <title>WDA Contact Info</title>

	    <!-- Bootstrap core CSS -->
	    <link href="css/style.css" rel="stylesheet">
    </head> 

    <body>


		<center>
		 	<h1>WDA Feedback</h1>
			<table id="t01" style="width: 50%">
			
				<tr>	
		 			<th>Name</th>
		 			<th>Email</th>
		 			<th>Message</th>
		 		</tr>
			
				<?php
					$a=$obj->get_wda_results();
					foreach ($a as $b) { ?>
						
						<tr>	
							<td><?php echo $b['name']; ?></td>
							<td><?php echo $b['email']; ?></td>
							<td><?php echo $b['message']; ?></td>
						
						</tr>

			    <?php } ?>
		    </table>
		</center>
    </body>
</html>