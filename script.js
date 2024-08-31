const h1 = document.querySelector("h1");
//  setTimeout(()=>{
//     h1.addEventListener("click",(e)=>{
//         console.log((e.style.color = red),5000);
//     })
//  })

const timingFn = setTimeout(() => {
  h1.style.color = "red";
}, 8000);

h1.addEventListener("click", timingFn);
