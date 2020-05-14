const fullname = document.getElementById("fullname");
// console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  // console.log("CONTENT LOADED!");

  // console.log("Hello")
 
// fetch('https://randomuser.me/api/')
//   .then( res => res.json() )
//   .then( data => {
//     console.log("Hi") 
//   })
 
// console.log("Sup?")

// function fetchData(){
//   let data = fetch('https://randomuser.me/api/')
//     .then( res => res.json() )
//     .then( res => res )
//   console.log(data)   
// }

// fetchData()

// function fetchData(){
//   let data = fetch('https://randomuser.me/api/')
//     .then( res => res.json() )
//     .then( json => console.log(json) )
// }

// fetchData()


// function fetchData(){
//   let data = fetch('https://randomuser.me/api/')
//     .then( res => res.json() )
//     .then( console.log )
// }

// fetchData()

document.addEventListener('click', function(event){

  event.preventDefault()

    fetch('https://randomuser.me/api/')
    .then(r => r.json())
    .then(data => getData(data) )


    function getData(data){
 const bigContainer = document.querySelector('.container')

const bigData = data["results"][0]

const firstName = bigData["name"]["first"]

const lastName = bigData["name"]["last"]

const fullName = firstName + lastName

const userName = document.getElementById('fullname')

userName.innerHTML = fullName

console.log(fullName)



//  const cols = document.getElementsByClassName('col')

//  const image = cols[0]
//  const name = cols[1]

//  const email = cols[2]

//  console.log(name)


       
const email = document.getElementById('email')

email.innerHTML = "yahya14@gmail.com"



    }


})





});
