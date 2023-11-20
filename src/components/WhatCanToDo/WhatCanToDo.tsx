import { ItemWhatCanTodo } from "./ItemWhatCanToDo"
import './../../App.css';

export const WhatCanToDo = () => {
    const skills = [
        {url: "/webDesign.png", header: "web design", text: "One advanced diverted domestic sex repeated bringing you old."},
        {url: "/backend.png", header: "back-end", text: "One advanced diverted domestic sex repeated bringing you old."},
        {url: "/frontend.png", header: "front-end ", text: "One advanced diverted domestic sex repeated bringing you old."},
        {url: "/uiux.png", header: "IX/UI design ", text: "One advanced diverted domestic sex repeated bringing you old."}
    ]

    return (
    <div className="bg-color">
        <div className="container">
            <h2 className="h2-center">What can do for you</h2>
            <div className="display-flex-my-skills-items">
                    {skills.map(item => {
                        return <ItemWhatCanTodo url={item.url} header={item.header} text={item.text}/>
                    })}
            </div>
        </div>
        
    </div>)
}