'use client';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import OnboardingFormLayout from '../OnboardingFormLayout/OnboardingFormLayout';
import Typography from '@/app/components/design-systems/Typography/Typography';
import styles from './OnboardingScreens.module.scss';
import { z } from 'zod';
import OTPInput from '@/app/components/OTPInput/OTPInput';
import { useRouter } from 'next/navigation';

// Zod schema for 6-digit numeric OTP
const otpSchema = z.object({
    otp: z.string()
        .length(6, "OTP must be exactly 6 digits")
        .regex(/^\d+$/, "OTP must contain only numbers"),
});

const OTP = () => {
    const router = useRouter();
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');

    // Update OTP state on each input change
    const handleOtpChange = (currentOtp) => {
        setOtp(currentOtp);
        setError('');  // Clear error on each change
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const result = otpSchema.safeParse({ otp });
        if (!result.success) {
            setError(result.error.errors[0].message);
        } else {
            setError('');
            console.log("OTP submitted:", otp);
            
        }
    };

    const handleBackClick = (e) => {
        e.preventDefault(); // Prevent form submission
        router.push("/signup");
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
                        <OTPInput length={6} onChange={handleOtpChange} />

                        {error && (
                            <p id="otp-error" className="mt-1 text-sm text-red-600">
                                {error}
                            </p>
                        )}
                    </div>
                    <div className={styles.buttonCombo}>
                        <div className={styles.btnBack}>
                            <Button variant='outline' onClick={handleBackClick}>Back</Button>
                        </div>
                        <div className={styles.btnContinue}>
                            <Button type="submit" variant='secondary'>Continue</Button>
                        </div>
                    </div>
                </div>
                <div className={styles.formFooter}>
                    <Typography color='#FFFFFF8F' textType='micro-regular' text='By signing up, you agree to our Terms of Use, Privacy Notice, and Cookie Notice.' />
                </div>
            </form>
        </OnboardingFormLayout>
    );
};

export default OTP;
