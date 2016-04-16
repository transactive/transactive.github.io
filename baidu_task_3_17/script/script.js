    var btn=document.getElementById('btn');
    var mask=document.getElementById('mask');
    
    var confirm=document.getElementById('confirm');
    var cancel=document.getElementById('cancel');
    btn.onclick=function(){
        mask.style.display="block";
    };
    mask.onclick=function(){
        mask.style.display='none';
    };
    box.onclick=function(event){
        event.stopPropagation();
    };
    confirm.onclick=function(){
        mask.style.display='none';
    };
    cancel.onclick=function(){
        mask.style.display='none';
    };
    window.onload=drag; 
     function drag(){
        var boxTitle=document.getElementById('boxTitle');
        boxTitle.onmousedown=boxDown;
    } 
     function boxDown(event){

        event=event||window.event;
        var box=document.getElementById('box'); 
        var disX=event.clientX-box.offsetLeft;
        var disY=event.clientY-box.offsetTop;
        console.log(box.style.left);
      document.onmousemove=function(event){
        event=event||window.event;
        boxMove(event,disX,disY);
       }
       document.onmouseup=function()
       {
            document.onmouseup=null;
            document.onmousemove=null;
       }
    }
    function boxMove(e,posX,posY){

        var box=document.getElementById('box');
         box.style.left=e.clientX-posX+'px';
         box.style.top=e.clientY-posY+'px';
    }