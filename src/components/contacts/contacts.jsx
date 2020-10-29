import React, {useState} from "react";
import "./contacts-module.scss"
import UsersRender from "./usersRender/usersRender";

const Contacts = ({contactsList}) => {
    let [searchValue, setSearchValue] = useState('')
    const filtered = contactsList.filter(user => user.name.toLowerCase().includes(searchValue))
    return (
        <div>
            <div className="mainSP">
                <input type="text" value={searchValue} onChange={(e) => {
                    setSearchValue(e.target.value)
                }}/>
            </div>
            {
                !searchValue ? UsersRender(contactsList) : UsersRender(filtered)
            }
        </div>
    )
}

export default Contacts