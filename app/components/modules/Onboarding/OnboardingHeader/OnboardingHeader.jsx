import React from 'react';
import styles from './OnboardingHeader.module.scss';
import shuumLogoWithText from '@/app/assets/images/shuumLogoWithText.svg';
import Image from 'next/image';

const OnboardingHeader = () => {
  return (
    <div className={styles.header}>
      <Image src={shuumLogoWithText} alt='shuumLogoWithText' />
    </div>
  );
};

export default OnboardingHeader;