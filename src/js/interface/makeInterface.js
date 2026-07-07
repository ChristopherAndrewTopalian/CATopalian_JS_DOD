// makeInterface.js

function makeInterface()
{
    let gameBoard = ce('div');
    gameBoard.id = 'gameBoard';
    gameBoard.style.position = 'relative';
    ba(gameBoard);

    //-//

    // Create the text brick
    let titleAndLink = ce('a');
    titleAndLink.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JS_DOD';
    titleAndLink.target = '_blank';
    titleAndLink.style.fontFamily = 'Arial';
    titleAndLink.style.fontWeight = 'bold';
    titleAndLink.textContent = 'CATopalian JS DOD';
    titleAndLink.style.fontSize = '14px';
    titleAndLink.style.textDecoration = 'none';
    titleAndLink.style.paddingLeft = '4px';
    titleAndLink.style.color = 'rgb(0, 255, 255)';
    gameBoard.append(titleAndLink);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

