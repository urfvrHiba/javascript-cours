// type primitifs
console.log (typeof(5))
console.log (typeof("to be or not"))
console.log (typeof(undefined))
console.log (typeof(true))

//passage par valeur
let a;
let b;
a=5;
b=a;
b=6;
console.log(a)
console.log(b)

//le type d'objets de base
//passage par réfèrence ou par adress
liste=[1,2,3]
cliste = liste
cliste.push(5)

console.log(liste)
console.log(cliste)
 
stagiaire={
    id:1,
    prenom:"hiba"
}
cstg = stagiaire
cstg.age=18
console.log(stagiaire)
console.log(cstg)

//copie
liste2 = [].concat(liste)

// spread operator (operateur de propagation)
liste3=[...liste]

stagiaire3 = {...stagiaire}
stagiaire3.bance="DD"

Object.assign(stagiaire3,stagiaire)

stagiaire.annee="2024"

liste2.push(9)
console.log(liste)
console.log(liste2)
console.log(stagiaire)
console.log(stagiaire3)
console.log(liste3)


console.log(typeof(liste))
