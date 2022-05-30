import { ownHttp } from "./api/ownHttp.js";
const serverURL = "http://127.0.0.1:3000/api";

let getButton = document.querySelector('#get-btn');
getButton.addEventListener('click', function () {
    fetchEmployee();
});
let postButton = document.querySelector('#post-btn');
postButton.addEventListener('click', () => {
    DispayForm();
    //postEmployee();
});
//Add Employee Button
let addEmployeeButton = document.querySelector('#add-employee');
addEmployeeButton.addEventListener('click', () => {
    postEmployee();
})

let putButton = document.querySelector('#put-btn');
putButton.addEventListener('click', () => {
    UpdateEmployeefunc();
})

let deleteButton = document.querySelector('#delete-btn');

deleteButton.addEventListener('click', () => {
    deleteEmployee();
})
let table = document.querySelector('table')
let innerBody = document.querySelector('tbody')
//Get
let fetchEmployee = () => {
    let http = new ownHttp();
    let url = `${serverURL}/employee`;
    http.get(url, (Errors, data) => {
        if (Errors) throw Error
        var template;
        removeTableBody();
        for (let employee of data) {
            template = `
        <tr> 
          <td>${employee.id}</td>
          <td>${employee.first_name}</td>
          <td>${employee.second_name}</td>
          <td>${employee.email}</td>
          <td>${employee.gender}</td>
          <td>${employee.ip_address}</td>
        <tr>`
            table.innerHTML += template;
        }
        console.log(template);
        console.log(data)
        HideForm();
    });
};
//Post
let postEmployee = () => {
    let addEmpployee = {
        first_name: document.getElementById('fst-name').value,
        second_name: document.getElementById('scd-name').value,
        email: document.getElementById('email-adrs').value,
        gender: document.getElementById('gndr').value,
        ip_address: document.getElementById('ip-adrs').value
    }
    let http = new ownHttp();
    let url = `${serverURL}/employee`;
    http.post(url, addEmpployee, (Errors, data) => {
        if (Errors) throw Error
        console.log(data);
    });
    fetchEmployee();
}
let UpdateEmployeefunc = () => {
    let EmpId = "2122";
    let updateEmployee = {
        empId: EmpId,
        first_name: "kumar",
        second_name: "kumar",
        email: "kumar78@gmail.com",
        gender: "male",
        ip_address: "127.0.0.3"
    }
    let http = new ownHttp();
    let url = `${serverURL}/employee/${EmpId}`;

    http.put(url, updateEmployee, (Errors, data) => {
        if (Errors) throw Error
        console.log(data);
        //fetchEmployee();
    })
}
let deleteEmployee = () => {
    let EmpId = "2122";
    let http = new ownHttp();
    let url = `${serverURL}/employee/${EmpId}`;

    http.delete(url, (Errors, data) => {
        if (Errors) throw Error;
        console.log(data)
    });

}
//Remove tableBody
function removeTableBody() {
    $('#showTbl tbody').empty();
}
//CSS Style
//Hide a Employee Div
function HideForm() {
    var element = document.getElementById("emp-form");
    element.style.display = "none";
}
//Diplay Div
function DispayForm() {
    var element = document.getElementById("emp-form");
    element.style.display = "block";
}
//Jquery
// $(document).ready(function() {
//     $('#add-employee').click(function() {
//         if ($('#fst-name').val().length === 0) {
//             alert('Enter your name!');
//         }
//     })
// });
