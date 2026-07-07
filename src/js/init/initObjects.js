// initObjects.js

function initObjects()
{
    // Grab every ID currently in the world map
    let entityIds = Object.keys(world);

    for (let i = 0; i < entityIds.length; i++)
    {
        // Use the ID to grab the exact entity data
        let currentId = entityIds[i];

        let ent = world[currentId];

        //-//

        let element = ce('div');
        element.id = ent.id;
        element.style.position = 'absolute'; 
        element.style.width = '50px';
        element.style.height = '50px';
        element.style.left = ent.x + 'px';
        element.style.top = ent.y + 'px';
        element.style.border = 'solid 1px white';
        element.textContent = ent.id;
        element.style.fontSize = '11px';
        element.style.fontWeight = 'bold';
        element.style.textAlign = 'center';
        element.style.backgroundColor = ent.color;
        ge('gameBoard').append(element);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

