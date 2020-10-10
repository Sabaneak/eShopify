import React, { Component } from 'react';

// Images Import
import phone from './Assets/phone_group.jpg';
import laptop from './Assets/laptop.jpg';
import cricket from './Assets/cricket.jpg';
import shirts from './Assets/shirts.jpg';
import sofas from './Assets/sofa.jpg';

// Slideshow import
var Coverflow = require('react-coverflow');

const Slideshow = () => {
        return (
            <div style={{marginBottom:'2%'}}>
                <Coverflow
                        displayQuantityOfSide={5}
                        navigation={true}
                        enableHeading={true}
                        infiniteScroll
                        media={{
                            '@media (max-width: 900px)': {
                            width: '800px',
                            height: '200px',
                            borderRadius:'50px'
                            },
                            '@media (min-width: 900px)': {
                            width: '650px',
                            height: '200px',
                            borderRadius:'50px'
                            }
                        }}
                    > 

                    <img
                        src={cricket}
                        alt='Cricket'
                        style={{ display: 'block', width: '100%' }}
                    />

                    <img
                        src={laptop}
                        alt='Laptop'
                        style={{ display: 'block', width: '100%' }}
                    />

                    <img
                        src={phone}
                        alt='Phone'
                        style={{ display: 'block', width: '100%' }}
                    />

                    <img
                        src={shirts}
                        alt='Shirts'
                        style={{ display: 'block', width: '100%' }}
                    />

                    <img
                        src={sofas}
                        alt='Sofas'
                        style={{ display: 'block', width: '100%' }}
                    />

                </Coverflow>
            </div>
        )
    }

export default Slideshow;
