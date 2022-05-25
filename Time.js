
n = 10;
function increment() {
    n--;
    document.write(n, "<br>")
}
//setInterval("increment()",2000)
increment()

function userDate(year, month, date, hour, minute, sec, millisec) {
    var userDate = new Date(year, month, date, hour, minute, sec, millisec)
    document.write(userDate)
}
//userDate(2022,0,26,2,13,55,21)
var userDate = new Date()
document.write(userDate.getMilliseconds())
document.write("<br>", userDate.getTime())
document.write("<br>", userDate.getSeconds())
//document.write("<br>",userDate.setUTCHours())
document.write("<br>", userDate.getHours())
//userDate(2022,0,0,0,0,0,0,0,0,0,0,0)

function timeInterval() {
    var currentTime = new Date()
    var min = currentTime.getSeconds();
    document.write("<br>", min)

}
//setInterval("timeInterval()", 2000) 
//var obj=new Object()
function obj() {
    this.name = "kumar"
    this.gender = "male"
    this.getName = function () {
        return this.name;
    }
}




obj.prototype.post = function () {
    return (this.name + " is " + this.gender + " gender")
}
var createObj = new obj();

console.log(createObj)

document.write("<br> <h3>", createObj.name)
var Details = {
    Name: "Tk",
    Height: 5.7,
    Address: {
        Area: "T-Nagar", City: "Chennai", Contact: [1478, 58, 599, 8558, 547]
    }
}
obj.prototype.area = "Chennai"
document.write(" <br> Details :  ", Details.Address.Contact[3])
document.write("<br> <h4>", createObj.area)

Employee =
{
    name: "Ali",
    City: "Kadayanalllur",

    changeName(name) {
        this.name = name
    },
    changeCity(city) {
        this.city = city
    }
}

var e1 = Object.create(Employee)
//e1.changeName("Kumar")
document.write("<br>Employe : ", e1.name)




function zoho(id, role) {
    this.id = id;
    this.role = role;
}
function zohoTeam(id, name, desg) {
    zoho.call(this, id, desg)
    this.name = name
}
var zo = new zohoTeam(78, "unique", "hg")
console.log(zo)
