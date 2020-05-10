import React, { Component } from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        }
        this.onAddComment = this.onAddComment.bind(this);
        this.onSubmitComment = this.onSubmitComment.bind(this);
        
    }

    onAddComment(event) {
        this.setState({
            comment: event.target.value
        })
    }

    onSubmitComment(event) {
        event.preventDefault();
        this.onCommentPlus(this.state.comment);
        localStorage.setItem('comment', this.state.comment);
        this.setState({
            comment: ''
        })
    }

    render(){
        const {name, url, copyrite, onToggleLiked, like, onDelete} = this.props;
        let className = "postListItem";
        if (like) {
            className += " like";
        }
        return (
            <div 
                className = {className} 
                onDoubleClick = {onToggleLiked}>
                    <div className = "profileHead">
                    <p className = "profileName">
                        {name}
                    </p>
                    <i className = "fa fa-trash-o" onClick = {onDelete}></i>
                    </div>
                <img src = {url} alt = "текст"/>
        <p className = "copyrite">{copyrite}</p>
        {/* <p></p> */}
            {/* <form 
                className = "formComment">
                <input 
                    className = "comPublic"
                    type = "text"
                    placeholder = "Комментарий"/>
                <button type = "submit">Отправить</button>
            </form> */}
            </div>
        )
    }
}