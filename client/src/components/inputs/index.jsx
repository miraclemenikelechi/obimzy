import React from 'react';

export const

    Text = ({ type, name, title, onChange }) => {
        return (
            <section className='input-wrapper'>
                <input
                    type={type}
                    name={name}
                    placeholder={title}
                    onChange={onChange}
                />
            </section>
        );
    };