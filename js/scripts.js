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