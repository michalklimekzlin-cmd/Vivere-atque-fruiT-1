/* ==========================================
   VaFT AI
   Gold Edition
========================================== */

const orb = document.getElementById("orb");
const mic = document.getElementById("mic");
const input = document.querySelector("input");

/* =======================================
   Floating Orb
======================================= */

let angle = 0;

function animateOrb(){

    angle += 0.01;

    const x = Math.sin(angle) * 8;
    const y = Math.cos(angle) * 6;

    orb.style.transform =
    `translate(${x}px,${y}px)`;

    requestAnimationFrame(animateOrb);

}

animateOrb();

/* =======================================
   Mouse Glow
======================================= */

document.addEventListener("mousemove",(e)=>{

    const x =
    e.clientX / window.innerWidth * 100;

    const y =
    e.clientY / window.innerHeight * 100;

    document.body.style.background =
`
radial-gradient(circle at ${x}% ${y}%,
#3b2d10 0%,
#171717 35%,
#090909 100%)
`;

});

/* =======================================
   Input Animation
======================================= */

input.addEventListener("focus",()=>{

    input.parentElement.style.boxShadow=
    "0 0 35px rgba(255,210,80,.25)";

});

input.addEventListener("blur",()=>{

    input.parentElement.style.boxShadow=
    "";

});

/* =======================================
   Microphone
======================================= */

mic.addEventListener("click",()=>{

    mic.style.transform="scale(.88)";

    setTimeout(()=>{

        mic.style.transform="scale(1)";

    },120);

});

/* =======================================
   Typing Greeting
======================================= */

const title =
document.querySelector(".hero h2");

const text =
"Jsem připravená.";

title.innerHTML="";

let i=0;

function typing(){

if(i<text.length){

title.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,70);

}

}

typing();

/* =======================================
   Cards Animation
======================================= */

const cards =
document.querySelectorAll(".card");

cards.forEach((card,index)=>{

card.style.opacity=0;
card.style.transform="translateY(40px)";

setTimeout(()=>{

card.style.transition=".8s";

card.style.opacity=1;

card.style.transform="translateY(0px)";

},400+(index*180));

});

/* =======================================
   Easter Egg
======================================= */

let clicks=0;

document.querySelector(".logo").onclick=()=>{

clicks++;

if(clicks===5){

alert(
"☕ Dáme pivo na MRCDS Gangu?\n\nVlastně ne.\nDáme si jen espresso. 😄"
);

clicks=0;

}

};

/* =======================================
   Status Messages
======================================= */

const messages=[

"Přemýšlím...",

"Analyzuji...",

"Navrhuji řešení...",

"Jsem připravená.",

"Optimalizuji systém...",

"Dokončila jsem úkol."

];

const status =
document.querySelector(".status h2");

let current=0;

setInterval(()=>{

status.innerHTML=

messages[current];

current++;

if(current>=messages.length){

current=0;

}

},4000);

/* =======================================
   Finished
======================================= */

console.log(

"VaFT AI inicializována."

);

/* =======================================
   Canvas AI Orb
======================================= */

const canvas = document.getElementById("orbCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 240;
canvas.height = 240;

const nodes = [];

for(let i=0;i<45;i++){

    nodes.push({

        x:Math.random()*240,

        y:Math.random()*240,

        vx:(Math.random()-.5)*0.5,

        vy:(Math.random()-.5)*0.5

    });

}

function drawOrb(){

    ctx.clearRect(0,0,240,240);

    for(let i=0;i<nodes.length;i++){

        let a=nodes[i];

        a.x+=a.vx;
        a.y+=a.vy;

        if(a.x<0||a.x>240)a.vx*=-1;
        if(a.y<0||a.y>240)a.vy*=-1;

        ctx.beginPath();

        ctx.arc(a.x,a.y,2,0,Math.PI*2);

        ctx.fillStyle="#ffd86d";

        ctx.fill();

        for(let j=i+1;j<nodes.length;j++){

            let b=nodes[j];

            let dx=a.x-b.x;

            let dy=a.y-b.y;

            let dist=Math.sqrt(dx*dx+dy*dy);

            if(dist<45){

                ctx.beginPath();

                ctx.moveTo(a.x,a.y);

                ctx.lineTo(b.x,b.y);

                ctx.strokeStyle=

                "rgba(255,215,90,"+

                (1-dist/45)*0.45+

                ")";

                ctx.stroke();

            }

        }

    }

    requestAnimationFrame(drawOrb);

}

drawOrb();