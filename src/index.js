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
      displayToy(toy)
    }) 
  });
}

//CREATE CARD FOR EACH TOY
function displayToy(toy) {
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
  
  createButton.addEventListener("click", (e) => addMoreLikes(createParagraph, toy))
  createButton.textContent = "Like <3"
  createButton.setAttribute("class", "like-btn")

  createDiv.append(createH2, createImg, createParagraph, createButton)
  document.getElementById("toy-collection").append(createDiv)
}

//ADD LIKES VIA PATCH REQUEST
function addMoreLikes(p, toy) {
  console.log(p)
  let updateLikes = parseInt(p.textContent) + 1
  const addLikes = {likes: updateLikes}

  fetch(`http://localhost:3000/toys/${toy.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(addLikes)
  }).then(response => response.json()).then(likes => p.textContent = updateLikes).catch((error) => {
    console.error("Error:", error)
  })
}


//ADD FUNCTIONALITY TO "CREATE NEW TOY" BUTTON
  const form = document.querySelector(".add-toy-form")
  form.addEventListener("submit", addNewToy)
  function addNewToy(e) {
    e.preventDefault()
    const name = document.querySelector('[name = "name"]').value
    const image = document.querySelector('[name = "image"]').value
    //CREATE TOY OBJECT BASED OFF INFO ADDED TO THE FORM
    //SEND FORM INFO INTO THE DATABASE
    //UPDATED INFO FROM DATABASE DISPLAYS ON THE SCREEN
    console.log(name, image)
    const toy = {
      name: name,
      image: image,
      likes: 0
    }
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(toy)
    }
    fetch("http://localhost:3000/toys", config).then(response => response.json()).then(toy => displayToy(toy)).catch((error) => {console.error("Error:", error)})
  } 