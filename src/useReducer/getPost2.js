import React,{ useState,useEffect, useReducer } from "react";

const initialState = {
    loading: true,
    error:'',
    post: {}
};
const reducer = (state,action) => {

    switch (action.type) {
        case 'success':
            return {
                loading: false,
                error:'',
                post:action.result
            }
        case 'error':
            return {
                loading: false,
                error:'Something is Wrong',
                post: {}
            }
    
        default:
            return state;

    }

}
export default function GetPost2(){
    const [state,dispatch] = useReducer(reducer,initialState);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then((data)=>{
               dispatch({
                type:'success',
                result:data
               })

            })
            .catch(()=>{
                dispatch({
                    type:'error'
                   })
            })
    },[]);

    return (
        <div>
            {state.loading ? 'Loading ... ' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}