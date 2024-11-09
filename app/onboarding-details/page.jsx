'use client';

import React from 'react';

import styles from './styles.module.scss';
import OnboardingHeader from '../components/modules/Onboarding/OnboardingHeader/OnboardingHeader';
import OTP from '../components/modules/Onboarding/OnboardingScreens/OTP';

const onboardingDetails = () => {
  return (
    <div className={styles.onboardingLandingPage}>
      <div className={styles.headerContainer}>
        <OnboardingHeader />
      </div>
      <div>
        <OTP />
      </div>
    </div>
  );
};

export default onboardingDetails;