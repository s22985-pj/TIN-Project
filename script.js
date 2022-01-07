

var library = {
    xmas:[
        'Icons\\icon-01.jpg',
        'Icons\\icon-02.jpg',
        'Icons\\icon-03.jpg',
        'Icons\\icon-04.jpg',
        'Icons\\icon-05.jpg',
        'Icons\\icon-06.jpg',
        'Icons\\icon-07.jpg',
        'Icons\\icon-08.jpg',
        'Icons\\icon-09.jpg',
        'Icons\\icon-10.jpg',
        'Icons\\icon-01.jpg',
        'Icons\\icon-02.jpg',
        'Icons\\icon-03.jpg',
        'Icons\\icon-04.jpg',
        'Icons\\icon-05.jpg',
        'Icons\\icon-06.jpg',
        'Icons\\icon-07.jpg',
        'Icons\\icon-08.jpg',
        'Icons\\icon-09.jpg',
        'Icons\\icon-10.jpg'
    ]
}

var images = [];
var time = 0;
var click = -1;
var choiceBut1 = "";
var choiceBut2 = "";
var end = 0;

var beforeBut = document.querySelector("#before");
var themeBut = document.querySelector("#theme");
var boxV = document.getElementsByClassName("box");
var memory = document.querySelector(".memory");
var stopwatch = document.querySelector("#time");
var final = document.querySelector("#final");
var afterwin = document.querySelector("#after");
var playAgain = document.querySelector("#again");




themeBut.addEventListener("click", function(e) {
    if (e.target.classList.contains("theme")) {
        addThemes(e.target.id);
        beforeBut.classList.add("hidden");
    }
});

function addThemes(theme) {
    for (let i=0; i<20; i++) {images.push(library[theme][i]);}

    for (let i=0; i<20; i++) {
        var x = Math.floor(Math.random() * (images.length -1));
        boxV[i].innerHTML = "<img src='"+images[x]+"'alt='image' class='hidden'>";
        images.splice(x, 1);
    }
}

memory.addEventListener("click", Logic);

function Logic(e) {
    if (e.target.classList.contains("play")) {
        e.target.firstChild.classList.remove("hidden");

        if ( click < 1 ){
            choiceBut1 = e.target;

            if ( click === -1 ) {
                timer = setInterval(function(){
                time++;
                stopwatch.innerHTML = time;
                }, 1000);
            }
            click =1;
        }
        else if (e.target !== choiceBut1) {
            choiceBut2 = e.target;
        
        
            if (choiceBut1.firstChild.src !== choiceBut2.firstChild.src){
                memory.removeEventListener("click", Logic);
                setTimeout( function(){
                    choiceBut1.firstChild.classList.add("hidden");
                    choiceBut2.firstChild.classList.add("hidden");
                    memory.addEventListener("click", Logic);
                }, 400);
            
            }
            else {
                end += 2;
                choiceBut1.firstChild.classList.add("outlined");
                choiceBut2.firstChild.classList.add("outlined");
                choiceBut1.classList.remove("play");
                choiceBut2.classList.remove("play");

                if (end === 20){
                    clearInterval(timer);
                    final.innerHTML = " Gratulację ! <br>  Zakończono w "+ time +" sek";
                    afterwin.classList.remove("hidden");
                }
            }
            click = 0;

        }
    }
}

playAgain.addEventListener("click", again);

function again() {
    time = 0;
    click = -1;
    choiceBut1 = "";
    choiceBut2 = "";
    end = 0;
    beforeBut.classList.remove("hidden");
    afterwin.classList.add("hidden");
    for (let i = 0; i < 20; i++) {
        boxV[i].classList.add("play");
        boxV[i].firstChild.classList.add("hidden");
      }
        stopwatch.textContent = time;

}