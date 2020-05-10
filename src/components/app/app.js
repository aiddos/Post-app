import React, { Component } from 'react';
import './app.css';
import PostAddForm from '../post-add-form';
import PostList from '../post-list';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            yellow: false
        }
        this.addItem = this.addItem.bind(this);
        this.onYellowClick = this.onYellowClick.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.maxId = 1;
    }

    onToggleLiked(id) {
        this.setState(({data})=>{
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, like: !old.like}
            const before = data.slice(0, index)
            const after = data.slice(index+1)
            const newArr = [...before, newItem, ...after];
            return {
                data: newArr
            }
        })
    }

    deleteItem(id) {
        this.setState(({data})=>{
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index+1)
            const newArr = [...before, ...after];
            return {
                data: newArr
            }
        })
    }

    addItem(body, shoe, mean) {
        const newItem = {
            name: body,
            url: shoe,
            copyrite: mean,
            like: false,
            id: this.maxId++
        }
        this.setState(({data})=> {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    onYellowClick() {
        (this.state.yellow === false) ?
        this.setState({
            yellow: true}) :
            this.setState({
                yellow: false})
    }

    render() {
        const {data, yellow} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPost = data.length;
        return (
            <div className="main">
                <div className = "appBlock">
                    <PostAddForm
                        onAdd = {this.addItem}
                        yellow = {yellow}
                        onYellowClick = {this.onYellowClick}/>
                    <PostList 
                        posts = {data}
                        yellow = {yellow}
                        onToggleLiked = {this.onToggleLiked}
                        onDelete = {this.deleteItem}
                        liked = {liked}
                        allPost = {allPost}/>
                </div>
            </div>
        )
    }
}