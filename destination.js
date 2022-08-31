const destinationImage = document.getElementById('destination-img')

// for sub nav bar
const moonLink = document.getElementById('moon')
const marsLink = document.getElementById('mars')
const europaLink = document.getElementById('europa')
const titanLink = document.getElementById('titan')

let destinationTitle = document.getElementById('destination-title')
let destinationParagraph = document.getElementById('destination-paragraph')
// footer variables
let distanceValue = document.getElementsByClassName('value')[0]
let travelValue = document.getElementsByClassName('value')[1]

// objects for different destination
const moonObj = {
    'img': "./assets/destination/image-moon.png",
    'name': "Moon",
    "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    "distance": "384,400 km",
    "travel": "3 days"
}
const marsObj = {
    'img': "./assets/destination/image-mars.png",
    'name': "Mars",
    "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    "distance": "225 mil. km",
    "travel": "9 months"
}

const europaObj = {
    'img': "./assets/destination/image-europa.png",
    'name': "Europa",
    "description":  "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    "distance": "628 mil. km",
      "travel": "3 years"
}

const titanpaObj = {
    'img': "./assets/destination/image-titan.png",
    'name': "Titan",
    "description":  "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    "distance": "1.6 bil. km",
    "travel": "7 years"
}


// calling event listeners
moonLink.addEventListener('click', ()=>{
    // to add border to the active link
    moonLink.classList.add('active')
    marsLink.classList.remove('active')
    europaLink.classList.remove('active')
    titanLink.classList.remove('active')

    // to change title description
    destinationTitle.textContent = moonObj.name;
    destinationParagraph.textContent = moonObj.description;
    destinationImage.src = moonObj.img
    distanceValue.textContent = moonObj.distance
    travelValue.textContent = moonObj.travel
})

marsLink.addEventListener('click', ()=>{
    // to add border to the active link
    moonLink.classList.remove('active')
    marsLink.classList.add('active')
    europaLink.classList.remove('active')
    titanLink.classList.remove('active')

    // to change title description
    destinationTitle.textContent = marsObj.name;
    destinationParagraph.textContent = marsObj.description;
    destinationImage.src = marsObj.img
    distanceValue.textContent = marsObj.distance
    travelValue.textContent = marsObj.travel
})

europaLink.addEventListener('click', ()=>{
    // to add border to the active link
    moonLink.classList.remove('active')
    marsLink.classList.remove('active')
    europaLink.classList.add('active')
    titanLink.classList.remove('active')

    // to change title description
    destinationTitle.textContent = europaObj.name;
    destinationParagraph.textContent = europaObj.description;
    destinationImage.src = europaObj.img
    distanceValue.textContent = europaObj.distance
    travelValue.textContent = europaObj.travel
})

titanLink.addEventListener('click', ()=>{
    // to add border to the active link
    moonLink.classList.remove('active')
    marsLink.classList.remove('active')
    europaLink.classList.remove('active')
    titanLink.classList.add('active')

    // to change title description
    destinationTitle.textContent = titanpaObj.name;
    destinationParagraph.textContent = titanpaObj.description;
    destinationImage.src = titanpaObj.img
    distanceValue.textContent = titanpaObj.distance
    travelValue.textContent = titanpaObj.travel
})