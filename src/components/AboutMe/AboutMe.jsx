import React from 'react';
import ItsMe from '../../storage/itsMe.jpg'
const AboutMe = () => {
    return (
        <div className='flexx'>
            <div className='whiteblock'>
                <div className='titleText'>
                    <h1>Hello! MY name is Alieva Medina</h1>
                    <div className='imageAvatar'>
                        <span><img className='imageblock' style={{width:'24vw', height:'57vh'}} src={ItsMe} alt="" /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;