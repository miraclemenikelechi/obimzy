import React from 'react';
import { Link } from 'react-router-dom';


export const

    Long = ({ to, icon, title, type }) => {
        return (
            <button type={type}>
                {/* <Link to={to}> */}
                    <span>{icon}</span>
                    <span>{title}</span>
                {/* </Link> */}
            </button>
        );
    },

    Short = ({ to, icon, title }) => {
        return (
            <button>
                <Link to={to}>
                    <span>{title}</span>
                    <span>{icon}</span>
                </Link>
            </button>
        );
    };