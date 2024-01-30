//les fonctions en javascript
function greet(nom){
    console.log("hellooooo!" + nom)
}
function somme(nombre1, nombre2){
    return nombre1 + nombre2
}
console.log (somme(13,80))

//déclaration des variables
const PI =3.14
function inscrire(){
    let nom;
    let prenom;
    let age;
    nom="haffa"
    prenom="soukaina"
    age=30
    if (age < 22){
        var statut
        statut="stagaire"
    }
    console.log(nom)  
    console.log(statut)

}
// Utilisation de var
function exempleVar() {
    if (true) {
      var x = 10;
      console.log(x); // Affiche 10
    }
    console.log(x); // Affiche 10, var a une portée de fonction
  }
  
  // Utilisation de let
  function exempleLet() {
    if (true) {
      let y = 20;
      console.log(y); // Affiche 20
    }
    //console.log(y); // Cela générerait une erreur, y a une portée de bloc
  }
  
  exempleVar();
  exempleLet();
  
  //chaine de caractéres en js
  let texte1 ="ofppt";
  texte1 +="";
  let texte2="en force";
  let texte3 = texte1 + texte2;
  //output:texte3 ="ofppt rn force"


