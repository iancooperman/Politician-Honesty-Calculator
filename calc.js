function post_score(rating) {
    var honesty_chart = document.getElementsByClassName('peepDetailRuling')[0];
    var score_display = document.createElement('p');

    score_display.innerHTML = "This politician gets a rating of <b>" + rating.toString() + "</b>/100.";

    honesty_chart.insertAdjacentElement("afterend", score_display);
}

function get_ratings() {
    var ratingRegEx = /^(\d+).*/;

    var ratingsElems = document.getElementsByClassName("chartlist__count");

    var ratings = [];

    for (var i = 0; i < ratingsElems.length; i++) {
        var txt = ratingsElems[i].innerText;
        var rating = parseInt(txt.split(" ")[0], 10);
        
        ratings.push(rating);
    }

    console.log(ratings);

    return ratings;

}

function calculate_score(ratings) {
    var fullTrue = ratings[0];
    var mostlyTrue = ratings[1];
    var halfTrue = ratings[2];
    var mostlyFalse = ratings[3];
    var fullFalse = ratings[4];
    var pantsOnFire = ratings[5];

    var summation = 0.00 * fullFalse + 0.00 * pantsOnFire + 0.25 * mostlyFalse + 0.50 * halfTrue + 0.75 * mostlyTrue + 1.00 * fullTrue;
    var total = fullTrue + mostlyTrue + halfTrue + mostlyFalse + fullFalse + pantsOnFire;

    console.log("summation: ", summation);
    console.log("total", total);

    var average_percent = summation / total * 100;

    console.log(average_percent);



    return Math.round(average_percent);

}

// alert("Extension loaded.");
var ratings = get_ratings();

var score = calculate_score(ratings);

post_score(score);