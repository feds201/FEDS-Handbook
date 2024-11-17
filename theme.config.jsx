import React from 'react';
import Chatbot from './pages/Chatbot';

export default {
    logo: (
        <>
            <img
                style={{ borderRadius: '50%', marginTop: '10px' }}
                src="https://i.imgur.com/GmdZ72B.png"
                alt="FEDS201"
                width="30"
                height="30"
            />
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <text>FEDS201's Toolkit</text>
        </>
    ),

    project: {
        link: 'https://github.com/feds201',
    },

    footer: {
        text: (
            <div>
                <span>
                    <a href="https://feds201.com" target="_blank" rel="noopener noreferrer">
                        FEDS201 <span style={{ color: '#888' }}></span>
                    </a>
                    {new Date().getFullYear()} ©{' '}
                    <a href="https://rhs-csclub.vercel.app" target="_blank" rel="noopener noreferrer">
                        CS-Club
                    </a>
                </span>
            </div>
        ),
    },

    nav: [
        {
            title: 'Chatbot',
            href: '/chatbot',
            component: Chatbot,
        },
    ]
};
