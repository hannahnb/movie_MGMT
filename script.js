const allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
function Movie (title, rating, havewatched) {
    return {title:title, rating:rating, havewatched:havewatched};
}

//add a movie OBJECT to the allMovies array
function addMovie (movie) {
    console.log("A new movie has been added.");
    allMovies.length++;
    allMovies[allMovies.length - 1] = movie;
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
function printMovies() {
    let output = "Printing all movies...\n";
    
    for (let i = 0; i < allMovies.length; i++) {
        let m = allMovies[i];
        output += ("" + m.title + ", rating of " + m.rating + ", havewatched: "
        + m.havewatched + "\n");


    output += ("\n You have " + allMovies.length + " movies in total\n");
    console.log(output);

    }

}


//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
function highRatings(rating) {
    let output = "printing movie that has a rating higher than " + rating + "\n";
    let matches = 0;

    for(let i = 0; i < allMovies.length; i++) {
        let m = allMovies[i];

        if (m.rating >= rating) {
            output += ("" + m.title + ", rating of " + m.rating + ", havewatched: " + 
            m.havewatched + "\n");

            matches++;
        }
    }

    output += ("\n In total, there are " + matches + " matches \n");

    console.log(output);

}


//Toggle the 'haveWatched' property of the specified movie 
function changeWatched(title) {

    console.log("changing the status of the movie..");
    
    for (let i = 0; i < allMovies.length; i++) {
        let m = allMovies[i];
        
        if (m.title == title) {
            m.havewatched = !m.havewatched;
        }
    }

}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);
