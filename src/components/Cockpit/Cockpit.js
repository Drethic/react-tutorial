import React from 'react';

const cockpit = (props) => (
    <div>
        <h1 key="header">{props.appTitle}</h1>
        <p key="main-paragraph">Welcome to Joe's React Tasks, click the buttons to see the different solutions and then some.</p>
    </div>
);

export default cockpit;


// const response = [];
//     response.push(<h1 key="header">React Tutorial App</h1>);
//     response.push(<p key="main-paragraph">Welcome to Joe's React Tasks, click the buttons to see the different solutions and then some.</p>);
//     // console.log(props);
//     // let task1 = {props.task1}, task2 = {props.task2}, mainApp = {props.mainApp};
//     response.push(<button style={props.buttonStyle} key="task1" onClick={props.toggleTask1}>Toggle Task 1</button>);
//     // response.push({props.task1});
//     response.push(<button style={props.buttonStyle} key="task2" onClick={props.toggleTask2}>Toggle Task 2</button>);
//     // response.push({props.task2});
//     response.push(<button style={props.appButtonStyle} key="mainApp" onClick={props.toggleMainApp}>Toggle Main App</button>);
//     // response.push({props.mainApp});
//     console.log(response);

//     return (<div>{response.map((elements) => (
//         {elements}
//     ))}</div>);
