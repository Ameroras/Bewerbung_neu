"use client"
import {useState} from "react";

type ChipProps = {
    skills:string[]|string;
    label: string;
};

export const Chip = ({ label, skills }: ChipProps) => {
    const [isHover,setIsHover]=useState(false)
    return (<div className={"relative"}>
        <div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className="border border-gray-500 px-4 py-2 rounded-lg font-semibold bg-cyan-900">
            {label}
        </div>
        {isHover && <div className={"border border-gray-500 px-4 py-2 rounded-lg font-semibold bg-cyan-900 absolute transition top-25"}>{Array.isArray(skills)?
            skills.map((element)=> {
                return(<p key={element} >{element}</p>)
            })
            :skills}
            </div>}
    </div>);
};
