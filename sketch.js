let musicFile;
function setup()
{
    soundFormats('mp3','ogg');
    musicFile = loadSound('who',loadMusic);
    // musicFile.play();
}

function loadMusic()
{
    musicFile.play();
}