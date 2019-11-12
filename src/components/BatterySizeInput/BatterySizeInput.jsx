import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { AiOutlineWarning } from 'react-icons/ai'

const BatterySizeInput = () => {

  const [isValidInput, setIsValidInput] = useState(false);
  const [batterySize, setBatterySize] = useState('');

  const handleClick = () => {
      //inputHandler();
  };

  const isValidBatteryInput = (input) => {
    const intValue = parseInt(input, 10);
    if(!input || !input.length) {
      return false;
    }
    else if (!Number.isInteger(intValue)) {
      return false;
    }
    else if (intValue <= 0) {
      return false;
    }

    return true;
  };


  const handleChange = (event) => {
    setBatterySize(event.target.value);
  };

  useEffect(() => {
    setIsValidInput(isValidBatteryInput(batterySize));
  }, [batterySize]);

  return (
    <div className={styles.batterySizeInputContainer} data-test="batterySizeInput">
      <div className={styles.inputDescription}>
        <p>Skriv inn batteristørrelse i KW:</p>
      </div>
      <input onChange={handleChange}/>
      { batterySize.length > 0 && !isValidInput && (
        <div className={styles.invalidInputContainer}>
          <AiOutlineWarning/>
          <span className={styles.invalidText}>Skriv inn et heltall</span>
        </div>
      )}
    </div>
  );
};

export default BatterySizeInput;
