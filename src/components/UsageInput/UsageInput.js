import React, { useState } from 'react';
import styles from './styles.module.scss';

const UsageInput = ({ inputHandler }) => {
    const [usage, setUsage] = useState(null);

    const handleChange = (event) => {
        setUsage(event.target.value);
    };

    const addUsage = () => {
        console.log('clikde');
        if (usage) {
            inputHandler(usage);
        }
    };

    return (
        <div className={styles.usageInputContainer}>
            <p>{usage}</p>
            <input type='number' onChange={handleChange}/>
            <button onClick={addUsage}>Legg til</button>
        </div>
    );
};

export default UsageInput;