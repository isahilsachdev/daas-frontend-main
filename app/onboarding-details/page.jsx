'use client';

import React from 'react';

import styles from './styles.module.scss';
import OnboardingHeader from '../components/modules/Onboarding/OnboardingHeader/OnboardingHeader';
import OTP from '../components/modules/Onboarding/OnboardingScreens/OTP';
import KnowYourScreen from '../components/modules/Onboarding/OnboardingScreens/KnowYouScreen';
import VerifyingAccountScreen from '../components/modules/Onboarding/OnboardingScreens/VerifyingAccountScreen';

const onboardingDetails = () => {
  return (
    <div className={styles.onboardingLandingPage}>
      <div className={styles.headerContainer}>
        <OnboardingHeader />
      </div>
      <div>
        <OTP />
        {/* <KnowYourScreen/> */}
        {/* <VerifyingAccountScreen/> */}
      </div>
    </div>
  );
};

export default onboardingDetails;