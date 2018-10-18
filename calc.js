function post_score() {
    var honesty_chart = document.getElementsByClassName('peepDetailRuling')[0];
    console.log(honesty_chart);
    var score_display = document.createElement('p');

    score_display.innerHTML = "Test Score Please Confirm";

    honesty_chart.parentNode.insertBefore(score_display);
}

function get_ratings() {
    var ratingsElems = document.getElementsByClassName("chartlist__count");
    console.log(ratingsElems);

    var ratings = [];

    
    for (var i = 0; i < ratingsElems.length; i++) {
        var split_elem = ratings[i].outerText.split(" ");
        console.log(split_elem);

        ratings.push(split_elem[0]);
    }

    console.log(ratings);
}

alert("Extension loaded.")
get_ratings();