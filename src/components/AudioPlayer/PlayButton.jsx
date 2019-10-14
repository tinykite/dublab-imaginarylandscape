import React from 'react';

const PlayButton = ({theme}) => {
	return(
		<svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      className={`podcast__button podcast__button--${theme}`}
    >
      <path
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        d="M0 0L0 25 25 12.5z"
      />
    </svg>
	)
}

export default PlayButton;