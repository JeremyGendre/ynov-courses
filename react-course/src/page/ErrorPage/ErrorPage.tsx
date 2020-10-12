import React, {PropsWithChildren} from 'react';

type Props = {
    code?:number,
    message?:string
}

export default function ErrorPage(props:PropsWithChildren<Props>){
    return (
        <>
            {props.code ?? '404'} {props.message ?? ''}
        </>
    );
}