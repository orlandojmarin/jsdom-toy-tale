let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  getToyData()
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

//iterate over the array
    //create container for each element in the array with toy info
    //append container to the DOM
function getToyData() {
  fetch('http://localhost:3000/toys')
  .then(response => response.json())
  .then(data => {
    data.forEach(toy => {
      console.log(toy)
      const createDiv = document.createElement("div")
      createDiv.setAttribute("class","card") 

      const createH2 = document.createElement("h2")
      createH2.textContent = toy.name

      const createImg = document.createElement("img")
      createImg.src = toy.image
      createImg.setAttribute("class", "toy-avatar")

      const createParagraph = document.createElement("p")
      createParagraph.textContent = toy.likes

      const createButton = document.createElement("button")
      createButton.textContent = "Like <3"
      createButton.setAttribute("class", "like-btn")
      //createButton.addEventListener("click", (e) => updateLikes(e))

      createDiv.append(createH2, createImg, createParagraph, createButton)
      document.getElementById("toy-collection").append(createDiv)
    }) 
  });
}

//add new toy function, include a POST request
  //querySelector add either . or # depending on class or ID
  //selecting the class form html element
  const form = document.querySelector(".add-toy-form")
  form.addEventListener("submit", addNewToy)
  function addNewToy() {
    e.preventDefault()
    console.log(e)
  // POST http://localhost:3000/toys
  // headers: 
  // {
  //   "Content-Type": "application/json",
  //   Accept: "application/json"
  // }
  
  // body: JSON.stringify({
  //   "name": "Jessie",
  //   "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
  //   "likes": 0
  }


// function updateLikes(e) {
//     fetch(`http://localhost:3000/toys/${id}`, {
//     method: 'PATCH', // or 'PUT'
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: "application/json"
//     },
//     body: JSON.stringify({
//       "likes": likes.value + 1
//     }),
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log('Success:', data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
//   }
// }

// function addNewToy() {
// const createNewToy = document.querySelector(".submit")
// createNewToy.addEventListener("click", (e) => {
//   e.preventDefault()
//   const makeNewToyName = document.querySelector('[name = "name"]')
//   console.log(makeNewToyName)
//   const makeNewToyImage = 
//   fetch('http://localhost:3000/toys', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//     "Accept": "application/json"
//   },
//   body: JSON.stringify({
//     name: ,
//     image: ,
//     likes: 
//   }),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });
// })
// }

// addNewToy()


//get the number of likes to change +1 each time the like button is clicked
//make sure that the add a toy feature works