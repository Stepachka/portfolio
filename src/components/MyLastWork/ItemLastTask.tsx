import './../../App.css';

interface ItemLastTaskProps {
    url: string
    text: string
}

export const ItemLastTask = ({url, text}:ItemLastTaskProps) => {
    return (
        <div className='display-flex-task'>
            <img src={url} alt="item" />
            <p>{text}</p>
        </div>
    )
}