import React, {useState} from "react";

type LessonType = {
    title:string
}

export type ManType = {
    name:string
    age:number
    lessons:Array<LessonType>
    address: {
        street: {
            title: string
        }
    }
}



type PropsType = {
    title:string
    man:ManType
    food: Array<string>
    car: {model:string}
}

function useDimychState(m:string) {
    return{
        message:m,
        setMessage:function (){}
    }
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {
   // const {title,man,...restProps} = props;

    const[message,setMessage] = useState("hello")

    return(
        <div>
        <h1>{title}</h1>
        <hr/>
            <div>
                {props.car.model}
            </div>
            <div>
                {man.name}
            </div>
        </div>
    )
}