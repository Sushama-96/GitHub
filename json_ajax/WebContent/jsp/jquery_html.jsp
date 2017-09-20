<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<script type="text/javascript" src="../js/jquery-3.2.1.min.js"></script>
		<script type="text/javascript" src="../js/jquery.js"></script>
		<link rel="stylesheet" type="text/css" href="../css/jquery_style.css">
		<title>Sample Registration Form using Json with AJAX</title> 
	</head>
	<body>
		<h1>Registration Form</h1>
		<form id="myForm" name="myForm" onsubmit="return false">	
			<div class="row">
				<div class="name">
					<label><b>Name:</b></label>
					<input type="text" class="align-right" placeholder="Enter your Full Name" id="name">
				</div><br>
				<div class="address">
					<label id = "address_new"><b>Enter your Address:</b></label>
					<textarea name="textarea" placeholder="Enter your Address" id="address"></textarea>
				</div><br>
				<div class="country">
					<label><b>Select your country:</b></label>
					<select multiple id="select_country" name="country" >
						<option value="India" class="country">India</option>
						<option value="Australia" class="country">Australia</option>
						<option value="USA"class="country">USA</option>
						<option value="UK" class="country">UK</option>
					</select>
				</div><br>
				<div class="email">
		   			<label><b>Email:</b></label>
		   		 	<input type="text" class="align-right" placeholder="Enter your Email" id="email">
		   		</div><br>
		   		<div class="gender">
		   		 	<label><b>Gender:</b></label>
					<input type="radio" name="gender" value="male" id="gender" class="gender1">
					<label for="male">Male</label>
					<input type="radio" name="gender" value="female" id="gender" class="gender1">
					<label for="female" id="align">Female</label>
				</div><br>
				<div class="Skills">
					<label for="skills"><b>Skills:</b></label>
		    		<input type="checkbox" name="skills" value="php" id="skills" class="skills">
		    		<label for="skills">PHP</label>
		    		<input type="checkbox" name="skills" value="java" id="skills1" class="skills">
		    		<label for="skills1">Java</label>
		    		<input type="checkbox" name="skills" value=".net" id="skills2" class="skills">
		    		<label for="skills2">.Net</label>
					<input type="checkbox" name="skills" value="ajax" id="skills3" class="skills">
		    		<label for="skills2">Ajax</label>
			 	</div><br>
				<div class="age">
					<label><b>Age:</b></label>
					<input type="number" id="age" placeholder="Enter your Age" name="Age">
		 		</div><br>
		  		<div class="birthDate">
					<label><b>Birth Date:</b></label>
		 			<input type="date" class ="align-right" name="bdaytime" id="bday1">
	 			</div><br>
				<button type='button' id='add_button' value='Add' class='add'>Add</button>
				 <button type='button' id='save_button' value='Save' class='save'>Save</button>
				 <input type="button" value="Clear" onclick="clearForm()" class ='clear'>
			</div>	
		</form>
		<br>
		<table id="myTable">
		<thead>
  			<tr>
  				<th>Sr No.</th>
  				<th>Name</th>
  				<th>Address</th>
  				<th>Country</th>
				<th>Email</th>
				<th>Gender</th>	
    			<th>Skills</th>					
    			<th>Age</th>
    			<th>Birth_Date</th>
    			<th>Edit</th>
    			<th>Delete</th>
  			</tr>
			</thead>
			<tbody id="tableBody">
			
			</tbody>
		</table>
	</body>
</html>