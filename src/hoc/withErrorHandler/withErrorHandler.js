import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxiliary from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null,
        }
        // Updating to from Did to Will to move before children render and register interceptors.  Does not reach out to web
        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        };
        componentWillUnmount() {
            // Cleans up interceptors when components are removed to prevent memory leaks
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        };
        errorConfirmedHandler = () => {
            this.setState({error: null});
        };
        render() {
            return(
                <Auxiliary>
                    <Modal
                        title="There was an error with the Application"
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}
                    >
                        <div>
                            <p>Something didn't work!</p>
                            <p>{this.state.error ? this.state.error.message : null}</p>
                        </div>
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Auxiliary>
            );
        }
    }
}

export default withErrorHandler;
