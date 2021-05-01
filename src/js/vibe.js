const vibes = [
    "... and you are awesome!",
    "... have a wonderful day",
    "... and you've got this!",
    "... and so is this puppy!"
];

// choose a random good vibe
var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

// Display the good vibe
document.querySelector(".vibe").append(vibe);
