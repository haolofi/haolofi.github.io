     var userArray = [
         {
             username: "1503",
             
         },
         {
             username: "user2",
             
         },
         {
             username: "user3",
             
         }
     ]
     var username = document.getElementById('myText').value;
     
function loginFunction () {
        let username = document.getElementById("myText").value;
  let currentUser = userArray.filter( user=> user.username == username)
  currentUser.length ? window.open("https://raw.githubusercontent.com/m-mourouh/Humburger-Menu/master/index.html", '_self'): alert("sai key")
}

const button = document.getElementById("button");
button.addEventListener('click', () => {
    loginFunction();
});