import { AboutMeScreen } from "./AboutMeScreen/AboutMeScreen"
import { Contacts } from "./Contacts/Contacts"
import { FirstScreen } from "./FirstScreen/FirstScreen"
import { Footer } from "./Footer/Footer"
import { MyLastWork } from "./MyLastWork/MyLastWork"
import { WhatCanToDo } from "./WhatCanToDo/WhatCanToDo"

export const Page = () => {
    return <div>
        <FirstScreen />
        <AboutMeScreen />
        <WhatCanToDo />
        <MyLastWork />
        <Contacts />
        <Footer />
    </div>
}