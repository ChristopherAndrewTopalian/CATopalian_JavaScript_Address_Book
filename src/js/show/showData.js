// showData.js

function showData(whichArray, whichLocation)
{
    // we make a function to format the data
    function dataFormatter(key, value)
    {
        if (key === 'rating')
        {
            return Number(value);
        }
        return value;
    }

    let jsonContent = JSON.stringify(whichArray, dataFormatter, 4);

    let finalString = "info = \n" + jsonContent + ";";

    //-//

    // DISPLAY DATA

    if (whichLocation == "page")
    {
        // update of the existing element
        ge("textOutput").value = finalString;
    }
    else if (whichLocation == "window")
    {
        let reportWindow = window.open("", "Report Window", "left=10, top=10, width=1200, height=700");
        
        reportWindow.document.open();
        reportWindow.document.body.style.background = "rgb(40, 40, 40)";

        // clone the existing textarea so we inherit all the styles 
        // defined in makeInterface without rewriting code
        let clonedTextArea = ge("textOutput").cloneNode(true);
        // we set the value on the clone
        clonedTextArea.value = finalString;
        clonedTextArea.style.height = '95%'; 
        reportWindow.document.body.append(clonedTextArea);
        reportWindow.document.close();
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

