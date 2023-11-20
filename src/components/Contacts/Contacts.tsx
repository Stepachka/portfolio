import './../../App.css';
import { FormContact } from './FormConstacts';
import { ItemContacts } from './ItemContact';

export const Contacts = () => {

    const contactList = [
        {url:"/icon_githab.png", text: "Stepachka"},
        {url:"/icon_telegram.png", text: "talabaev1"},
        {url:"/icon_vk.png", text: "talabaev1"},
        {url:"/icon_instagram.png", text: "masters_901"},
    ]

    return (
        <div className="bg-color">
            <div className="container contacts">
            <h2 className="h2-center">Contacts</h2>
            <div className='display-flex p-70'>
                {contactList.map(item => {
                    return <ItemContacts url={item.url} text={item.text} />
                })}
            </div>
            <FormContact />
            </div>
        </div>
    )
}