import './UniversePage.css';

const UniversePage = () => {
  return (
    <div className="universe-page-container">
      <h1 className="universe-page-title">The Early Universe</h1>
      <p className="universe-page-paragraph">
        All matter in the universe was formed in one explosive event 13.7 billion years ago – the Big Bang
      </p>

      <h2 className="universe-page-subtitle">The Big Bang</h2>
      <p className="universe-page-paragraph">
        In 1929 the American astronomer Edwin Hubble discovered that the distances to far-away galaxies were proportional to their redshifts. Redshift occurs when a light source moves away from its observer: the light's apparent wavelength is stretched via the Doppler effect towards the red part of the spectrum. Hubble’s observation implied that distant galaxies were moving away from us, as the furthest galaxies had the fastest apparent velocities. If galaxies are moving away from us, reasoned Hubble, then at some time in the past, they must have been clustered close together.
      </p>
      <p className="universe-page-paragraph">
        Hubble’s discovery was the first observational support for Georges Lemaître’s Big Bang theory of the universe, proposed in 1927. Lemaître proposed that the universe expanded explosively from an extremely dense and hot state, and continues to expand today. Subsequent calculations have dated this Big Bang to approximately 13.7 billion years ago. In 1998 two teams of astronomers working independently at Berkeley, California observed that supernovae – exploding stars – were moving away from Earth at an accelerating rate. This earned them the Nobel prize in physics in 2011. Physicists had assumed that matter in the universe would slow its rate of expansion; gravity would eventually cause the universe to fall back on its centre.
      </p>
      <p className="universe-page-paragraph">
        Though the Big Bang theory cannot describe what the conditions were at the very beginning of the universe, it can help physicists describe the earliest moments after the start of the expansion.
      </p>

      <h2 className="universe-page-subtitle">Origins</h2>
      <p className="universe-page-paragraph">
        In the first moments after the Big Bang, the universe was extremely hot and dense. As the universe cooled, conditions became just right to give rise to the building blocks of matter – the quarks and electrons of which we are all made. A few millionths of a second later, quarks aggregated to produce protons and neutrons. Within minutes, these protons and neutrons combined into nuclei. As the universe continued to expand and cool, things began to happen more slowly. It took 380,000 years for electrons to be trapped in orbits around nuclei, forming the first atoms. These were mainly helium and hydrogen, which are still by far the most abundant elements in the universe.
      </p>
      <p className="universe-page-paragraph">
        Present observations suggest that the first stars formed from clouds of gas around 150–200 million years after the Big Bang. Heavier atoms such as carbon, oxygen, and iron have since been continuously produced in the hearts of stars and catapulted throughout the universe in spectacular stellar explosions called supernovae.
      </p>
      <p className="universe-page-paragraph">
        But stars and galaxies do not tell the whole story. Astronomical and physical calculations suggest that the visible universe is only a tiny amount (4%) of what the universe is actually made of. A very large fraction of the universe, in fact 26%, is made of an unknown type of matter called "dark matter". Unlike stars and galaxies, dark matter does not emit any light or electromagnetic radiation of any kind, so that we can detect it only through its gravitational effects.
      </p>
      <p className="universe-page-paragraph">
        An even more mysterious form of energy called “dark energy” accounts for about 70% of the mass-energy content of the universe. Even less is known about it than dark matter. This idea stems from the observation that all galaxies seem to be receding from each other at an accelerating pace, implying that some invisible extra energy is at work.
      </p>
    </div>
  );
};

export default UniversePage;