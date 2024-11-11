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

const KnowYourScreen = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [linkedIn, setLinkedIn] = useState("")
    const [name, SetName] = useState("")
    const [role, setRole] = useState("")

    const handleUrlChange = (e) => {
        setEmail(e.target.value);
        setError(''); // Clear error on change
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const result = emailSchema.safeParse({ email });
        if (!result.success) {
            setError(result.error.errors[0].message); // Display the error message from Zod
        } else {
            setError('');
            // Proceed with the KnowYourScreen logic if email is valid
            console.log("Email submitted:", email);
        }
    };

    return (
        <OnboardingFormLayout>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <div className={styles.formHeading}>
                    <Typography textType='h4' text="Let’s get to know you" />
                </div>
                <div>
                    <Typography textType='' align="center" text="Tell us about yourself, we’ll add this to your profile." />
                </div>
                <div className={styles.formMiddleContainer}>
                    <div>
                        <Label htmlFor="linkedIn">What’s your Linkedin?</Label>
                        <Input
                            type="linkedIn"
                            id="linkedIn"
                            placeholder=""
                            value={linkedIn}
                            onChange={handleUrlChange}
                            aria-invalid={!!error}
                            aria-describedby="url-error"
                        />
                        {error && (
                            <p id="url-error" className="mt-1 text-sm text-red-600">
                                {error}
                            </p>
                        )}
                        <Label htmlFor="linkedIn">What’s your name?</Label>
                        <Input
                            type="name"
                            id="name"
                            placeholder=""
                            value={name}
                            onChange={handleUrlChange}
                            aria-invalid={!!error}
                            aria-describedby="name-error"
                        />
                        {error && (
                            <p id="name-error" className="mt-1 text-sm text-red-600">
                                {error}
                            </p>
                        )}
                        <Label htmlFor="linkedIn">What’s your role?</Label>
                        <Input
                            type="role"
                            id="role"
                            placeholder=""
                            value={role}
                            onChange={handleUrlChange}
                            aria-invalid={!!error}
                            aria-describedby="role-error"
                        />
                        {error && (
                            <p id="role-error" className="mt-1 text-sm text-red-600">
                                {error}
                            </p>
                        )}
                    </div>
                    <div>
                        <Button type="submit" variant='secondary'>Continue</Button>
                    </div>
                </div>
            </form>
        </OnboardingFormLayout>
    );
}

export default KnowYourScreen;
