import React, { useState } from 'react';
import styles from './styles.module.scss';
import UsageInput from "../UsageInput/UsageInput";
import BatterySizeInput from "../BatterySizeInput/BatterySizeInput";

const UsageList = () => {
    const [usage, setUsage] = useState([]);

    const addUsage = (input) => {
      setUsage([...usage, input]);
    };

    return (
        <div className={styles.usageListContainer}>
            <h3>Forbruk</h3>
          <BatterySizeInput inputHandler={addUsage} />
            <UsageInput inputHandler={addUsage}/>
            { usage.map((usageItem) => (<p>{usageItem}</p>))}
        </div>
    );

};

export default UsageList;
