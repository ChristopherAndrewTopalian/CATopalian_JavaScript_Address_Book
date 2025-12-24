// downloadText.js

function downloadText()
{
    let theContent = ge("textOutput").value;

    let dataString = "data:text/javascript;charset=utf-8," + encodeURIComponent(theContent);

    let downloadAnchor = ge("theDownloadAnchor");

    downloadAnchor.setAttribute("href", dataString);

    downloadAnchor.setAttribute("download", "info.js");

    downloadAnchor.click();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

