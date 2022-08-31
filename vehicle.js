// getting bottons
const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2')
const btn3 = document.getElementById('btn-3')

// getting vehicle name and paragraph
let vehicleName = document.getElementById('vehicle-name')
let vehicleParagraph = document.getElementsByClassName('vehicle-paragraph')[0]
let vehicleImage = document.getElementById('vehicle-image')
console.log(vehicleName.textContent);
// Each vehicle object
const  lauchObj ={
    'name': "Launch vehicle",
    'img' :  "./assets/technology/image-launch-vehicle-portrait.jpg",
    'description' :  "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
}
const  spaceportObj ={
    'name': "Spaceport",
    'img' : "./assets/technology/image-spaceport-portrait.jpg",
    'description' :  "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
}
const  spaceCapsuleObj ={
    'name': "Space capsule",
    'img' :  "./assets/technology/image-space-capsule-portrait.jpg",
    'description' :  "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
}

// eventListeners
btn1.addEventListener('click', ()=>{
        // to make it active
        btn1.classList.add('active')
        btn2.classList.remove('active')
        btn3.classList.remove('active')

    vehicleName.textContent = lauchObj.name;
    vehicleImage.src = lauchObj.img;
    vehicleParagraph.textContent = lauchObj.description


})

// btn2
btn2.addEventListener('click', ()=>{
    vehicleName.innerText = spaceportObj.name
    vehicleImage.src = spaceportObj.img
    vehicleParagraph.innerText = spaceportObj.description

    // to make it active
    btn1.classList.remove('active')
    btn2.classList.add('active')
    btn3.classList.remove('active')
})

// btn3
btn3.addEventListener('click', ()=>{
    vehicleName.textContent = spaceCapsuleObj.name
    vehicleImage.src = spaceCapsuleObj.img
    vehicleParagraph.textContent = spaceCapsuleObj.description

    // to make it active
    btn1.classList.remove('active')
    btn2.classList.remove('active')
    btn3.classList.add('active')
})

// for menu
const hamburgerOpen = document.getElementsByClassName('hambuger')[0]
const hamburgerClose = document.getElementsByClassName('hambuger-close')[0]

let hamburgerClose_Src = './assets/shared/icon-close.svg';

let hamburgerOpen_src = './assets/shared/icon-hamburger.svg'
    hamburgerOpen.src = hamburgerOpen_src
 let   openTemp = hamburgerOpen

function callOpenBtn(){
    const hamburgerOpen = document.getElementsByClassName('hambuger')[0]
    hamburgerOpen.src = hamburgerClose_Src
    hamburgerOpen.classList.add('hambuger-close')
    hamburgerOpen.classList.remove('hambuger')
}

hamburgerOpen.addEventListener('click', ()=>{
    callOpenBtn()

    const hamburgerClose = document.getElementsByClassName('hambuger-close')[0]

    console.log(hamburgerClose_Src)
    console.log(hamburgerClose)

    hamburgerClose.addEventListener('click', ()=>{
       
        const hamburgerClose = document.getElementsByClassName('hambuger-close')[0]
        hamburgerOpen.classList.remove('hambuger-close')
        hamburgerOpen.classList.add('hambuger')
        const hamburgerOpen = document.getElementsByClassName('hambuger')[0]


        console.log(hamburgerOpen_src)
        console.log(hamburgerOpen)
        // callOpenBtn()
    })

})

// hamburgerClose.addEventListener('click', ()=>{
//     hamburgerClose.src = openTemp
//     console.log(hamburgerClose_Src)
//     console.log(hamburgerClose)
// })