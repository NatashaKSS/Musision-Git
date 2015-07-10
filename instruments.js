var piano = new Wad({
    source : 'sine', 
    env : {
    	volume: 1.0,
        attack : .01, 
        decay : .005, 
        sustain : .2, 
        hold : (0.5 - 0.01 - 0.005 - 0.3), // Default duration of quarter-note or beat 0.5s
        release : .3
    }
});

// All about that bass
var bass = new Wad({
    source : 'sine',
    env : {
        attack : .02,
        decay : .1,
        sustain : .9,
        hold : .4,
        release : .1
    }
});

//Snare drum
var snare = new Wad ({
   source : 'noise', 
    env : {
        attack : .001, 
        decay : .01, 
        sustain : .2, 
        hold : .1, 
        release : .02
    }, 
    filter : {
        type : 'bandpass', 
        frequency : 300, 
        q : .180
    }
});

//Flute
var flute = new Wad({
    source : 'square', 
    env : {
        attack : .015, 
        decay : .002, 
        sustain : .5, 
        hold : .2, 
        release : .3
    }, 
    filter : {
        type : 'lowpass', 
        frequency : 600, 
        q : 7, 
        env : { 
            attack : .7, 
            frequency : 1600
        }
    }, 
    vibrato : {
        attack : 8, 
        speed : 8, 
        magnitude : 100 
    }
});

// Hihat Cymbals
var hihat = new Wad( Wad.presets.hiHatClosed );

//rest here. Quarter rest is just a name to say that it's one of the rests available
var quarterRest = new Wad({
    source : 'sine', 
    env : {
    	volume: 0.0,
        attack : .00, 
        decay : .000, 
        sustain : 0.0, 
        hold : (0.5 - 0.01 - 0.005 - 0.3), // Default duration of quarter-note or beat 0.5s
        release : 0.0
    }
});