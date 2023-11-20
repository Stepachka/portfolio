import './../../App.css';

interface ItemContactsProps {
    url: string
    text: string
}

export const ItemContacts = ({url, text}: ItemContactsProps) => {
    return (
        <div className='display-flex w-20'>
            <img src={url} alt="icon contact" />
            <div>{text}</div>
        </div>
    )
}