//CREATION ET SUPPRESSION D'UN ELEMENT DOM
const parent = document.querySelector(".saission1")
const enfant = document.createElement("h1")
enfant.innerHTML ="learn this"
enfant.style.backgroundColor = "violet"
//parent.append(enfant)


const nom = document.createElement("input")
nom.innerHTML ="nom"
nom.style.Color = "gray"
parent.append(nom)

const paragraph= document.createElement("h2")
paragraph.innerHTML ="paragraph"
paragraph.style.color = "blue"
//parent.append(paragraph)

document.querySelector(".clickna").addEventListener("click",()=>{
    const parent = document.querySelector(".saission1");
    const enfant = document.createElement("h1");
    enfant.innerHTML ="learn this";
    enfant.style.backgroundColor = "violet"; 
    parent.append(enfant);

    const paragraph= document.createElement("h2");
    paragraph.innerHTML ="paragraph";
    paragraph.style.Color = "blue";
    parent.append(paragraph);
    

})
    parent.prepend(enfant);
    document.querySelector("clickna").remove()





