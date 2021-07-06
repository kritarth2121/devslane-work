import React from "react";
interface props{

}
const Gift:React.FC<props> =()=>{
    return(
        <div className=" bg-secondary">
        This is gift
        </div>
)}

Gift.defaultProps={};

export default React.memo(Gift);

