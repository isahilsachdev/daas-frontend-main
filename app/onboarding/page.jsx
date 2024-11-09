'use client';

import React from 'react';

import styles from './styles.module.scss';
import Signup from '../components/modules/Onboarding/Signup/Signup';

const Onboarding = () => {
  return (
    <div className={styles.onboardingLandingPage}>
      <div className={styles.signupContainer}>
        <Signup />
      </div>
    </div>
  );
};

export default Onboarding;