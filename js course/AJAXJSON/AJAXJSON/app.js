document.getElementById('button1').addEventListener('click', loadEmployee);

document.getElementById('button2').addEventListener('click', loadEmployees);

//SINGULAR EMPLOYEE
function loadEmployee(){
     //Create Object
     let xhr = new XMLHttpRequest();


     //open connection
     xhr.open('GET', 'employee.json', true);

     //Execute the function

     xhr.onload = function(){
          if (this.status === 200){
                const employee = JSON.parse(this.responseText);


               const output = `
               <ul>
                    <li>ID: ${employee.id}</li>
                    <li>Name: ${employee.name}</li>
                    <li>Company: ${employee.company}</li>
                    <li>Job: ${employee.job}</li>

               `

               //print html
               document.getElementById('employee').innerHTML = output;
               // console.log(this.responseText);
          }
     }

     // Send the request
     
     xhr.send();




}

//PLURAL EMPLOYEE(s)

function loadEmployees(){
     //Create Object
     let xhr = new XMLHttpRequest();


     //open connection
     xhr.open('GET', 'employees.json', true);

     //Execute the function

     xhr.onload = function(){
          if (this.status === 200){
                const employees = JSON.parse(this.responseText);

                    
               let output = '';

               employees.forEach(function(employee) {
                 output += `   
               
               <ul>
                    <li>ID: ${employee.id}</li>
                    <li>Name: ${employee.name}</li>
                    <li>Company: ${employee.company}</li>
                    <li>Job: ${employee.job}</li>
                    </ul>
               `;
          });
               // //print html
               document.getElementById('employees').innerHTML = output;

               console.log(this.responseText);
          }
     }

     // Send the request
     
     xhr.send();




}


  