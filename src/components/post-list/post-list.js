import React, { Component } from 'react';
import './post-list.css';
import PostListItem from '../post-list-item';

class PostList extends Component {

        render() {
            const {posts, yellow, onToggleLiked, onDelete, allPost, liked} = this.props;
            const mass = posts.map((item)=>{
            const {id, ...itemProps} = item;
            return (
                <li key = {id}>
                    <PostListItem
                        {...itemProps}
                        onToggleLiked = {() => onToggleLiked(id)}
                        onDelete = {() => onDelete(id)}
                    />
                </li>
            )
            })

            let postListBlock = "postListBlock";
            
            if (yellow) {
                postListBlock += " changePost";
            }
            
                return (
                    <div 
                        className = {postListBlock}>
                            <div className = "appHeader">
                <p>{allPost} записей, из низ понравилось {liked}</p>
                            </div>
                        <ul>
                            {mass}
                        </ul>
                    </div>
                )
        }
}

export default PostList;