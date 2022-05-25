var myImg = document.querySelector('img')

document.querySelector('img').addEventListener('click',
    function () {
        let mysrc = myImg.getAttribute('src')
        if (myImg === 'image/image1.png') {
            myImg.setAttribute('src', 'image/image1.png')
        }
        else {
            myImg.setAttribute('src', 'image/image2.png')
        }
    });

let mybutton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUserName() {
    let myName = prompt("please enter your name")
   
    localStorage.setItem('name', myName)

    myHeading.textContent("Hi Am ," + myName)
}

if (!localStorage.getItem('name')) {
    document.write("Hlooo")
    setUserName()
}
else {
    let storedName = localStorage.getItem('name')
    myHeading.textContent = "Hi am ," + storedName
}
mybutton.onclick = function () {
    setUserName()

}
