// tu codigo va aca
   
	
	function callbackPromedio(a,b,c,callback){ 

	var promedio= (a+b+c)/3;
	return callback(promedio);
}

 var t;
function segundero(){
    t=1;
    setInterval(function(){
        document.getElementById("titulo").innerHTML=t++;
    },1000,"JavaScript");
}
segundero();
	
	

	
