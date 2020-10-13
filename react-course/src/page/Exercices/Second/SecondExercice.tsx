import React, {useEffect, useReducer} from 'react';
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function SecondExercice(){
    const [counter, setCounter] = useReducer(reducer, 0);

    useEffect(() => {
        setCounter((c:number) => c+1);
        console.log('ouais');
    },[]);


    useEffect(() => {
        console.log('ouais 2');
        setCounter((c:number) => c+1);
    },[]);

    return (
        <>
            <div className="text-center text-2xl mb-8">Utilisation des reducers</div>
            {<Counter/>}
            <div className="block m-2">
                {counter}
            </div>
        </>
    );
}

const initialState = 0;

/**
 * Reproduction du comportement de useState via un reducer
 * @param state
 * @param newState
 */
function reducer(state:any, newState:any):any {
    if(typeof newState === 'function'){
        return newState(state);
    }
    return newState;
}

const Counter = () => {
    const [count, setCount] = useReducer(reducer, initialState);
    return (
        <div className="flex flex-row">
            <div className="mx-2">Total : {count}</div>
            <div className="cursor-pointer flex mx-2 w-8 h-8 border rounded-full transition duration-100 hover:bg-blue-200 active:transform active:scale-90" onClick={() => setCount(count-1)}>
                <FontAwesomeIcon icon={faMinus} className="m-auto"/>
            </div>
            <div className="cursor-pointer flex mx-2 h-8 w-8 border rounded-full transition duration-100 hover:bg-blue-200 active:transform active:scale-90" onClick={() => setCount(count+1)}>
                <FontAwesomeIcon icon={faPlus} className="m-auto"/>
            </div>
        </div>
    );
}