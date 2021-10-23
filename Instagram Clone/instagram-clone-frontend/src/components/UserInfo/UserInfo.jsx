import React from 'react'
import {Avatar} from '@mui/material'
import PP from '../../img/pp1.png'
import './UserInfo.css'

function UserInfo() {
    return (
        <div className="userinfo-container">
            <Avatar className="userinfo-image" src={PP} />
            <div>
                <div className="userinfo-username">gayankod</div>
                <div className="userinfo-description">Gayan Kodithuwakku</div>
            </div>
        </div>
    )
}

export default UserInfo
