import React from 'react';
import MainApp from '../../containers/MainApp/MainApp';
import Task1 from '../../containers/Task1/Task1';
import Task2 from '../../containers/Task2/Task2';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

const cockpit = (props) => (
    <Auxiliary>
       <h1 key="header">React Tutorial App</h1>
       <p key="main-paragraph">Welcome to Joe's React Tasks, click the buttons to see the different solutions and then some.</p>
       <Task1 />
       <Task2 />
       <MainApp />
   </Auxiliary>
);

export default cockpit;
