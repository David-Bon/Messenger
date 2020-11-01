import React, {useState} from "react";
import "./contacts.scss"
import UsersRender from "./usersRender/usersRender";

const Contacts = ({contactsList}) => {
    let [searchValue, setSearchValue] = useState('')
    const filtered = contactsList.filter(user => user.name.toLowerCase().includes(searchValue))
    //   contactsList.map((user) => {
    //     const {messagesData, id} = user;
    //     const lastUserProps = (property) => {
    //         const lastMessageIdx = messagesData.length - 1;
    //         return messagesData[lastMessageIdx][`${property}`]
    //     }
    //       const lastMessageIdx = messagesData.messDate.length -1;
    //       if(lastUserProps('messDate')[id]>lastUserProps('messDate')[id+1]){
    //      console.log(lastUserProps('messDate'))
    //       }
    //
    // })
    return (
        <div>
            <div className="mainSP">
                <input className="searchInput" type="text" placeholder="Search" value={searchValue} onChange={(e) => {
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