import React from "react";
interface props{

}
const Reward:React.FC<props> =()=>{
    return(
        <>
        <div className=" h-56 bg-lightgreen w-full">
        This is Reward page</div>
        </>
)}

Reward.defaultProps={};

export default React.memo(Reward);

