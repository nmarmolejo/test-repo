let counter=3;function reloadPage(){window.location.reload()}window.onload=function(){document.getElementById("counter").innerHTML=counter.toString()+" segundos"},setInterval(function(){if(0===counter)return;let e;e=1===(counter-=1)?counter.toString()+" segundo":counter.toString()+" segundos",document.getElementById("counter").innerHTML=e,0===counter&&(document.getElementById("reload-button").style.display="inline-block",document.getElementById("counter").style.display="none")},1e3);