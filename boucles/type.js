let jours=["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"]
for(let j=0 ; j<=(jours.length -1); j++){
  // console.log(jours[j])
}

//for in

for (let jr in jours){
    //console.log(jours[jr])
}

//for of
for (let jour of jours){
    //console.log(jour)
}

//while pool
let n;
n = 5
while(n>=0){
    console.log(n)
    n -= 1
}
let m = -1;
do {
    console.log(m)
    m -= 1
}
while(m>=0)


//for each
//let txtjours = "";
//function myfunction(value,index,array){
  // txtjours+=value;
   //console.log(txtjours)
//}
//jours.forEach(myfunction)

//for each
//let txtjours = "";
//jours.forEach(myfunction)
//function myfunction(value,index,array){
   //txtjours += " "+value;}
//console.log(txtjours)

// break loop
 //for(let j = 0;j<=(jours.length -1);j++){
     
    //if(j===3){
        //console.log("stop");
        //break; 
    //}
    //console.log(jours[j])
 
//}
  //contitue loop
 for(let j = 0;j<=(jours.length -1);j++){
     
    if(j===3){
        console.log("stop");
        continue;
    }
    console.log(jours[j])
 }
  

