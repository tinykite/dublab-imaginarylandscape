import React from 'react';
import AudioPlayerItem from './AudioPlayerItem';

const AudioPlayer = ({podcasts, ...props}) => (
		<>
		{podcasts && podcasts.map(({title, theme, year, city, location, audioUrl}, index) =>
		<AudioPlayerItem key={'AudioPlayerItem-' + index} title={title} theme={theme} year={year} city={city} location={location} audioUrl={audioUrl} />
		)}
		</>
)

export default AudioPlayer;