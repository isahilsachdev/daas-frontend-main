'use client';

import React from 'react';

import styles from './styles.module.scss';
import OnboardingHeader from '../components/modules/Onboarding/OnboardingHeader/OnboardingHeader';
import Login from '../components/modules/Onboarding/Login/Login';

const OnboardingSignup = () => {
  return (
    <div className={styles.onboardingLandingPage}>
      <div className={styles.headerContainer}>
        <OnboardingHeader />
      </div>
      <div>
        <Login />
      </div>
    </div>
  );
};

export default OnboardingSignup;