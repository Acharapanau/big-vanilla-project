import React, {ChangeEvent, MouseEvent} from "react";

export const User = () => {
    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }

    const onNameChanged = () => {
        console.log('name changed')
    }

    const onAgeChanged = (event:ChangeEvent<HTMLInputElement>) => {
        console.log('Age changed: ' + event.currentTarget.value)
    }

    const focusLostHandler = () => {
        console.log('focus lost')
    }

    return (
        <div><textarea onBlur={focusLostHandler} onChange={onNameChanged}>Dimych</textarea>
            <input onChange={onAgeChanged} type={'number'}/>
            <button name="delete" onClick={deleteUser}>x</button>
            <button name="save" onClick={deleteUser}>x</button>
        </div>
    )
}