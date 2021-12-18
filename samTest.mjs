import SamJs from 'sam-js';
 
let sam = new SamJs();
 
// Play "Hello world" over the speaker.
// This returns a Promise resolving after playback has finished.
// sam.speak('Hello world');

// Generate a wave file containing "Hello world" and download it.
sam.download('Hello world');