    // Temp stuff
    
    class Experiment {
        #name = "";
        #date = "";
        constructor(name) {
            this.#name = name;
            
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1);
            const day = String(currentDate.getDate());
            
            this.#date = `${year}-${month}-${day}`;
            
        }
    
        GetName() {
            return this.#name;
        }
        GetDate() {
            return this.#date
        }
    }
    
    for (let i = 0; i < 10; i++) {
        const Exper = new Experiment("Spoiler");
        const ExperHTML = 
        `
        <aside class="experimentWraper">
            <p class="contentText">${Exper.GetName()}</p>
            <p>_</p>
            <p class="contentText">${Exper.GetDate()}</p>
        </aside>
        `;
        document.getElementsByClassName("HistoryofExperWraper")[0].insertAdjacentHTML("beforeend", ExperHTML);
        
    }
    
    
    
}

    function ToggleSwitches() {
        document.getElementsByClassName("onOffSwitches")[0].classList.toggle("ActiveSwitchStatus");
        document.getElementsByClassName("onOffSwitches")[1].classList.toggle("ActiveSwitchStatus");
    }
    document.getElementById("hh").addEventListener('click', ToggleSwitches);





//Button Controller
const Buttonwraper = document.getElementsByClassName("Buttonwraper");
const ControlButtons = document.getElementsByClassName("control-button");
function Activate(i) {
    document.getElementsByClassName("navHelp")[i].classList.add('navHelpShow');

}
for (let i = 0; i < Buttonwraper.length; i++) {
    let HoverTimeout;
    Buttonwraper[i].addEventListener('mouseover', function(event) {
        clearTimeout(HoverTimeout);

        HoverTimeout = setTimeout(() => {
            Activate(i);

        }, 1000);
    });


    Buttonwraper[i].addEventListener('mouseout', function(event) {
        document.getElementsByClassName("navHelp")[i].classList.remove('navHelpShow');
        clearTimeout(HoverTimeout)
    });
}

for (let i =0; i< ControlButtons.length; i++) {
    ControlButtons[i].addEventListener('click', function(event) {
        for (let j = 0; j  < ControlButtons.length; j++) {
            if (j != i) {
                ControlButtons[j].classList.remove("currentOpenPage");
            } else {
                ControlButtons[j].classList.add("currentOpenPage");
                
                document.getElementsByClassName("semiPagersWraper")[0].style.transform = `translateY(${-25*j}%)`;
            }
        }
    });
}





// Slider Switch
document.getElementById("Range").value = 0;
document.getElementById("Range").addEventListener('touchend', sliderCheck);
document.getElementById("Range").addEventListener('mouseup', sliderCheck);

let interval;
function sliderCheck() {
    try {
        clearInterval(interval);
    } catch (error) {}
    console.log("mouse up!");
    let x = document.getElementById("Range").value;
    let counter = 0;
    if (x < 95) {

        interval = setInterval(() => {
            counter++;
            x -= 1;
            document.getElementById("Range").value = x;
            
            if (x < 1) {
                clearInterval(interval);
            }

        }, 1);
    
    } else {
        ToggleSwitches();
    }
    
}







//Onload showcase
window.onload = function() {
    let counter = 0;
    const interval = setInterval(function() {
        counter++;
        let xIndex = Math.floor(Math.random() * (window.innerWidth  + 1));;
        let yIndex = Math.floor(Math.random() * (window.innerHeight + 1));
        
        let wind = `        
            <svg class="WindShow" style="top: ${yIndex}px; left: ${xIndex - 70}px;" fill="#000000" viewBox="0 0 24 24" id="wind" xmlns="http://www.w3.org/2000/svg" class="icon multi-color"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title style="stroke-width: 2;">wind</title><path id="secondary-stroke" d="M10,3a2,2,0,0,1,0,4m0,0H3M3,19h7" style="fill: none; stroke: #2ca9bc; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><path id="primary-stroke" d="M17.5,11a3.5,3.5,0,0,0,0-7m0,7H3m13,4H3m13,6a3,3,0,0,0,0-6" style="fill: none; stroke: #000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></g></svg>
        `;
        document.getElementsByClassName("openingShowWraper")[0].insertAdjacentHTML('beforeend', wind);
        
        if (counter > 500) {
            clearInterval(interval);
            setTimeout(()=> {
                document.getElementsByClassName("openingShowWraper")[0].classList.add("Hide");
            },3000);
            setTimeout(()=> {
                document.getElementsByClassName("openingShowWraper")[0].remove();
            }, 5000);
        }
    }, 10);
    










