const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?


// when the button is clicked and 
// make an AJAX request to that url 
// append the retrieved information to the DOM
document.addEventListener("DOMContentLoaded", () => {

  const streetNode = document.getElementById('street')

  const button = document.getElementsByClassName('btn-primary')[0]
  // console.log(button)
  button.addEventListener('click', function(event) {
    let data = fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then(function(json) {
      const header = json.results[0]
      console.log('header', header)

      const streetName = header.location.street.name
      const name = header.name.first
      const nameNode = document.getElementById('fullname')
      const email = header.email
      const emailNode = document.getElementById('email')

      streetNode.innerHTML = streetName
      nameNode.innerText = name
      emailNode.innerText = email
    })
  })

  
  // console.log('data', data)

  console.log("CONTENT LOADED!");
});
