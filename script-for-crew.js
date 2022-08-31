// Getting bttons for slider
const slider1 = document.getElementById('slider-1')
const slider2 = document.getElementById('slider-2')
const slider3 = document.getElementById('slider-3')
const slider4 = document.getElementById('slider-4')

// making objects for each crew member

const crew1 = {
    'title': 'Commander',
    'name': 'Douglas Hurley',
    'img': "./assets/crew/image-douglas-hurley.png",
    'bio': 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
}
console.log(crew1.img)

const crew2 = {
    'title': 'Pilot',
    'name': 'Victor Glover',
    'img': "./assets/crew/image-victor-glover.png",
    'bio': ' Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'
}

const crew3 = {
    'title': 'Mission Specialistot',
    'name': 'Mark Shuttleworth',
    'img': "./assets/crew/image-mark-shuttleworth.png",
    'bio': ' Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
}

const crew4 = {
    'title': 'Flight Engineer',
    'name': 'Anousheh Ansari',
    'img': "./assets/crew/image-anousheh-ansari.png",
    'bio': '  Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'
}


// event;isten
    let crewTitle = document.getElementsByClassName('crew-title')[0];
    let crewName = document.getElementsByClassName('crew-name')[0]
    let crewBio = document.getElementsByClassName('crew-para')[0]
    let crewImg = document.getElementById('imagee')
    console.log(crewImg.src)
    

    let sliderOne = document.getElementsByTagName('button')[0]
    let sliderTwo = document.getElementsByTagName('button')[1]
    let sliderThree = document.getElementsByTagName('button')[2]
    let sliderFour = document.getElementsByTagName('button')[3]


slider1.addEventListener('click', ()=>{
    crewTitle.textContent = crew1.title;
    crewName.textContent = crew1.name;
    crewBio.textContent = crew1.bio;
    crewImg.src = crew1.img
        sliderOne.classList.add('active')
        sliderTwo.classList.remove('active')
        sliderThree.classList.remove('active')
        sliderFour.classList.remove('active')
    
})
slider2.addEventListener('click', ()=>{
    crewTitle.textContent = crew2.title;
    crewName.textContent = crew2.name;
    crewBio.textContent = crew2.bio;
    crewImg.src = crew2.img
        sliderTwo.classList.add('active')
        sliderOne.classList.remove('active')
        sliderThree.classList.remove('active')
        sliderFour.classList.remove('active')
})
slider3.addEventListener('click', ()=>{
    crewTitle.textContent = crew3.title;
    crewName.textContent = crew3.name;
    crewBio.textContent = crew3.bio;
    crewImg.src = crew3.img
        sliderThree.classList.add('active')
        sliderOne.classList.remove('active')
        sliderTwo.classList.remove('active')
        sliderFour.classList.remove('active')
})
slider4.addEventListener('click', ()=>{
    crewTitle.textContent = crew4.title;
    crewName.textContent = crew4.name;
    crewBio.textContent = crew4.bio;
    crewImg.src = crew4.img
        sliderFour.classList.add('active')
        sliderOne.classList.remove('active');
        sliderTwo.classList.remove('active'); 
        sliderThree.classList.remove('active');
})
