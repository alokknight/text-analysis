import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Skill() {
  const percentage = 66;
  const percentage2 = 34;
  const percentage3 = 21;
  const percentage4 = 92;
  return (
    <>
      <div className="box" style={{ width: 700, height: 400 }}>

        <div id="skill">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
        <div id="skill">
          <CircularProgressbar value={percentage} text={`${percentage2}%`} />
        </div>
        <div id="skill">
          <CircularProgressbar value={percentage} text={`${percentage3}%`} />
        </div>
        <div id="skill">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>



      </div>
      <div className="container" style={{ width: 200, height: 200 }}>
        <div className="box" >
          <div id="skill">
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
          </div>
          <div id="skill">
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
          </div>
          <div id="skill">
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
          </div>
          <div id="skill">
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
          </div>
          <div id="skill">
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
          </div>
        </div>
      </div>

      <div className="box">
        <div id="skill">
          <img src={require("./Images/logo.jpg")} style={{ width: 150, height: 150 }} alt="Logo" />
        </div>
        <div id="skill">
          <img src={require("./Images/logo.jpg")} style={{ width: 150, height: 150 }} alt="Logo" />
        </div>
        <div id="skill">
          <img src={require("./Images/logo.jpg")} style={{ width: 150, height: 150 }} alt="Logo" />
        </div>
        <div id="skill">
          <img src={require("./Images/logo.jpg")} style={{ width: 150, height: 150 }} alt="Logo" />
        </div>

      </div>
    </>


  )
}
