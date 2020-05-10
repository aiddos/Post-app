import React, { Component } from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textProfile: '',
            textArea: '',
            url: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onTextAreaChange = this.onTextAreaChange.bind(this);
        this.onUrlChange = this.onUrlChange.bind(this);
    }

    onValueChange(event) {
        this.setState({
            textProfile: event.target.value
        })
    } 

    onTextAreaChange(event) {
        this.setState({
            textArea: event.target.value
        })
    }

    onUrlChange(event) {
        this.setState({
            url: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onAdd(this.state.textProfile, this.state.url, this.state.textArea);
        localStorage.setItem('items', this.state.textProfile);
        this.setState({
            textProfile: '',
            textArea: '',
            url: ''
        })
    }

    render() {
        const {yellow} = this.props;
        let classNames = "btn";
        let sunShine = "sunShine";

        if (this.state.textProfile.length > 0 && this.state.textArea.length > 0 && this.state.url.length > 0) {
            classNames += " btnPublic";
        }

        if (yellow) {
            sunShine += " test";
        }
        
        return (
            <div 
                className = {sunShine}>
                <button 
                    className = "toggleBtn"
                    onClick = {()=>this.props.onYellowClick()}>
                        <span></span>
                        <span></span>
                        <span></span>
                </button>
                <div 
                    className = "addFormBlock">
                    <form 
                        className = "form"
                        onSubmit = {this.onSubmit}>
                        <br/>
                        <input 
                            type = "text" 
                            placeholder="Введите профиль"
                            onChange = {this.onValueChange}
                            value = {this.state.textProfile}
                        />
                        <br/>
                        <input 
                            type="text" 
                            placeholder="Введите URL"
                            onChange = {this.onUrlChange}
                            value = {this.state.url}
                        />
                        <br/>
                        <textarea 
                            rows = "10"
                            type = "text"
                            placeholder = "Введите описание"
                            onChange = {this.onTextAreaChange}
                            value = {this.state.textArea}
                        />
                        <br/>
                        <button 
                            type = "submit"
                            className = {classNames}>Опубликовать</button>
                    </form>
                </div>
            </div>
        )
    }
}