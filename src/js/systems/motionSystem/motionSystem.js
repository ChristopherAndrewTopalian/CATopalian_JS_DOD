// motionSystem.js

let isMoving = false;
let isMovingRight = false;
let isMovingLeft = false;

function motionSystem()
{
    // Grab every ID currently in the world (['felix', 'tom', 'stray_0', ...])
    let entityIds = Object.keys(world);

    for (let i = 0; i < entityIds.length; i++)
    {
        // Use the ID to grab the exact entity from the world map
        let currentId = entityIds[i];
        let ent = world[currentId]; 

        // Run its pure math function
        ent.update(ent); 
    }

    // Call render once after all math is done
    renderObjects(); 
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

