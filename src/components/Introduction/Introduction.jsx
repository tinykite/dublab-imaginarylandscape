import React from 'react';
import Logo from './Logo';
import './Introduction.scss';

const Introduction = () => {
	return (
    <div className="Introduction">
      <h1 className="Introduction__title">dublab presents</h1>
      <Logo />
      <p className="Introduction__text Introduction__text--firstLine">Across the 1980s-1990s, Angelino composer Carl Stone hosted the radio show <em>Imaginary Landscape</em> on KPFK.</p>
      <p className="Introduction__text">Broadcasting every week for several years the show has been a key space for avant-garde electronic music, sound arts and their contributors. Spreading the sounds but also the stories of the artists that created them, <em>Imaginary Landscape</em> can be credited for its documentarian perspective. Stone received many pioneers and important figures of electronic music as guests on the show. Bringing music and interviews together, the show gives unique insights on the composers' creative processes, their relation with sounds and technologies, the evolution of their careers in such particular music worlds.</p>
      <p className="Introduction__text">As an early contribution to the documentation of electronic music and sound arts, <em>Imaginary Landscape</em> carries a definite contemporary relevance.</p> 
      <p className="Introduction__text">For those reasons, several episodes of the show have been selected and will be aired and archived on dublab. Newly edited and re-mastered, those episodes feature unreleased works and live performances from the composers included in the archival series: David Behrman, Harold Budd, Alvin Curran, Brian Eno, Rolf Julius, Steve Reich, Terry Riley, Frederic Rzewski, Morton Subotnick, Toru Takemitsu, Chen Yi, and Frank Zappa.</p>
      <p className="Introduction__text">Project coordination - Samuel Lamontagne</p>
      <p className="Introduction__text">Graphic design - Jay Ramirez</p>
      <p className="Introduction__text">Web design - Dakota Sexton</p>
    </div>
  )
}

export default Introduction;