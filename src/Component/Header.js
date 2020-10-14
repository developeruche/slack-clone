import React from 'react'
import "./Header.css"
import { Avatar } from "@material-ui/core"
import { HelpOutline, Search } from "@material-ui/icons"
import AccessTime from "@material-ui/icons/AccessTime"
import { useStateValue } from './StateManager/StateProvider'

function Header() {
    const [{ user }] = useStateValue()
    return (
        <div className="header">
            <div className="header__left">
                <Avatar
                    className="header__avatar"
                    alt={user?.displayName}
                    src={user?.photoURL} />
                <AccessTime />
            </div>
            <div className="header__search">
                <Search />
                <input placeholder="Search Slack" />
            </div>
            <div className="header__right">
                <HelpOutline />
            </div>
        </div>
    )
}

export default Header