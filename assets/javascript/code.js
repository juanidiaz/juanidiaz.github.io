// VARIABLES --------------------------------------------

//      OBJECTS
function projectX(title, text, projectname, status) {
    this.title = title;
    this.text = text;
    this.projectname = projectname;
    this.status = status;
}

var project1 = new projectX('1: Building a Wireframe / That Portfolio Though', 'A very simple yet challenging site built from the ground up. It was done not using any fancy frameworks or aid.', 'Basic-Portfolio', 'done');
var project2 = new projectX('2: Responsiveness Assignment', 'This assigmnent has two parts, one using Bootstrapframework, and the other using responsive code. There is a link for each one of these projects.', 'Bootstrap-Portfolio', 'done');
var project3 = new projectX('3: JavaScript Assignment', 'This assigmnent consist on creating a word guess game (Hangman) based on a theme. The game will take the keys enter by the user and will keep track of correct guesses, letters picked, wins, loses, etc.', 'Word-Guess-Game', 'done');
var project4 = new projectX('4: jQuery Assignment', 'This project is an RPG game with a Star Wars theme. The game requires the user to strategize the choices of player and defenders. The project uses objects and jQuery as basic tool.', 'unit-4-game', 'done');
var project5 = new projectX('5: JavaScript Assignment 2', 'Trivia game using JavaScript for the logic and jQuery to manipulate HTML.', 'TriviaGame', 'done');
var project6 = new projectX('6: GifTastic', 'A dynamic web page that populates gifs of your choice using the GIPHY API. This project uses API calls to GIPHY and modifies the DOM using JavaScript and jQuery', 'giphy', 'inProgress');
var project7 = new projectX('7: Rock Paper Scissors', '', '', 'noInfo');
var project8 = new projectX('8: LIRI Bot', '', '', 'noInfo');
var project9 = new projectX('9: Advanced JavaScript Assignment: Constructor Word Guess', '', '', 'noInfo');
var project10 = new projectX('10: Node.js & MySQL', '', '', 'noInfo');
var project11 = new projectX('11: Friend Finder - Node and Express Servers', '', '', 'noInfo');
var project12 = new projectX('12: Node Express Handlebars', '', '', 'noInfo');
var project13 = new projectX('13: Burger 2: The Sequel', '', '', 'noInfo');
var project14 = new projectX('14: All the News That\'s Fit to Scrape', '', '', 'noInfo');
var project15 = new projectX('15: Clicky Game', '', '', 'noInfo');
var project16 = new projectX('16: NYT React Search', '', '', 'noInfo');
var project17 = new projectX('17: Regionalized HW', '', '', 'noInfo');

//      ARRAYS


//      STRINGS/CHAR
var projectBaseURL = 'https://juanidiaz.github.io/';
var githubBaseURL = 'https://github.com/juanidiaz/';


//      NUMBER/INTEGER
var projects = 17;

//      BOOLEAN


// ------------------------------------------------------------

$(document).ready(function () {


    function buildCards() {

        function newProject(item) {
            var colDiv = $('<div>').addClass('col-sm-6');
            var cardDiv = $('<div>').addClass('card').appendTo(colDiv);
            var cardBody = $('<div>').addClass('card-body').appendTo(cardDiv);
            var cardH5 = $('<h5>').addClass('card-title').text(item.title).appendTo(cardBody);
            var cardP = $('<p>').addClass('card-text').text(item.text).appendTo(cardBody);
            var cardURLbutton = $('<a>').attr('href', projectBaseURL + item.projectname).attr('target', '_blank').addClass('btn btn-primary mr-2').text("Open Project").appendTo(cardBody);
            var cardGitHubbutton = $('<a>').attr('href', githubBaseURL + item.projectname).attr('target', '_blank').addClass('btn btn-outline-info').text("Open Github site").appendTo(cardBody);
            var cardNoteDiv = $('<div>').css('text-align', 'right').appendTo(cardBody);
            var cardNoteP = $('<p>').appendTo(cardNoteDiv);
            var cardNote = $('<small>').text('* Project open in a new tab.').appendTo(cardNoteP);

            return colDiv;
        }

        var rowDiv = $('<div>').addClass('row').appendTo('.cards');

        for (var i = 1; i < projects + 1; i++) {
            console.log(eval("project" + i).title);
            $(rowDiv).append(newProject(eval("project" + i)));
        }
    }


    buildCards();


});



//   // Return an new card 
//   function newGif(item) {

//     var cardDiv = $("<div>").addClass("card m-2");
//     var cardImg = $("<img>").attr("src", response.data[item].images.fixed_height_still.url).addClass("staticgif card-img-top").attr('id', item).appendTo(cardDiv);
//     var cardBody = $("<div>").addClass("card-body").appendTo(cardDiv);
//     var cardText = $("<p>").addClass("card-text").text("Rating: " + response.data[item].rating.toUpperCase()).appendTo(cardBody)

//     // Return the element
//     return cardDiv;
//   }