import React from 'react';

// Assets
import bg from '../assets/bg.svg';
import dot from '../assets/dot.svg';
import dottedBold from '../assets/dotted-bold.svg';
import dotted from '../assets/dotted.svg';
import hours from '../assets/hours.svg';
import minutes from '../assets/minutes.svg';
import seconds from '../assets/seconds.svg';

function Clock() {
  return (
    <div>
      <div className="clock">
        <img src={bg} alt="" className="bg" />
        <img src={dottedBold} alt="" className="dottedBold" />
        <img src={dotted} alt="" className="dotted" />
        <img src={hours} alt="" className="hours" />
        <img src={minutes} alt="" className="minutes" />
        <img src={seconds} alt="" className="seconds" />
        <img src={dot} alt="" className="dot" />
      </div>
    </div>
  );
}

export default Clock;
