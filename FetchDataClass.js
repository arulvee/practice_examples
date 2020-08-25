import React, { Component } from 'react';

export default class FetchDataClass extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoaded:false,
            items:[],
            error:null
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(result => {
            console.log(result)
            this.setState({
                isLoaded:true,
                items:result
            });
        },
        error => {
            this.setState({isLoaded:true,error});
        })

    }
    render(){
        const { isLoaded, items, error} = this.state;
        if(error) {
            return <div>{error.message}</div>
        } else if(!isLoaded) {
            return <div>Loading....</div>
        } else {
            return(
                <div>
                    <ul>
                        {items.map(item => <li key={item.id}>{item.body}</li>)}
                    </ul>
                </div>
            )
        }
        
    }
}