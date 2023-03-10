const btn = document.getElementById("click");
const header=document.getElementById("headline");
const but = document.getElementsByTagName("button");


btn.onclick=()=>{
    if (header.innerHTML == ' “ The most affordable learning platform ” ') {
        header.innerHTML = ' “ PW Skills ” ';
    } else {
        header.innerHTML = ' “ The most affordable learning platform ” ';
    }

    if(btn.style.backgroundColor=='black'){
        btn.style.backgroundColor='red';
        btn.style.border='2px solid black';
    }else{
        btn.style.border='2px solid red';
        btn.style.backgroundColor='black';
    }
}
