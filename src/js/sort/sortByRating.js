// sortByRating.js

function sortByRating(whichArray, whichDirection)
{
    // ascending
    if (whichDirection == "up")
    {
        whichArray.sort(function(a, b)
        {
            return parseFloat(a.rating) - parseFloat(b.rating);
        });
    }

    // descending
    else if (whichDirection == "down")
    {
        whichArray.sort(function(b, a)
        {
            return parseFloat(a.rating) - parseFloat(b.rating);
        });
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

