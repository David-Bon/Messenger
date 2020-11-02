import React, {useState} from "react";
import "./contacts.scss"
import UsersRender from "./usersRender/usersRender";

const Contacts = ({contactsList, reDirectToLoginPage}) => {
    let [searchValue, setSearchValue] = useState('')
    let copyContactsList = [...contactsList];
    const filtered = copyContactsList.filter(user => user.name.toLowerCase().includes(searchValue))

    return (
        <div>
            <div className="mainSP">
                <button onClick={reDirectToLoginPage} className="exitButton">Sign out</button>
                <input className="searchInput" type="text" placeholder="Search" value={searchValue} onChange={(e) => {
                    setSearchValue(e.target.value)
                }}/>
            </div>
            {
                !searchValue ? UsersRender(copyContactsList) : UsersRender(filtered)
            }
        </div>
    )
}

export default Contacts