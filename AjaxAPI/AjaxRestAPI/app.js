import { ownHttp } from "./api/ownHttp.js";
const serverURL = "http://127.0.0.1:3000/api";

let getButton = document.querySelector('#get-btn');
getButton.addEventListener('click', function () {
    fetchEmployee();
});
let postButton = document.querySelector('#post-btn');
postButton.addEventListener('click', () => {
    postEmployee();
});

let putButton = document.querySelector('#put-btn');
putButton.addEventListener('click', () => {
    UpdateEmployeefunc();
})

let deleteButton = document.querySelector('#delete-btn');
deleteButton.addEventListener('click', () => {
    deleteEmployee();
})

let fetchEmployee = () => {
    let http = new ownHttp();
    let url = `${serverURL}/employee`;

    http.get(url, (Errors, data) => {
        if (Errors) throw Error
        for (let employee of data) {
            document.querySelector('#textView').innerHTML = `${employee.id}`;
        }
        console.log(data)
    });
};
let postEmployee = () => {
    let addEmpployee = {
        first_name: "kumar",
        second_name: "kumar",
        email: "kumar65@gmail.com",
        gender: "male",
        ip_address: "127.0.0.3"
    }
    let http = new ownHttp();
    let url = `${serverURL}/employee`;

    http.post(url, addEmpployee, (Errors, data) => {
        if (Errors) throw Error
        console.log(data);
        fetchEmployee();
    });
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
        fetchEmployee();
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

