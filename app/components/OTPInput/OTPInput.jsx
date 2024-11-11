import React, { useState } from 'react';
import styles from './OTPInput.module.scss';

const OTPInput = ({ length = 6, onChange }) => {
    const [otp, setOtp] = useState(Array(length).fill(''));

    const handleChange = (element, index) => {
        const value = element.value.replace(/[^0-9]/g, '');
        if (value.length > 1) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Notify parent of OTP change
        onChange(newOtp.join(''));

        if (value && index < length - 1) {
            document.getElementById(`otp-${index + 1}`).focus();
        }
    };

    const handleBackspace = (e, index) => {
        if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
            document.getElementById(`otp-${index - 1}`).focus();
        }
    };

    const handlePaste = (e) => {
        const pastedData = e.clipboardData.getData('Text').slice(0, length).replace(/[^0-9]/g, '');
        if (pastedData.length === length) {
            const newOtp = pastedData.split('');
            setOtp(newOtp);
            onChange(newOtp.join('')); // Notify parent of OTP change
            document.getElementById(`otp-${length - 1}`).focus();
        }
    };

    return (
        <div className={styles.container} onPaste={handlePaste}>
            {otp.map((value, index) => (
                <input
                    placeholder='0'
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength="1"
                    value={value}
                    onChange={(e) => handleChange(e.target, index)}
                    onKeyDown={(e) => handleBackspace(e, index)}
                    className={styles.input}
                />
            ))}
        </div>
    );
};

export default OTPInput;
