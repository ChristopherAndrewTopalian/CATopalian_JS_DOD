// renderObjects.js

function renderObjects()
{
    // Grab every ID currently in the world map
    let entityIds = Object.keys(world);

    for (let i = 0; i < entityIds.length; i++)
    {
        let currentId = entityIds[i];
        let ent = world[currentId];

        // Find the existing HTML div on the screen
        let element = ge(ent.id);

        // ONLY update the properties that the Math system actually changed!
        element.style.left = ent.x + 'px';
        element.style.top = ent.y + 'px';
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

