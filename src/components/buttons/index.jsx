import React from 'react';
import { Link } from 'react-router-dom';


export const

    Long = ({ to, icon, title, type }) => {
        return (
            <button type={type}>
                {/* <Link to={to}> */}
                {icon && <span>{icon}</span>}
                {title && <span>{title}</span>}
                {/* </Link> */}
            </button>
        );
    },

    Short = ({ to, icon, title }) => {
        return (
            <button>
                <Link to={to}>
                    {title && <span>{title}</span>}
                    {icon && <span>{icon}</span>}
                </Link>
            </button>
        );
    };