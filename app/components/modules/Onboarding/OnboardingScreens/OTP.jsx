'use client';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import OnboardingFormLayout from '../OnboardingFormLayout/OnboardingFormLayout';
import Typography from '@/app/components/design-systems/Typography/Typography';
import styles from './OnboardingScreens.module.scss';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
// six digit otp
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { Option } from 'lucide-react';
import OTPInput from '@/app/components/OTPInput/OTPInput';

const otpSchema = z.object({
    otp: z.string().email("Please enter a valid email address"),
});

const OTP = () => {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
        setError(''); // Clear error on change
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const result = otpSchema.safeParse({ otp });
        if (!result.success) {
            setError(result.error.errors[0].message); // Display the error message from Zod
        } else {
            setError('');
            // Proceed with the otp logic if email is valid
            console.log("OTP submitted:", otp);
        }
    };

    return (
        <OnboardingFormLayout>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <div className={styles.formHeading}>
                    <Typography textType='h4' text='We sent you a code' />
                </div>
                <div className={styles.formHeading}>
                    <Typography textType='h6' text="Please check your email. Don't see it? Resend" />
                </div>
                <div className={styles.formMiddleContainer}>
                    <div className={styles.OtpInput}>
                        <OTPInput length={6} onComplete={(otp) => console.log('Entered OTP:', otp)} />

                        {error && (
                            <p id="otp-error" className="mt-1 text-sm text-red-600">
                                {error}
                            </p>
                        )}
                    </div>
                    <div className={styles.buttonCombo}>
                        <div className={styles.btnBack}>
                            <Button variant='outline'>Back</Button>
                        </div>
                        <div className={styles.btnContinue}>
                            <Button type="submit" variant='secondary'>Continue</Button>
                        </div>
                    </div>
                </div>
                <div className={styles.formFooter}>
                    <Typography color='#FFFFFF8F' textType='micro-regular' text='By signing up, you agree to out Terms of Use, Privacy Notice and Cookie Notice.' />
                </div>
            </form >
        </OnboardingFormLayout >
    );
}

export default OTP;
