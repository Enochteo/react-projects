import React, { Component, useEffect, useState } from 'react';

const RecipeChoices = ({ handleChange, label, choices, checked }) => {
    return (
        <div className='radio-buttons'>
            {
                choices && 
                choices.map((choice) => (
                    <li key={choice}>
                        <input id={choice} value={choice}
                        type='radio' onChange={handleChange}
                        checked={checked == choice} name={label}/>
                        {choice}
                    </li>
                ))
            }
        </div>
    );
};

export default RecipeChoices;