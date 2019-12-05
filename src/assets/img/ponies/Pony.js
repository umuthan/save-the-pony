import React from 'react';

const Pony = (props) => (
  props.name === 'Twilight Sparkle' ? (
    <img alt="Twilight Sparkle" className="pony" src={require('./twilightsparkle.gif')} />
  ) : props.name === 'Rarity' ? (
    <img alt="Rarity" className="pony" src={require('./rarity.gif')} />
  ) : props.name === 'Rainbow Dash' ? (
    <img alt="Rainbow Dash" className="pony" src={require('./rainbowdash.gif')} />
  ) : props.name === 'Pinkie Pie' ? (
    <img alt="Pinkie Pie" className="pony" src={require('./pinkiepie.gif')} />
  ) : props.name === 'Fluttershy' ? (
    <img alt="Fluttershy" className="pony" src={require('./fluttershy.gif')} />
  ) : null
);

export default Pony;
