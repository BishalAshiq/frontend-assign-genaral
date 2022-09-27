import React from 'react';
import { Button } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import './ActivePageOne.css';

const ActivePageOne = () => {
    return (
        <div className='activePageOne'>
            <div className='activePage-header'>
            <ArrowLeft color="black" size={40} />
            <Button variant='dark'>Save</Button>
            </div>
        </div>
    );
};

export default ActivePageOne;