import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: {props.price}</p>
        {controls.map(control => (
            <BuildControl
                key={control.label}
                label={control.label}
                add={props.add.bind(this, control.type)}
                remove={props.remove.bind(this, control.type)}
                disabled={props.disabled[control.type]}
            />
        ))}
    </div>
);

export default buildControls;