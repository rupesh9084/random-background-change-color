let para=document.querySelector("#para")
let button=document.querySelector("#btn")


let chng_color=()=>{
    let random_color= Math.floor(Math.random()*16777115)
 
    let random_num= "#"+ random_color.toString(16);
  
    document.body.style.backgroundColor=random_num
    para.style.color=random_num
    button.style.backgroundColor=random_num;
    para.innerHTML=random_num
}
button.addEventListener('click',chng_color)