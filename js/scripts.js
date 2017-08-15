// Funkcja odpowiadająca za zmianę paragrafu
function changeParagraph() {
    document.getElementById("start-demo-2").innerHTML = "Ten paragraf uległ zmianie po wywołaniu skryptu";
}

// Tworzymy pierwszą zmiennę

var myFirstVar = 1;
{
    document.getElementById("start-demo-3").innerHTML = myFirstVar;

}


// Funkcja wyświetlająca tablicę od drugiej elementu

var table = ["User", "User2", "User3"];

{
for (var i=1; i<table.length; i++)

    document.getElementById("start-demo-4").innerHTML += table[i]; }

// Funkcja wyświetlająca zawartość tablicy zaczynając od czwartego elementu

var table2 = [1,2,3,4,5,6,7,8,9,10];
{
    for (var i = 4; i < 10; i++)
    document.getElementById("start-demo-5").innerHTML += table2[i]; }


// Funkcja obliczająca ilość znaków w tekscie

var text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("start-demo-6").innerHTML = text.length + " << wyświetla ilość liter ";


// Tworzymy obiekt z różnymi zmiennymi następnie wyświetlamy zawartość w index.html

var person = {
    firstName : "Jan",
    lastName : "Kowalski",
    born : "Lublin",
    age :  "35",
}

document.getElementById("start-demo-7").innerHTML = person.firstName + " " + person.lastName + " from " + person.born + " have " + person.age + " years old ";

(function() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    document.getElementById("start-demo-8").innerHTML = "Dzisiaj jest " + year + " rok ";

})();
