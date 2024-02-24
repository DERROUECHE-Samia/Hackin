import React from "react";

export default function Button(props) {
    return (
        <button className='bg-amber-600 text-white font-[Poppins] py-2 px-10 ml-4 rounded-lg  hover:bg-orange-400'>
            {props.children}
        </button>
    )
}
