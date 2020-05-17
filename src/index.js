const fullName = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullName); //what will fullname evaluate to?
const newPersonButton = document.querySelector('button')

const email = document.getElementById('email'),
      street = document.getElementById('street'),
      city = document.getElementById('city'),
      state = document.getElementById('state'),
      postcode = document.getElementById('postcode'),
      phone = document.getElementById('phone'),
      cell = document.getElementById('cell'),
      dateOfBirth = document.getElementById('date_of_birth')

const personFields = [fullName, email, street, city, state, postcode, phone, cell]
 
document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

});

newPersonButton.addEventListener('click', () => {
  fetch('https://randomuser.me/api/')
  .then(resp => resp.json())
  .then(json => {
    let person = json.results[0]
    console.log(person)

    fullName.innerText = `${person.name.title} ${person.name.first} ${person.name.last}`
    dateOfBirth.innerText = person.dob.date
    email.innerText = person.email
    street.innerText = `${person.location.street.number} ${person.location.street.name}`
    city.innerText = person.location.city
    state.innerText = person.location.state
    postcode.innerText = person.location.postcode
    phone.innerText = person.phone
    cell.innerText = person.cell
  });
});
