import React, { useState } from 'react';
import styles from './OTPInput.module.scss';

const OTPInput = ({ length = 6, onComplete }) => {
    const [otp, setOtp] = useState(Array(length).fill(''));

    const handleChange = (element, index) => {
        const value = element.value.replace(/[^0-9]/g, '');
        if (value.length > 1) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < length - 1) {
            document.getElementById(`otp-${index + 1}`).focus();
        }

        if (newOtp.every((digit) => digit !== '')) {
            onComplete(newOtp.join(''));
        }
    };

    const handleBackspace = (e, index) => {
        if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
            document.getElementById(`otp-${index - 1}`).focus();
        }
    };

    return (
        <div className={styles.container}>
            {otp.map((_, index) => (
                <input
                    placeholder='0'
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength="1"
                    value={otp[index]}
                    onChange={(e) => handleChange(e.target, index)}
                    onKeyDown={(e) => handleBackspace(e, index)}
                    className={styles.input}
                />
            ))}
        </div>
    );
};

export default OTPInput;
