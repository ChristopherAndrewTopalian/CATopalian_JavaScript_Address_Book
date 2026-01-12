// makeInterface.js

function makeInterface()
{
    let mainDiv = ce('div');
    mainDiv.style.marginTop = '22px';
    ba(mainDiv);

    //-//

    let buttonContainer = ce('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.flexDirection = 'row';
    buttonContainer.style.overflowX = 'scroll';
    mainDiv.append(buttonContainer);

    //-//

    let sortByNameBtn = ce('button');
    sortByNameBtn.textContent = 'Name';
    sortByNameBtn.onclick = function()
    {
        sortByName(info, 'up');
        showData(info, 'page');
    };
    buttonContainer.append(sortByNameBtn);

    //-//

    let sortByNameAndCategoryBtn = ce('button');
    sortByNameAndCategoryBtn.textContent = 'Name & Category';
    sortByNameAndCategoryBtn.onclick = function()
    {
        sortByNameAndCategory(info, 'up'); 
        showData(info, 'page');
    };
    buttonContainer.append(sortByNameAndCategoryBtn);

    //-//

    let sortByCategoryAndNameBtn = ce('button');
    sortByCategoryAndNameBtn.textContent = 'Category & Name';
    sortByCategoryAndNameBtn.onclick = function()
    {
        sortByCategoryAndName(info, 'up'); 
        showData(info, 'page');
    };
    buttonContainer.append(sortByCategoryAndNameBtn);

    //-//

    let sortByRatingBtn = ce('button');
    sortByRatingBtn.textContent = 'Rating';
    sortByRatingBtn.onclick = function()
    {
        sortByRating(info, 'up'); 
        showData(info, 'page');
    };
    buttonContainer.append(sortByRatingBtn);

    //-//

    let sortByCityBtn = ce('button');
    sortByCityBtn.textContent = 'City';
    sortByCityBtn.onclick = function()
    {
        sortByCity(info, 'up'); 
        showData(info, 'page');
    };
    buttonContainer.append(sortByCityBtn);

    //-//

    let sortByStateBtn = ce('button');
    sortByStateBtn.textContent = 'State';
    sortByStateBtn.onclick = function()
    {
        sortByState(info, 'up'); 
        showData(info, 'page');
    };
    buttonContainer.append(sortByStateBtn);

    //-//

    let sortByCityAndStateBtn = ce('button');
    sortByCityAndStateBtn.textContent = 'City & State';
    sortByCityAndStateBtn.onclick = function()
    {
        sortByCityAndState(info, 'up'); 
        showData(info, 'page');
    };
    buttonContainer.append(sortByCityAndStateBtn);

    //-//

    let reverseArrayBtn = ce('button');
    reverseArrayBtn.textContent = 'Reverse';
    reverseArrayBtn.onclick = function()
    {
        info.reverse();
        showData(info, 'page');
    };
    buttonContainer.append(reverseArrayBtn);

    //-//

    let stringifyBtn = ce('button');
    stringifyBtn.textContent = 'JSON Stringify';
    stringifyBtn.onclick = function()
    {
        ge('textOutput').value = JSON.stringify(info);
    };
    buttonContainer.append(stringifyBtn);

    //-//

    let downloadBtn = ce('button');
    downloadBtn.textContent = 'Download';
    downloadBtn.style.backgroundColor = 'rgb(0, 80, 80)';
    downloadBtn.onclick = function()
    {
        downloadText();
    };
    buttonContainer.append(downloadBtn);

    //-//

    let dataDiv = ce('div');
    dataDiv.id = 'theData';
    mainDiv.append(dataDiv);

    //-//

    let textOutput = ce('textarea');
    textOutput.id = 'textOutput';
    textOutput.style.width = '98%';
    textOutput.style.height = '85%';
    textOutput.style.marginTop = '10px';
    textOutput.style.padding = '20px';
    textOutput.style.backgroundColor = 'rgb(40, 40, 40)';
    textOutput.style.fontSize = '20px';
    textOutput.style.color = 'rgb(255, 255, 255)';
    dataDiv.append(textOutput);

    //-//

    let downloadAnchor = ce('a');
    downloadAnchor.id = 'theDownloadAnchor';
    downloadAnchor.style.display = 'none';
    mainDiv.append(downloadAnchor);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

