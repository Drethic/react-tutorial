import React from 'react';
import classes from './Modal.css';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Auxiliary>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div
            className={[classes.modal, props.show ? '' : classes.hidden, props.subtitle ? '' : classes.modalNoh2].join(' ')}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1': '0'
            }}
        >
        <header>
            <h1>{props.title}
                <span className={classes.Close} onClick={props.modalClosed}></span>
            </h1>
            {props.subtitle ? <h2>{props.subtitle}</h2> : null}
        </header>
            <div className={classes.ModalContent}>
                {props.children}
            </div>
        </div>
    </Auxiliary>
);

export default modal;
