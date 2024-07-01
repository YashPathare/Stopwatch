let seconds=0;
let minutes=0;
let hours=0;
let timeInterval=null;
let timer=document.querySelector('.timer')
function stopwatch()
{
    seconds++;
    if(seconds/60 === 1)
    {
        minutes++;
        seconds=0;
        if(minutes/60===1)
        {
            hours++;
            minutes=0;
        }
    }
    let leadingseconds=0;
    let leadinghours=0;
    let leadingminutes=0;
    if (seconds<10)
    {
        leadingseconds='0'+seconds.toString();
    }
    else
    {
        leadingseconds=seconds;
    }
    if (minutes<10)
    {
        leadingminutes='0'+minutes.toString();
    }
    else
    {
        leadingminutes=minutes;
    }
    if (hours<10)
    {
        leadinghours='0'+hours.toString();
    }
    else
    {
        leadinghours=hours;
    }
    timer.innerHTML=leadinghours+':'+leadingminutes+':'+leadingseconds
}
let state='notactive';
let startStopBtn=document.querySelector('.startStopBtn');
let resetBtn=document.querySelector('.resetBtn');
startStopBtn.addEventListener('click',function()
{
    if(state==='notactive')
    {
        timeInterval=window.setInterval(stopwatch,1000);
        state='active';
        startStopBtn.innerHTML=`<i class='fa-solid fa-pause'></i>`
        startStopBtn.classList.toggle('play');
        startStopBtn.classList.toggle('pause');
    }
    else
    {
        state='notactive';
        window.clearInterval(timeInterval);
        startStopBtn.innerHTML=`<i class='fa-solid fa-play'></i>`
        startStopBtn.classList.toggle('play');
        startStopBtn.classList.toggle('pause');
    }
});
resetBtn.addEventListener('click',function()
{
    if(state==='active')
    {
        state='notactive';
        window.clearInterval(timeInterval);
        startStopBtn.innerHTML=`<i class='fa-solid fa-play'></i>`
        startStopBtn.classList.toggle('play');
        startStopBtn.classList.toggle('pause');
    }
    window.clearInterval(timeInterval);
    seconds=0;
    minutes=0;
    hours=0;
    document.querySelector('.timer').innerHTML='00:00:00';
});
