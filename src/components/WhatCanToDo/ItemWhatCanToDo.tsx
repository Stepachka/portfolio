import './../../App.css';

interface ItemWhatCanTodoProps {
    url: string
    header: string
    text : string
}

export const ItemWhatCanTodo = ({url, header, text}:ItemWhatCanTodoProps) => {
    return (
        <div className='item-my-skills'>
            <div>
                <img src={url} alt="none" />
            </div>
            <h3 className='skill-header'>{header}</h3>
            <p className='skill-item-text'>{text}</p>
        </div>
    )
}