
function darkmode()
{
    var icon = document.getElementById("icon");
    var lo = document.getElementById("logo");
    
    
    
    icon.onclick=function dark(){
    
       var vt = document.body;
    
       vt.classList.toggle("darks");
           if(document.body.classList.contains("darks")){
           icon.src="./img/sun.png";
           lo.src="./img/logo1.png"
           
        
         
           }
           else{
                   icon.src="./img/moon.png"
                   lo.src="./img/logo2.png"
       
          
           }
    }

}


