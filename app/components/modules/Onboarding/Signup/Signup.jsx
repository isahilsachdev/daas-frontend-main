'use client';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import OnboardingFormLayout from '../OnboardingFormLayout/OnboardingFormLayout';
import Typography from '@/app/components/design-systems/Typography/Typography';
import styles from './Signup.module.scss';
import GoogleOauthBtn from '@/app/components/GoogleOauthBtn/GoogleOauthBtn';
import DividerWithText from '@/app/components/DividerWithText/DividerWithText';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { z } from 'zod';

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const Signup = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
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
      // Proceed with the signup logic if email is valid
      console.log("Email submitted:", email);
    }
  };

  return (
    <OnboardingFormLayout>
      <form onSubmit={handleSubmit} className={styles.signupContainer}>
        <div className={styles.signupHeading}>
          <Typography textType='h4' text='Sign up for free' />
        </div>
        <div className={styles.signupMiddleContainer}>
          <GoogleOauthBtn />
          <div>
            <DividerWithText />
          </div>
          <div>
            <Label htmlFor="email">Work email</Label>
            <Input
              type="email"
              id="email"
              placeholder=""
              value={email}
              onChange={handleEmailChange}
              aria-invalid={!!error}
              aria-describedby="email-error"
            />
            {error && (
              <p id="email-error" className="mt-1 text-sm text-red-600">
                {error}
              </p>
            )}
          </div>
          <div>
            <Button type="submit" variant='secondary'>Create account</Button>
          </div>
        </div>
        <div className={styles.signupFooter}>
          <div>
            <Typography textType='small-regular' text='Already have an account?' />
          </div>
          <div>
            <Typography textType='small-regular' text='Sign in' />
          </div>
        </div>
      </form>
    </OnboardingFormLayout>
  );
}

export default Signup;
