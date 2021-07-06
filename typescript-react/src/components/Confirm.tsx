import React from "react";
interface props{
    open?: boolean;
title?:string;
description?:string;
okText?:string;
cancelText?:string;
}
const Confirm:React.FC<props> =({ title,description,okText,cancelText})=>{
    
    return(
        <>
        
        
        </>
)}

Confirm.defaultProps={
    open: false,
    title:"Are you sure?",
    okText:"OK",
    cancelText:"Cancel",
};

export default React.memo(Confirm);

