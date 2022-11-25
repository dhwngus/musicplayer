let musicFile;
let button;
function setup()
{
    createCanvas(640,400);
    soundFormats('mp3','ogg');
    musicFile = loadSound('who',loadMusic);
    // musicFile.play();
    button = createButton("play");
    button.mousePressed(togglePlaying);

}
function togglePlaying(){
    if(!musicFile.isPlaying()){
        musicFile.play();
        button.html('pause');
    }else{
        musicFile.stop();
        button.html('play');
    }
}
function loadMusic()
{
    console/log("it's working");
    // musicFile.play(); //문빈산하
    
}
function draw(){
    fill(2555,0,0);
ellipse(50,50,100,100);
}
