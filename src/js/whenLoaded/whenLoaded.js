// whenLoaded.js

function whenLoaded()
{
    makeInterface();

    // The ID string becomes the exact address in the world map!
    world['felix'] = makeCat('felix', 'Felix', 'rgb(0, 255, 255)', 100, 100, stepPingPong);

    world['tom'] = makeCat('tom', 'Tom', 'rgb(0, 0, 255)', 200, 100, stepCircle);

    // Spawning an army of 100 cats directly into the object map
    for (let i = 0; i < 100; i++)
    {
        let catId = 'stray_' + i;

        // Spawn them across a massive 1600x800 area
        let randomX = Math.floor(Math.random() * 1600); 
        let randomY = Math.floor(Math.random() * 800);

        /*
        let randomX = Math.floor(Math.random() * 400); // Safe zone to prevent vibrating
        let randomY = Math.floor(Math.random() * 600);
        */

        world[catId] = makeCat(catId, 'Stray', 'rgb(150, 150, 150)', randomX, randomY, stepPingPong);
    }

    initObjects(world);
    gameLoop();

    //----//

    // Keyboard Controls
    document.addEventListener('keydown', function(event)
    {
        // SAVE WORLD
        if (event.key === 's')
        {
            let savedLevel = JSON.stringify(world, null, 2);

            console.log('World Saved!');
            console.log(savedLevel);
        }
    });
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

