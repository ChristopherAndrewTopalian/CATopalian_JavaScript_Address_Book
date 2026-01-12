// sortByState.js

function sortByState(whichArray, whichDirection)
{
    // ascending
    if (whichDirection == "up")
    {
        whichArray.sort(function(a, b)
        {
            return a.state.localeCompare(b.state);
        });
    }

    // descending
    else if (whichDirection == "down")
    {
        whichArray.sort(function(b, a)
        {
            return a.state.localeCompare(b.state);
        });
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

