// movementRoutines.js

// Pre-defined reusable routines (Zero memory allocation during execution)
function stepPingPong(ent)
{
    ent.x += ent.vx;

    // Only bounce LEFT if we are too far right AND still moving right
    if (ent.x > 500 && ent.vx > 0) 
    {
        ent.vx *= -1;
    }
    // Only bounce RIGHT if we are too far left AND still moving left
    if (ent.x < 0 && ent.vx < 0) 
    {
        ent.vx *= -1;
    }
}

function stepCircle(ent)
{
    ent.angle += 0.05;
    ent.x = 200 + Math.cos(ent.angle) * 50;
    ent.y = 200 + Math.sin(ent.angle) * 50;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

