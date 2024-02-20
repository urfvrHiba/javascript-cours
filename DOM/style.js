//CREATION ET SUPPRESSION D'UN ELEMENT DOM
const parent = document.querySelector(".saission1")
const enfant = document.createElement("h1")
enfant.innerHTML ="learn this"
enfant.style.backgroundColor = "violet"
//parent.append(enfant)


const nom = document.createElement("input")
nom.innerHTML ="nom"
nom.style.Color = "gray"
//parent.append(nom)

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

document.querySelector(".suprimer").addEventListener("click",()=>{
    const parent = document.querySelector(".saission1");
    const enfant = document.createElement("h1");
    enfant.innerHTML ="learn this";
    enfant.style.backgroundColor = "violet"; 
    parent.remove(enfant);

    const paragraph= document.createElement("h2");
    paragraph.innerHTML ="paragraph";
    paragraph.style.Color = "blue";
    parent.remove(paragraph);
    


})
document.querySelector(".remplacer").addEventListener("click",()=>{
   let ancefant = document.querySelector(".titre1")
   let nouveauenfant = document.querySelector(".titre2")
   parent.replacechild(nouveauenfant,ancefant)


})
document.querySelector(".cree-dev").addEventListener("click",()=>{
    let newdiv = document.createElement("div")
    newdiv.classList.add("Section-2")
    newdiv.classList.add("ancadrer")
    document.body.append("")
}
)




