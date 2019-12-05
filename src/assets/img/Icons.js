import React from 'react';

const Star = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.width} viewBox="0 0 30 28.5">
    <path fill={props.fill} d="M15.05,22.5l6.48-1.71l2.73,8.41C24.27,29.2,15.05,22.5,15.05,22.5z M30,11.63H18.54L15,0.75l-3.54,10.87H0 l9.27,6.75L5.73,29.25l9.27-6.7l5.73-4.18C20.73,18.38,30,11.62,30,11.63z" />
  </svg>
);

const Arrow = (props) => (
  <svg style={{transform: "rotate("+props.degree+"deg)"}} xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.width} viewBox="0 0 30 28.5">
    <polygon fill={props.fill} points="0,0 0,28.5 30,14.25 "/>
  </svg>
);

const Circle = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.width} viewBox="0 0 30 28.5">
    <ellipse fill={props.fill} cx="15" cy="14.25" rx="15" ry="14.25"/>
  </svg>
);

const Square = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.width} viewBox={"0 0 "+props.width+" "+props.width}>
    <rect fill={props.fill} width={props.width} height={props.width} />
  </svg>
);

const Difficulty = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.width} viewBox={"0 0 "+props.width+" "+props.width}>
    { props.level >= 0 ? (
      <rect fill={props.fill} x="0" y={props.width-props.width/11} width={props.width/11} height={props.width/11}/>
    ) : null }
    { props.level >= 1 ? (
      <rect fill={props.fill} x={props.width/11} y={props.width-(props.width/11)*2} width={props.width/11} height={(props.width/11)*2}/>
    ) : null }
    { props.level >= 2 ? (
      <rect fill={props.fill} x={(props.width/11)*2} y={props.width-(props.width/11)*3} width={props.width/11} height={(props.width/11)*3}/>
    ) : null }
    { props.level >= 3 ? (
      <rect fill={props.fill} x={(props.width/11)*3} y={props.width-(props.width/11)*4} width={props.width/11} height={(props.width/11)*4}/>
    ) : null }
    { props.level >= 4 ? (
      <rect fill={props.fill} x={(props.width/11)*4} y={props.width-(props.width/11)*5} width={props.width/11} height={(props.width/11)*5}/>
    ) : null }
    { props.level >= 5 ? (
      <rect fill={props.fill} x={(props.width/11)*5} y={props.width-(props.width/11)*6} width={props.width/11} height={(props.width/11)*6}/>
    ) : null }
    { props.level >= 6 ? (
      <rect fill={props.fill} x={(props.width/11)*6} y={props.width-(props.width/11)*7} width={props.width/11} height={(props.width/11)*7}/>
    ) : null }
    { props.level >= 7 ? (
      <rect fill={props.fill} x={(props.width/11)*7} y={props.width-(props.width/11)*8} width={props.width/11} height={(props.width/11)*8}/>
    ) : null }
    { props.level >= 8 ? (
      <rect fill={props.fill} x={(props.width/11)*8} y={props.width-(props.width/11)*9} width={props.width/11} height={(props.width/11)*9}/>
    ) : null }
    { props.level >= 9 ? (
      <rect fill={props.fill} x={(props.width/11)*9} y={props.width-(props.width/11)*10} width={props.width/11} height={(props.width/11)*10}/>
    ) : null }
    { props.level >= 10 ? (
      <rect fill={props.fill} x={(props.width/11)*10} y={props.width-props.width} width={props.width/11} height={props.width}/>
    ) : null }
  </svg>
);

const MazeLoading = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.width} className={props.className} viewBox="0 0 30 28.5">
    <path stroke={props.stroke} strokeWidth={props.strokeWidth} fill={props.fill} d="M19.23,28.5c-6.16,0-12.31,0-18.47,0c-0.07,0-0.14,0-0.21,0c-0.39-0.02-0.52-0.13-0.52-0.5 c-0.01-1.56-0.06-3.12,0-4.68c0.01-0.37,0.02-0.73,0-1.1c-0.03-0.6-0.01-1.2-0.01-1.81c0-2-0.01-3.99,0.01-5.99 c0-0.25,0-0.49,0-0.74c0-0.23,0-0.47,0-0.7c-0.01-4.1-0.01-8.2-0.01-12.31c0-0.58,0.09-0.67,0.7-0.67c3.52,0,7.04-0.01,10.55,0.01 c0.47,0,0.94,0,1.41,0C16.23,0,19.77,0,23.31,0.02c0.47,0,0.94,0.01,1.41,0c1.52-0.04,3.05-0.01,4.57-0.01 c0.61,0,0.7,0.09,0.7,0.67c0,2.21,0.02,4.41 0.01,6.62c-0.01,0.45,0,0.89,0,1.34c0.03,2.99,0.03,5.97,0,8.96c0,0.45,0,0.89,0,1.34 c0.03,2.96,0.01,5.93,0.01,8.89c0,0.58-0.09,0.67-0.7,0.67c-1.14,0-2.27,0-3.41,0c-0.57,0-0.66-0.09-0.67-0.63 c-0.01-1.46,0-2.92,0-4.38c0-0.58-0.09-0.67-0.7-0.67c-2.71,0-5.42,0-8.13,0c-0.07,0-0.14,0-0.21,0c-0.43-0.03-0.56-0.15-0.56-0.57 c0-0.94,0-1.87,0-2.81"/>
    <path stroke={props.stroke} strokeWidth={props.strokeWidth} fill={props.fill} d="M20.39,13.68c-4.94,0-9.87-0.01-14.81,0.02c-0.58,0-1.15-0.02-1.72-0.02c-1.21,0-2.62,0-3.83,0"/>
    <path stroke={props.stroke} strokeWidth={props.strokeWidth} fill={props.fill} d="M6,4.56c0,0.93,0,1.85,0,2.78c0,0.54,0.09,0.63,0.67,0.63c3.56,0,7.13,0.01,10.69-0.01c0.47,0,0.94,0,1.41,0 c3.69,0.02,7.38,0.01,11.06,0.01"/>
    <path stroke={props.stroke} strokeWidth={props.strokeWidth} fill={props.fill} d="M9.59,19.4c0,0.93,0,1.85,0,2.78c0,0.54-0.09,0.63-0.67,0.63c-2.91,0-5.98,0-8.89,0"/>
    <path stroke={props.stroke} strokeWidth={props.strokeWidth} fill={props.fill} d="M29.84,18.27c-3.14,0-6.27,0-9.41,0"/>
    <path stroke={props.stroke} strokeWidth={props.strokeWidth} fill={props.fill} d="M4.81,13.85c0,1.47,0,2.94,0,4.41"/>
    <path stroke={props.stroke} strokeWidth={props.strokeWidth} fill={props.fill} d="M11.98,0.17c0,1.08,0,2.16,0,3.24"/>
    <path stroke={props.stroke} strokeWidth={props.strokeWidth} fill={props.fill} d="M24.01,0.17c0,1.08,0,2.16,0,3.24"/>
    <path stroke={props.stroke} strokeWidth={props.strokeWidth} fill={props.fill} d="M18.03,4.56c0,1.09,0,2.17,0,3.26"/>
  </svg>
)

export { Star, Arrow, Circle, Square, Difficulty, MazeLoading }
