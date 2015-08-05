// drum.js

<script src='https://jyunming-chen.github.io/WebAudio/js/shared.js'></script>
var sample;
var barsInScore = 2;
var quarterNoteTime = 60/tempo; // seconds
var metronomeOn = false;

// recording related
var scoreStartTime;
var recordOn = false;
var loopOn = metronomeOn;
var score=[];
var eventMarks = new THREE.Object3D();
var powerOnSign, recordOnSign;
