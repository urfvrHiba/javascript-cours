document.querySelector(".btn").addEventListener("click",()=>{
  let a = Number(document.querySelector(".a").value);
  let b = Number(document.querySelector(".b").value);
  let c = a+b
  document.querySelector(".c").value = c 
  if  (c > 20) {
      document.querySelector(".c").style.backgroundColor = "red"
  }else {
      document.querySelector(".c").style.backgroundColor = "green"
  }
})
document.querySelector(".btn2").addEventListener("click",()=>{
  let a = Number(document.querySelector(".a").value=0);
  let b = Number(document.querySelector(".b").value=0);
  let c = Number(document.querySelector(".c").value=0);
  document.querySelector(".c").style.backgroundColor = "white"
  console.log
})