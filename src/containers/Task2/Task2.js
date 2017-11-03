import React, { Component } from 'react';
import Radium from 'radium';
import Auxiliary from '../../hoc/Auxiliary';
import Char from '../../components/Char/Char';
import { lengthVal as Length } from '../../components/Validation/Validation';

class Task2 extends Component {
    state = {
        text: '',
        showTask2: false,
    };

    toggleTask2 = (event) => {
        this.setState({
            showTask2: !this.state.showTask2
        });
    };

    changeHandler = (event) => {
        this.setState({
            text: event.target.value
        });
    };

    deleteLetterHandler = (key) => {
        const text = this.state.text.split('');
        text.splice(key, 1);
        this.setState({
            text: text.join('')
        });
    };

    render() {
        let task2 = null;

        const buttonStyle = {
            backgroundColor: '#eee',
            color: 'black',
            font: 'inherit',
            border: '1px solid #ccc',
            padding: '8px',
            cursor: 'pointer',
            display: 'block',
            ':hover': {
                backgroundColor: '#aaa',
                color: 'white'
            }
        };

        if (this.state.showTask2) {
            task2 = (
                <div>
                    <ol>
                        <li>Create an input field( in App component) with a change listener which outputs the length of the entered text below it(e.g.in a paragraph).</li>
                        <li>Create a new component( => ValidationComponent) which receives the text length as a prop</li>
                        <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length(e.g.take 5 as a minimum length)</li>
                        <li>Create another component( => CharComponent) and style it as an inline box( => display: inline - block, padding: 16 px, text - align: center, margin: 16 px, border: 1 px solid black).</li>
                        <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text( in the initial input field) as a prop.</li>
                        <li> When you click a CharComponent, it should be removed from the entered text.</li>
                    </ol>
                    <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
                    <input type = "text" onChange = {this.changeHandler} value = {this.state.text} />
                    <p> Text Length: {this.state.text.length}</p><Length length={this.state.text.length} />
                    <Char text = {this.state.text} delete = {this.deleteLetterHandler} />
                </div>
            );
        }

        return(
            <Auxiliary>
                <button style={buttonStyle} key="task2" onClick={this.toggleTask2}>Toggle Task 2</button>
                {task2}
            </Auxiliary>
        );
    };
}

export default Radium(Task2);
