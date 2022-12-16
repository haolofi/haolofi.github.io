     var userArray = [
         {
             username: "Free",
             
         },
         {
             username: "gqLSmY6J",
             
         },
         {
             username: "HxT0eTPUY8x[D0b",
             
         }
     ]
     var username = document.getElementById('myText').value;
     
function loginFunction () {
        let username = document.getElementById("myText").value;
  let currentUser = userArray.filter( user=> user.username == username)
  currentUser.length ? window.open("https://haolofi.github.io", '_self'): alert("sai key")
}

const button = document.getElementById("button");
button.addEventListener('click', () => {
    loginFunction();
});
