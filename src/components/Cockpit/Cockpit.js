import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';

const cockpit = (props) => (
    <Auxiliary>
       <h1 key="header">{props.appTitle}</h1>
       <p key="main-paragraph">Welcome to Joe's React Tasks, click the buttons to see the different solutions and then some.</p>
       <button style={props.buttonStyle} key="task1" onClick={props.toggleTask1}>Toggle Task 1</button>
       {props.task1}
       <button style={props.buttonStyle} key="task2" onClick={props.toggleTask2}>Toggle Task 2</button>
       {props.task2}
       <button style={props.appButtonStyle} key="mainApp" onClick={props.toggleMainApp}>Toggle Main App</button>
       {props.mainApp}
   </Auxiliary>
);

export default cockpit;
