import React from 'react';
import Introduction from './components/Introduction/Introduction';
import podcasts from './components/AudioPlayer/AudioPlayerContent.json';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';

function App() {
	return (
		<div className="App">
			<Introduction />
			<AudioPlayer podcasts={podcasts} />
		</div>
	)
}

export default App;