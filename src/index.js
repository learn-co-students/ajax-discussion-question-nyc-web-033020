const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?
const button = document.getElementById('btn btn-primary')



document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");



fetch('https://randomuser.me/api/')
.then(resp => resp.json())
.then(json => displayData(json))


function displayData(json){
const container = document.querySelector('.container')
let personData = json.results[0]
console.log(personData)
container.innerHTML = `  
<div class="row align-items-start">
<div class="col">
  <img src="Profile Picture Url" alt="" id="profile_picture"/>
</div>
<div class="col">
  <label for="fullname"> <!-- Include first name, last name AND title -->
    Name:
  </label>
  <h3 id="fullname">${personData.name.first} ${personData.name.last}</h3>
</div>
<div class="col">
  <label for="email">
    Email:
  </label>
  <h4 id="email">${personData.email}</h4>
</div>
</div>
<div class="row align-items-center">
<div class="col">
  <label for="street">Street:</label>
  <h4 id="street">${personData.location.street.number} ${personData.location.street.name}</h4>
  <label for="city">City:</label>
  <h4 id="city">${personData.location.city}</h4>
  <label for="state">State:</label>
  <h4 id="state">${personData.location.state}</h4>
  <label for="postcode">Post Code:</label>
  <h4 id="postcode">${personData.location.postcode}</h4>
</div>
<div class="col">
  <label for="phone">Phone:</label>
  <h4 id="phone">${personData.phone}</h4>
  <label for="cell">Cell:</label>
  <h4 id="cell">${personData.cell}</h4>
</div>
<div class="col">
  <label for="date_of_birth">Date of Birth:</label>
  <h4 id="date_of_birth">${personData.dob.date}</h4>
</div>
</div>
<div class="row align-items-end">
<div class="col">
</div>
<div class="col">
  <button type="button" class="btn btn-primary">Press me to add a new person!</button>
</div>
<div class="col">
</div>
</div>


`

}



});


