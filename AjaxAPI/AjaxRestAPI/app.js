import { ownHttp } from "./api/ownHttp.js";
const serverURL="http://127.0.0.1:3000/api";

let getButton = document.querySelector('#get-btn');
getButton.addEventListener('click',function() 
{
fetchEmployee();
});

let fetchEmployee = () =>
{
  let http=new ownHttp();
  let url=`${serverURL}/employee`;
  http.get(url);
};