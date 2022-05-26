


let jsons =  fetch("./employee.json")
.then(response => {
   return response.json();
})
.then(function(jsondata)
{
  callme(jsondata)
});
function callme(data)
{
 var datavaie =JSON.stringify(data);
    console.log(JSON.stringify(data));
}