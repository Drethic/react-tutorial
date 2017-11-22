import React, { Component } from 'react';
import classes from './Modal.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {
        return(
            <Auxiliary>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={[classes.modal, this.props.show ? '' : classes.hidden, this.props.subtitle ? '' : classes.modalNoh2].join(' ')}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1': '0'
                    }}
                >
                <header>
                    <h1>{this.props.title}
                        <span className={classes.Close} onClick={this.props.modalClosed}></span>
                    </h1>
                    {this.props.subtitle ? <h2>{this.props.subtitle}</h2> : null}
                </header>
                    <div className={classes.ModalContent}>
                        {this.props.children}
                    </div>
                </div>
            </Auxiliary>
        );
    }
}

export default Modal;
