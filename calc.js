function post_score(rating) {
    var honesty_chart = document.getElementsByClassName('peepDetailRuling')[0];
    console.log(honesty_chart);
    var score_display = document.createElement('p');

    score_display.innerHTML = "This politician gets a rating of " + rating;

    honesty_chart.insertAdjacentElement("afterend", score_display);
}

function get_ratings() {
    var ratingRegEx = /^(\d+).*/;

    var ratingsElems = document.getElementsByClassName("chartlist__count");

    var ratings = [];

    for (var i = 0; i < ratingsElems.length; i++) {
        var txt = ratingsElems[i].innerText;
        var rating = txt.split(" ")[0];
        
        ratings.push(rating);
    }

    console.log(ratings);

    return ratings;

}

// alert("Extension loaded.");
get_ratings();
// post_score("0");