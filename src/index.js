document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("button")

  function handleButton() {
    fetch("https://randomuser.me/api/")
      .then( response => response.json() )
      .then( json => showData(json) )
  }

  function showData(data) {
    let name = document.querySelector("[for='fullname']")
    let email = document.querySelector("[for='email']")
    name.innerHTML += `${data.results[0].name.first}`
    email.innerHTML += `${data.results[0].email}`
  }

  button.addEventListener("click", handleButton)
});
