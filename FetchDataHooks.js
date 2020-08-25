import React, { useState, useEffect } from 'react';

const FetchDataHooks = () => {
    const [error,setError] = useState(null);
    const [isLoaded,setIsLoaded] = useState(false);
    const [items,setItems] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(result => {
            setIsLoaded(true);
            setItems(result);
        },
        error => {
            setIsLoaded(true);
            setError(error);
        })
    },[])
    if(error) {
        return <div>{error.message}</div>
    } else if(!isLoaded){
        return <div>Loading....</div>
    } else {
        return(
            <div>
                <ul>
                    {items.map(item => <li key={item.id}>{item.title}</li>)}
                </ul>
            </div>
        )
    }

    
}
export default  FetchDataHooks;