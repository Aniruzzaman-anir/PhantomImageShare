import React from "react";
import Masonry from "react-masonry-css";


import Pin_sidebar from "../Pin/Pin_sidebar";

const breakpointColumnObj = {
    default:2,
    768:3
}


function Masonry_sidebar (){
    return(
        <div></div>
        // <Masonry className="flex animate-slide-fwd" breakpointCols={breakpointColumnObj}>
        //     {pins?.map((pin)=> <Pin_sidebar key={pin._id} pin={pin} className={w-max}/>)}

        // </Masonry>
    )
}