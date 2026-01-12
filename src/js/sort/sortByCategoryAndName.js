// sortByCategoryAndName.js

function sortByCategoryAndName(whichArray, whichDirection)
{
    whichArray.sort(function(a, b)
    {
        // ascending
        if (whichDirection === "up")
        {
            // check Category FIRST, then Name
            return a.category.localeCompare(b.category) || a.name.localeCompare(b.name);
        }
        // descending
        else if (whichDirection === "down")
        {
            // check Category FIRST, then Name
            return b.category.localeCompare(a.category) || b.name.localeCompare(a.name);
        }
    });
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

