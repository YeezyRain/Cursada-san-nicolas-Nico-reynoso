console.log ("hola gente")

fetch(url)
.then(response => response.json)
.then(data => {

  let element = document.getElementById('elem')
  element.innerHTML = `
  <p>${data.name}</p>
  <p>${data.order}</p>
  <img src='${data.sprites.front_default}'/>
  `; 
 
  console.log(data)
}) 
.catch(err=>console.log(err))