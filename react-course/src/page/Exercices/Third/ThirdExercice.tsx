import React, {useEffect, useState} from 'react';
import SearchInput from "../../../component/Input/SearchInput";
import {faBackward, faForward, faRedo} from "@fortawesome/free-solid-svg-icons";
import IconButton from "../../../component/IconButton/IconButton";
/*
function reducer(state:any, newState:any):any {
    if(typeof newState === 'function'){
        return newState(state);
    }
    return newState;
}

function useUndo(initialValue:any){
    const [state, dispatch] = useReducer(reducer, initialValue);

    return [
        {past:'', present:'', future:''},
        {set:'',unset:'',undo:'',redo:'',canUndo:true,canRedo:true},
    ];
}*/

type Value = {
    past:Array<string>,
    future:Array<string>,
    present: string
};

const initialState = {
    value : {past:[],present:'',future:[]},
    canUndo : false,
    canRedo : false
};

export default function ThirdExercice(){
    /*const state = useUndo('');
    console.log(state);*/

    const [value,setValue] = useState<Value>(initialState.value);
    const [canUndo,setCanUndo] = useState(initialState.canUndo);
    const [canRedo,setCanRedo] = useState(initialState.canRedo);

    useEffect(()=>{
        setCanUndo(value.past.length > 0);
        setCanRedo(value.future.length > 0);
    },[value])

    function handleSearch(newValue:string){
        setValue({past:[...value.past, newValue],present:newValue,future:[]});
    }

    function handleBackward(){
        let newPresentValue = value.present;
        let newPastValue:Array<string> = value.past;
        let oldValue = value.present;
        if(value.past.length !== 0 ){
            oldValue = value.past[value.past.length-1]
            newPastValue.pop();
            newPresentValue = value.past[value.past.length-1];
        }
        setValue({
            past : newPastValue,
            present : newPresentValue ?? '',
            future : [...value.future,oldValue]
        });
    }

    function handleForward(){
        let newFutureValue:Array<string> = value.future;
        let oldValue = value.present;
        if(value.future.length !== 0 ){
            oldValue = value.future[value.future.length-1];
            newFutureValue.pop();
        }
        setValue({
            past : [...value.past,oldValue],
            present : oldValue,
            future : newFutureValue,
        });
    }

    function handleReset(){
        setValue(initialState.value);
        setCanUndo(initialState.canUndo);
        setCanRedo(initialState.canRedo);
    }

    function displayValue(){
        return (
            <div className="my-3">
                <p className="my-2">past : {JSON.stringify(value.past)}</p>
                <p className="my-2">present : {value.present}</p>
                <p className="my-2">future : {JSON.stringify(value.future)}</p>
            </div>
        );
    }

    return (
        <div>
            <SearchInput callback={handleSearch} value={value.present}/>
            <div className="flex mt-2">
                <IconButton callback={handleBackward} icon={faBackward} widthClass={"w-10"} heightClass={"h-10"} disabled={!canUndo}/>
                <IconButton callback={handleForward} icon={faForward} widthClass={"w-10"} heightClass={"h-10"} disabled={!canRedo}/>
                <IconButton callback={handleReset} icon={faRedo} widthClass={"w-10"} heightClass={"h-10"}/>
            </div>
            {displayValue()}
        </div>
    );
}