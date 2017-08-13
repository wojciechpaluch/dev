function changeParagraph() {
    document.getElementById("start-demo-2").innerHTML = "Ten paragraf uległ zmianie po wywołaniu skryptu";
}

var myFirstVar = 1;
{
    document.getElementById("start-demo-3").innerHTML = myFirstVar;

}

var table = ["User", "User2", "User3"];

{
for (var i=1; i<table.length; i++)

    document.getElementById("start-demo-4").innerHTML = table; }

var table2 = [1,2,3,4,5,6,7,8,9,10];
{
    for (var i = 1; i < 10; i++)
    document.getElementById("start-demo-5").innerHTML = table2; }


var text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("start-demo-6").innerHTML = text.length;

