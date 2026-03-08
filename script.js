const slides=document.querySelectorAll(".slide")
let index=0

function showSlide(i){

slides.forEach(s=>s.classList.remove("active"))

if(i<0)index=slides.length-1
else if(i>=slides.length)index=0
else index=i

slides[index].classList.add("active")

if(index===slides.length-1){
startFireworks()
}

}
document.getElementById("prev").onclick=()=>showSlide(index-1)


// письмо

const letter=document.getElementById("letter")

document.getElementById("openLetter").onclick=()=>{
letter.classList.remove("hidden")
}

document.getElementById("closeLetter").onclick=()=>{
letter.classList.add("hidden")
}

// particles background

const canvas=document.getElementById("particles")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let particles=[]

for(let i=0;i<80;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2+1,
d:Math.random()*1
})
}

function drawParticles(){

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="rgba(255,182,193,.7)"

particles.forEach(p=>{
ctx.beginPath()
ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
ctx.fill()

p.y+=p.d

if(p.y>canvas.height)p.y=0
})

requestAnimationFrame(drawParticles)

}

drawParticles()



// fireworks

function startFireworks(){

for(let i=0;i<30;i++){

setTimeout(()=>{

let div=document.createElement("div")

div.style.position="fixed"
div.style.left=Math.random()*100+"vw"
div.style.top=Math.random()*100+"vh"
div.style.width="6px"
div.style.height="6px"
div.style.borderRadius="50%"
div.style.background=`hsl(${Math.random()*360},100%,60%)`
div.style.boxShadow=`0 0 20px white`

document.body.appendChild(div)

setTimeout(()=>div.remove(),1500)

},i*150)

}

}

const music=document.getElementById("music")
const musicBtn=document.getElementById("next")

let playing=false

musicBtn.onclick=()=>{

showSlide(index+1)

if(!playing){
music.play()
playing=true
}

}