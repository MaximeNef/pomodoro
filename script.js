let start = document.getElementById('start')
let stop = document.getElementById('stop')
let reset  = document.getElementById('reset')

let sminute = document.getElementById('s_minute')
let sseconde = document.getElementById('s_seconde')

let bminute = document.getElementById('b_minute')
let bseconde = document.getElementById('b_seconde')

let startTimer;
console.log(startTimer)




let videoPlayer = document.getElementById('videoPlayer')

start.addEventListener('click',function(){
    videoPlayer.play()
    if(startTimer === undefined){

      
       











        startTimer = setInterval(timer,1000)
       /*  startTimer = setInterval(changeimage,1000) */
      
       
    }else{
        alert('timer is already runing')
    }
})
reset.addEventListener('click',function(){
    sminute.innerText =0
    sseconde.innerText ="05";

    bminute.innerText =0
    bseconde.innerText ="05";
    document.getElementById('cycle').innerText =0
    stopinterval()
    startTimer  = undefined

}) 
stop.addEventListener('click',function(){
    stopinterval()
    startTimer = undefined
})







//Start function
function timer(){
    //work timer
    if(sseconde.innerText !=0){
        sseconde.innerText--;
    } else if (sminute.innerText !=0 && sseconde.innerText ==0){
        sseconde.innerText = 59;
        sminute.innerText--;
    }
    // break timer
    if(sminute.innerText ==0 && sseconde.innerText ==0){
        if(bseconde.innerText !=0){
            bseconde.innerText--;
        }else if (bminute.innerText !=0 && bseconde.innerText ==0){
            bseconde.innerText = 59;
            bminute.innerText--;
        }
    }

    //increment counter
    if (sminute.innerText ==0 && sseconde.innerText ==0 && bminute.innerText ==0 && bseconde.innerText ==0){
        sminute.innerText =25
        sseconde.innerText ="00";

        bminute.innerText =5
        bseconde.innerText ="00";

        document.getElementById('cycle').innerText ++;
    }
    
}

//Stop function
function stopinterval(){
    clearInterval(startTimer)
}


















