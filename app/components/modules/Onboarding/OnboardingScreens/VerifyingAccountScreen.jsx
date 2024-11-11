'use client';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import OnboardingFormLayout from '../OnboardingFormLayout/OnboardingFormLayout';
import Typography from '@/app/components/design-systems/Typography/Typography';
import styles from '../Signup/Signup.module.scss';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { z } from 'zod';

const emailSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
});

const VerifyingAccountScreen = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const result = emailSchema.safeParse({ email });
        if (!result.success) {
            setError(result.error.errors[0].message); // Display the error message from Zod
        } else {
            setError('');
            // Proceed with the VerifyingAccountScreen logic if email is valid
            console.log("Email submitted:", email);
        }
    };

    return (
        <OnboardingFormLayout>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <div className={styles.formHeading}>
                    <Typography textType='h4' text="We're currently verifying your account" />
                </div>
                <div>
                    <Typography textType='' align="center" text="To maintain a healthy ecosystem of cleantech partners, we're currently verifying every new user. You'll hear from us soon, or expedite your entry by scheduling a call." />
                </div>
                <div className={styles.formMiddleContainer}>
                    <div>
                        <Button type="submit" variant='secondary'>Schedule an intro call</Button>
                    </div>
                </div>
            </form>
        </OnboardingFormLayout>
    );
}

export default VerifyingAccountScreen;
