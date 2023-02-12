// window.onscroll=() =>{

//     let color=document.getElementById("img-scroll")
//     if (color.scrollTop > 100) {
//        console.log("ali")
//       } else{
//         console.log("mohmmad")
//       }

// }
function scrollbar() {
  const imageChange = document.getElementById("change-logo")

  x=document.documentElement.scrollTop
  // console.log(x)
  if (x<150){
     console.log('else')
  
    
     imageChange.classList.add('trans')
     imageChange.src = "./image/bddlogo.png"
  }

  if (x > 150 && x<300) {
    console.log('x > 155 && x<300')
    header.classList.add('black')
    imageChange.classList.remove('trans')
    imageChange.classList.add('large')
    imageChange.src = "./image/logo-small.png"
  } 
   if ( x>300 ) {
    header.classList.add('red')
    console.log('x > 300')
   imageChange.classList.add('trans')
  }
   
  
}
window.addEventListener("scroll", scrollbar)
