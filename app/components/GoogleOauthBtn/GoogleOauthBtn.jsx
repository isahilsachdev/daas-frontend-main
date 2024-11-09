import Image from 'next/image'
import React from 'react'
import googleIcon from '@/app/assets/images/googleIcon.svg';
import styles from './GoogleOauthBtn.jsx.module.scss';
import Typography from '../design-systems/Typography/Typography';

const GoogleOauthBtn = () => {
  return (
    <div className={styles.oauthBtnContainer}>
      <div className={styles.iconContainer}>
        <Image src={googleIcon} alt='googleIcon' height={16} width={16} />
        <Typography textType='small-regular' text='Continue with Google' />
      </div>
    </div>
  )
}

export default GoogleOauthBtn