const { response, request } = require('express');
const express= require('express')
const router=express.Router();



let employees=[
    {
        id : '2122',
        first_name : 'T',
        second_name : 'K',
        email : 'tk@gamil.com',
        gender : 'male',
        ip_address : '127.0.0.1'
    },
    {
        id : '2123',
        first_name : 'C',
        second_name : 'T',
        email : 'CT@gamil.com',
        gender : 'female',
        ip_address : '127.0.0.2'
    }

]

let getId =() =>
{
    return '-' + Math.random().toString(36).substring(2,9)
};

//Get
router.get('/employee',(request,response) =>
{
    console.log(`GET Request Received at Server ${new Date().toLocaleTimeString()}`);
    response.json(employees)
   
});

//post
router.post('/employee',(request,response) =>
{
   let employeede = {
       id : getId(),
       first_name : request.body.first_name,
       second_name : request.body.second_name,
       email : request.body.email,
       gender : request.body.gender,
       ip_address : request.body.ip_address
   }
   employees.push(employeede)
   console.log(`POST Request Received at Server ${new Date().toLocaleTimeString()}`);
   response.json({msg : 'POST Request is Success'});

});

//put 

router.put('/employee/:id', (request,response) =>
{
  let empId = request.params.id;
  console.log(empId)
  let updateEmployee ={
      id : empId,
      first_name : request.body.first_name,
      second_name : request.body.second_name,
      email : request.body.email,
      gender : request.body.gender,
      ip_address : request.body.ip_address
  };

  let existingEmployee = employees.find((employeess) => {
    return   employeess.id === empId;
  });
  employees.splice(employees.indexOf(existingEmployee),1,updateEmployee);
  console.log(`PUT Request Received at Server ${new Date().toLocaleTimeString()}`);
   response.json({msg : 'PUT Request is Success'});
});

//Delete

router.delete('/employee/:id', (request,response) => 
{
    let empId = request.params.id;
    employees = employees.filter((employee) =>
    {
      return employee.id !== empId;
    });
    console.log(`Delete Request Received at Server ${new Date().toLocaleTimeString()}`);
   response.json({msg : 'Delete Request is Success'});
});


module.exports = router;