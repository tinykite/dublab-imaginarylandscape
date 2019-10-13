import React from 'react';
import Logo from './Logo';
import './Introduction.scss';

const Introduction = () => {
	return (
    <div className="Introduction">
      <h1 className="Introduction__title">dublab presents</h1>
      <Logo />
      <p className="Introduction__text Introduction__text--firstLine">Across the 1980s-1990s, Angelino composer Carl Stone hosted the radio show Imaginary Landscape on KPFK. </p>
      <p className="Introduction__text">Broadcasting every week for several years the show has been a key space for avant-garde electronic music, sound arts and their contributors. Spreading the sounds but also the stories of the artists that created them, Imaginary Landscape can be credited for its documentarian perspective.</p>
      <p className="Introduction__text">Throughout its broadcast, Stone received many pioneers and important figures of electronic music as guests on the show. Bringing music and interviews together, the show gave unique insights on the composers' creative processes, their relation with sounds and technologies, the evolution of their careers in such particular music worlds. And as an early contribution to the documentation of electronic music and sound arts, Imaginary Landscape carries a definite contemporary relevance.</p>
      <p className="Introduction__text">For those reasons, Dublab has remastered and re-released a dozen of the original broadcasts.</p>
    </div>
  )
}

export default Introduction;