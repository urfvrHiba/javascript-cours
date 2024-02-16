let day;

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "Unknown Day";
}

console.log("Today is "+day);

let abreviation ="DD"
switch (abreviation) {
    case "DD":
     branche = "developemment digital";
     break;
    case  "ID":
        branche ="informatique digital";
     break;
    case "MEC":
        branche = "mecanique";
     break;
    default:
        branche ="unknown moyenne";

}
console.log("ton branche est "+branche)