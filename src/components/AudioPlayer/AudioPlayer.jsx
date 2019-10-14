import React from 'react';
import AudioPlayerItem from './AudioPlayerItem';

const AudioPlayer = ({podcasts, ...props}) => (
		<>
		{podcasts && podcasts.map(({title, background, theme, year, city, location, time, audioUrl}, index) =>
		<AudioPlayerItem key={'AudioPlayerItem-' + index} background={background} title={title} time={time} theme={theme} year={year} city={city} location={location} audioUrl={audioUrl} />
		)}
		</>
)

export default AudioPlayer;