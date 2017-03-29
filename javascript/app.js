$(document).ready(function() {

    var topics = ["Black Panther", "Gambit", "Iron Man", "Wolverine", "Luke Cage"];
    $("#addOn").on("click", function(event) {
        event.preventDefault();
        var userInput = $("#userInput");
        topics.push(document.getElementById("userInput").value);


    });


    for (var i = 0; i < topics.length; i++) {

        var button = $("<button/>").attr("data-name", topics[i])
            .text(topics[i]).css({
                "margin-bottom": "20px",
                "background": "teal",
                "font-size": "16px",
                "color": "white",
                "box-shadow": "10px 10px 5px #888888"
            });

        var submit = $("#addOn").css({
            "margin-bottom": "20px",
            "background": "teal",
            "font-size": "16px",
            "color": "white",
            "box-shadow": "10px 10px 5px #888888"
        }).val().trim();

        $("input[type='submit']").click(function() {
            return false;
        });


        console.log(topics);

        $("#buttons").append(button);
    }

    $("button").on("click", function(event) {
        event.preventDefault();
        var hero = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
            hero + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .done(function(response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $("<div class='item'>");

                    var rating = results[i].rating;

                    var p = $("<p>").text("Rating: " + rating);

                    var heroImage = $("<img>");
                    // heroImage.attr("src", results[i].images.fixed_height_small.url);


                    heroImage.attr("src", results[i].images.fixed_height_small_still.url);

                    gifDiv.prepend(p).css("display", "inline-block");
                    gifDiv.prepend(heroImage);

                    $("#gifsAppear").prepend(gifDiv);


                }

            });


    });
});
