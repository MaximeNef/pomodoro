let start = document.getElementById('start')
let pause = document.getElementById('pause')
let reset  = document.getElementById('reset')

let sminute = document.getElementById('s_minute')
let sseconde = document.getElementById('s_seconde')

let bminute = document.getElementById('b_minute')
let bseconde = document.getElementById('b_seconde')

let startTimer;
console.log(startTimer)




let videoPlayer = document.getElementById('videoPlayer')
 videoPlayer.playbackRate = 10; 

start.addEventListener('click',function(){
    
    
    if(startTimer === undefined){
        videoPlayer.play()
        
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
pause.addEventListener('click',function(){
   if(startTimer === undefined){
    
     setInterval(timer,1000) 
    
    videoPlayer.play()
    startTimer = true
    console.log ('coucou')
   }else if(startTimer !== undefined) {
    startTimer =clearInterval()
    
    
    videoPlayer.pause() 
     startTimer  =  undefined
    console.log('caca')
   }
  

   /*  stopinterval()
    startTimer = undefined
    videoPlayer.pause() */
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
            videoPlayer.pause()

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
        
        videoPlayer.pause()
        videoPlayer.currentTime = '0'
        videoPlayer.play()


        document.getElementById('cycle').innerText ++;
    }
    
}

//Stop function
function stopinterval(){
    clearInterval(startTimer)
}



















