var solution = Math.floor(Math.random() * 1000001);

var MaxTips = 20;
var CountTips = 0;
var guessed = false;

while (CountTips < MaxTips && !guessed) {
    var input = prompt("Add meg a tipped (0 és 1 000 000 között):");
    var TipInput = parseInt(input);

    if (isNaN(TipInput)) {
        alert("Hibás bemenet! Kérlek számot adj meg.");
        continue;
    }

    CountTips++;

    if (TipInput > solution) {
        alert(CountTips + ". tipp nem talált: A megoldás kisebb.");
    } else if (TipInput < solution) {
        alert(CountTips + ". tipp nem talált: A megoldás nagyobb.");
    } else {
        alert("Gratulálok, " + CountTips + " lépésből eltaláltad!");
        guessed = true;
    }
}

if (!guessed) {
    alert("Sajnos ez most nem sikerült! A megoldás: " + solution);
}

