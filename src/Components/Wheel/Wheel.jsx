import React, { useState, useEffect, useRef } from 'react';
import wheelPic from '../../images/wheel.png';
import cursorImage from '../../images/cursor.png';

import './Wheel.css';

function Wheel() {
  const [wheel, setWheel] = useState({
    stopped: true,
    fast: false,
    slow: false,
    slowest: false,
    result: false,
    deg: 0,
  });

  const [win, setWin] = useState ({
    haveWonYet: 0, // 0 = not played yet / 1 = played and lost / 2 = played and won discount / 3 = played and won candy
  })

  const handleWheelState = () => {
    if (wheel.stopped === true) {
      return "wheel";
    } else if (wheel.fast === true) {
      return "wheel spinning-fast";
    } else if (wheel.slow === true) {
      return "wheel spinning-slow";
    } else if (wheel.slowest === true) {
      return "wheel spinning-slowest";
    } else if (wheel.result === true) {
      return "wheel result"
    }
  }

  const randomNumber = () => {
    let numb =  (Math.floor(Math.random() * 361) + 1)-1;
    console.log(numb);
    const prevState = wheel
    prevState.deg = numb
    console.log(prevState)
    setWheel(prevState);
    // setWheel((prevState) => ({});
    return numb;
  }

  const haveYouWon = () => {
    if (wheel.deg >= 0 && wheel.deg <= 135) {
      console.log("LOST");
      setWin({haveWonYet: 1})
    } else if (wheel.deg >= 136 && wheel.deg <= 179) {
      console.log("You won a coupon for a free candy bag !");
      setWin({haveWonYet: 3})
    } else if (wheel.deg >= 180 && wheel.deg <= 270) {
      console.log("LOST")
      setWin({haveWonYet: 1})
    } else if (wheel.deg >=271 && wheel.deg <= 315) {
      console.log("You won a 10% off coupon for a ticket !");
      setWin({haveWonYet: 2})
    } else if (wheel.deg >=316 && wheel.deg <= 360) {
      console.log("LOST")
      setWin({haveWonYet: 1})
    }
  }

  const handleButton = () => {
    document.getElementById('wheel').style.setProperty("--rotation-deg", randomNumber() + "deg");
    setWheel({stopped: false})
    setWheel({slowest: true})
    setTimeout(() => {
      setWheel({slowest: false})
      setWheel({slow: true})
    }, 500);
    setTimeout(() => {
      setWheel({slow: false})
      setWheel({fast: true})
    }, 3000);
    setTimeout(() => {
      setWheel({fast: false})
      setWheel({result: true})
      haveYouWon()
    }, 6000);
  }

  return (
    <div className="wheelDiv">
      <h2>Test your luck !</h2>
      <img className="cursor" src={cursorImage} alt="cursor" />
      <img id="wheel" class={handleWheelState()} src={wheelPic} alt="lottery wheel" />
      <button className={win.haveWonYet === 0 ? "button" : "button-hiden"} type="button" onClick={handleButton}> Test your luck ! </button>
      <div className={win.haveWonYet === 1 ? "lost-div-displayed" : "lost-div"} >You have lost ! :(</div>
      <div className={win.haveWonYet === 2 ? "won-discount-div-displayed" : "won-discount-div"} >You have won a 10% discount ! Here is your coupon :</div>
      <div className={win.haveWonYet === 3 ? "won-candy-div-displayed" : "won-candy-div"} >You have won a free candy bag ! Here is your coupon :</div>
    </div>
  );
}

export default Wheel;
