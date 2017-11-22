import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios';
import Input from '../../../components/UI/Input/Input';
import _ from 'lodash';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            state: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'State',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip Code',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5,
                },
                valid: false,
                touched: false,
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest',},
                        {value: 'Cheapest', displayValue: 'Cheapest',},
                    ]
                },
                value: '',
                valid: true,
            },
        },
        formIsValid: false,
        loading: false,
    };

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
        this.setState({loading: true});
        const formData = {};
        _.each(this.state.orderForm, (data, key) => (
            formData[key] = data.value
        ));
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData,
        }
        axios.post('/orders.json', order)
            .then(response => {
                // console.log(response);
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                // console.log(error);
                this.setState({loading: false});
            });
    };

    checkValidation(value, rules) {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    inputChangedHandler = (event, formId) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[formId]
        };
        updatedFormElement.value = event.target.value;
        if (updatedFormElement.validation) {
            updatedFormElement.valid = this.checkValidation(updatedFormElement.value, updatedFormElement.validation);
        }
        updatedFormElement.touched = true;
        updatedOrderForm[formId] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    }

    render() {
        const formElementsArray = _.map(this.state.orderForm, (element, key) => (
            <Input
                key={key}
                displayType={key}
                elementType={element.elementType}
                elementConfig={element.elementConfig}
                value={element.value}
                invalid={!element.valid}
                shouldValidate={element.validation}
                touched={element.touched}
                changed={(event) => this.inputChangedHandler(event, key)}
            />
        ));
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray}
                <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;
