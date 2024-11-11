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
                        <InputOTP
                            maxLength={6}
                            value={otp}
                            onChange={(value) => setOtp(value)}
                            className=""
                        >
                            <InputOTPGroup className="">
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                            </InputOTPGroup>
                        </InputOTP>
                        {error && (
                            <p id="otp-error" className="mt-1 text-sm text-red-600">
                                {error}
                            </p>
                        )}
                    </div>
                    <div className={styles.buttonCombo}>
                        <Button variant='outline'>Back</Button>
                        <Button type="submit" variant='secondary'>Continue</Button>
                    </div>
                </div>
                <div className={styles.formFooter}>
                    <Typography color='#FFFFFF8F' textType='micro-regular' text='By signing up, you agree to out Terms of Use, Privacy Notice and Cookie Notice.' />
                </div>
            </form>
        </OnboardingFormLayout>
    );
}

export default OTP;
