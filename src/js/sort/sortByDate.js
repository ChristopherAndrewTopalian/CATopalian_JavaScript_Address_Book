// sortByDate.js

function sortByDate(whichArray, whichDirection)
{
    // ascending
    if (whichDirection == "up")
    {
        whichArray.sort(function(a, b)
        {
            return new Date(a.date) - new Date(b.date);
        });
    }

    // descending
    else if (whichDirection == "down")
    {
        whichArray.sort(function(b, a)
        {
            return new Date(a.date) - new Date(b.date);
        });
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

