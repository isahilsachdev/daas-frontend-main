'use client';

import React from 'react';

import styles from './styles.module.scss';
import Signup from '../components/modules/Onboarding/Signup/Signup';
import OnboardingHeader from '../components/modules/Onboarding/OnboardingHeader/OnboardingHeader';

const OnboardingSignup = () => {
  return (
    <div className={styles.onboardingLandingPage}>
      <div className={styles.headerContainer}>
        <OnboardingHeader />
      </div>
      <div>
        {/* <Signup /> */}
      </div>
    </div>
  );
};

export default OnboardingSignup;