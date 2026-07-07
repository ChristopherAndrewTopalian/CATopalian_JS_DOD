// makeCat.js

// A reusable factory function that returns a pure data object
function makeCat(catId, catName, catColor, startX, startY, logicRoutine)
{
    return {
        id: catId,
        name: catName,
        color: catColor,
        x: startX,
        y: startY,
        vx: 5, // Default speed for all cats
        vy: 5,
        angle: 0,
        update: logicRoutine
    };
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

