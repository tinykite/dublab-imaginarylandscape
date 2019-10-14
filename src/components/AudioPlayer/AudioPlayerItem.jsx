import React, {useState, useEffect, useRef} from 'react';
import './AudioPlayer.scss';
import PauseButton from './PauseButton.jsx';
import PlayButton from './PlayButton.jsx';
import { motion, useTransform } from 'framer-motion';

const AudioPlayerItem = ({title, theme, background, year, city, location, time, audioUrl}) => {
	const [playState, setPlayState] = useState(false); 
	const [progressBar, setProgressBar] = useState(0);
	const ref = useRef();
	
	const backgroundColor = {
		background: `${background}`
	}

	const onPlay = () => {
		ref.current.play();
		console.log("Playing");
	}

	const onPause = () => {
		ref.current.pause();
		console.log("Paused");
	}

	const onTimeUpdate = () => {
		const duration = ref.current.duration;
		let currentTime = ref.current.currentTime;
		let progress = (currentTime / duration) * 100;
		setProgressBar(progress);
		// const scrubber = `width: ${progressBar}%`;
		console.log(progressBar);
		// console.log(`${currentTime} of ${duration}, which is ${progress}%`);
	}

	useEffect(() => {
		if (playState) {
			return onPause;
		} else if (!playState) {
			return onPlay;
		}
	}, [playState]);

	return (
		<section className={`podcast podcast--${theme}`} style={backgroundColor}>
		<div className="podcast__player">
		<audio controls src={audioUrl} ref={ref} onPlay={onPlay} onPause={onPause} onTimeUpdate={onTimeUpdate}/>
		<motion.button className="podcast__button" onClick={() => setPlayState(!playState)}>
			{playState ? (<PauseButton theme={theme} />) : (<PlayButton theme={theme} />)}
    </motion.button>
		<div class="podcast__main">
		<h2 className="podcast__title">{title}</h2>
		<div  className={`podcast__progressBar podcast__progressBar--${theme}`}>
			<div style={{width: progressBar + "%"}} className={`podcast__progressBar-playing podcast__progressBar-playing--${theme}`}></div>
		</div>
			<ul className="podcast__meta">
				<li className="podcast__metaItem">{year} |</li>
				<li className="podcast__metaItem">{city} |</li>
				<li className="podcast__metaItem">{time} |</li>
				<li className="podcast__metaItem">{location}</li>
			</ul>
		</div>
		</div>
	</section>
	)
}


export default AudioPlayerItem;