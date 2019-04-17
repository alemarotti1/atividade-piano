const piano = new Piano(document.getElementById("piano"), 
    { 
        whiteKeys: { width: 30, height: 100 }, 
        blackKeys: { width: 25, height: 50 }, 
        numKeys: 7 
    });
	
//create a synth and connect it to the master output (your speakers)




piano.draw();
let octave = 3;

const keys = {'C': false, 'C#': false,'D': false,'D#': false,'E': false,'F': false,'F#': false,'G': false,'G#': false,'A': false,'A#': false,'B': false};


let instrument = {q: 'C','2': 'C#',w: 'D','3': 'D#',e: 'E',r: 'F','5': 'F#',t: 'G','6': 'G#',y: 'A','7': 'A#',u: 'B',};

document.addEventListener( 'keydown', event => {
	var note = instrument[event.key];
	if(event.key == "a"&&octave>0)octave--;
	if(event.key == "s"&&octave<8)octave++;
	
	if(keys[note] == false){
		keys[note] = new Tone.Synth().toMaster();
		keys[note].triggerAttack(note.concat(octave));
	}
});
document.addEventListener( 'keyup', event => {
	var note = instrument[event.key];
	if(keys[note]){
		keys[note].triggerRelease();
		keys[note].disconnect();
		keys[note] = false;
	}
});