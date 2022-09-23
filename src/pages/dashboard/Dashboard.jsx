import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material'

import CopyRight from '../../components/pure/CopyRight';
import MenuListItems from '../../components/pure/MenuListItems';

const Dashboard = () => {

    const navigate = useNavigate()

    const logout = () => {
        navigate('/login')
    }

    const list = [
        {text: 'HOME', icon: 'HOME', path:'/dashboard'},
        {text: 'SETT', icon: 'SETTINGS', path:'/dashboard'},
        {text: 'TASKs', icon: 'TASKS', path:'/dashboard'},
        {text: 'LERO', icon: 'OTHER', path:'/dashboard'}
    ]

    return (
        <div>
            <Button variant="contained" onClick={logout}>Log out</Button>
            <MenuListItems list={list}/>
            <CopyRight/>
        </div>
    );
}

export default Dashboard;
