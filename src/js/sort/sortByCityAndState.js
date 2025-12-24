// sortByCityAndState.js

function sortByCityAndState(whichArray, whichDirection)
{
    whichArray.sort(function(a, b)
    {
        // ascending
        if (whichDirection === "up")
        {
            return a.city.localeCompare(b.city) || a.state.localeCompare(b.state);
        }
        // descending
        else if (whichDirection === "down")
        {
            return b.city.localeCompare(a.city) || b.state.localeCompare(a.state);
        }
    });
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

