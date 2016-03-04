		
		var student = [{"firstName" : "Akshay","lastName" : "Jadhav","rollNumber" :"1", "subject":"JAVA"},
							 {"firstName" : "Munna","lastName" : "Jadhav","rollNumber" :"2", "subject":"PHP"},
							 {"firstName" : "Arjun", "lastName" : "Jadhav","rollNumber" :"3", "subject":"RUBY"}];		
		$(document).ready(function(){		
		
		$("#adde").hide();
		$("#delete").hide();
		$("#update").hide();
		$("#display").hide();
		
		
		$("#addstud").click(function(){
			 $("#adde").slideToggle();
			 
			
		});
		$("#deletestud").click(function(){
			 $("#delete").slideToggle();
		});
		$("#updatestud").click(function(){
			 $("#update").slideToggle();
		});		
		
		$("#show").click(function(){
			
				$("#display").slideToggle();
		});
		
		$("#addstudent").click(function(){
			 $("#adde").slideToggle();
			 
			
		});
		
		$("#deletedata").click(function(){
			 $("#delete").slideToggle();
		});
		
		$("#updatestudent").click(function(){
			 $("#update").slideToggle();
		});
		 
  
	});
	
	function studlist(student)
			{
				var i;
			var out="<p> Student Table </p><br><table border='2' width='100%'><tr><th>FirstName</th><th>LastName</th><th>RollNumber</th><th>Subjects</th></tr>"
			var out="<p> Student Table </p><br><table border='2' width='100%'><tr><th>FirstName</th><th>LastName</th><th>RollNumber</th><th>Subjects</th></tr>"
				for(i=0;i<student.length;i++)
				{
				 out += "<tr><td>"+student[i].firstName + "</td><td>" + student[i].lastName + "</td><td>" + student[i].rollNumber + "</td><td>"+ student[i].subject + "</td></tr>";
				}
				out +="</table>";
				document.getElementById("demo").innerHTML = out;
			}
			
	function showstud(){
		
		studlist(student);
	}
			
	function addstudent(){
		
		var newstud = {"firstName" : document.getElementById('firstName').value,"lastName" : document.getElementById('lastName').value,"rollNumber" : document.getElementById('rollNumber').value, "subject":document.getElementById('subjects').value};
			student.push(newstud);
			studlist(student);
			document.getElementById("firstName").value="";
			document.getElementById("lastName").value="";
			document.getElementById("rollNumber").value="";
			document.getElementById("subjects").value="";
			
		}
		
	function deletestudent(){
		findAndRemove(student,"firstName",document.getElementById('delelem').value);		
		
		
	}
	
	function findAndRemove(student1, property, value) {
		var i;
		for(i=0;i<=student1.length;i++){
			if(student1[i].firstName==value){
			student1.splice(i,1);
			document.getElementById("delelem").value="";
			studlist(student1);
			}
		}
	}
	
	function updatestudent(){
		var i;
		for(i=0;i<student.length;i++){
			if(student[i].firstName == document.getElementById('updatename').value)
			{
				student[i].firstName = document.getElementById('updatefirstName').value;
				student[i].lastName = document.getElementById('updatelastName').value;
				student[i].rollNumber = document.getElementById('updaterollNumber').value;
				student[i].subject = document.getElementById('updatesubjects').value;
				break;				
			}
			
		}
		document.getElementById("updatefirstName").value="";
		document.getElementById("updatelastName").value="";
		document.getElementById("updatesubjects").value="";
		document.getElementById("updaterollNumber").value="";
		document.getElementById("updatename").value="";
		studlist(student);
		
	}
	
	
