import React from 'react';
import styles from './DividerWithText.module.scss';
import Typography from '../design-systems/Typography/Typography';

const DividerWithText = ({btnText = 'OR'}) => {
  return (
    <div className={styles.textDivider}>
      <div className={styles.dividerLine} />
      <div className={styles.textBox}>
        <Typography textType='micro-regular' text={btnText} />
      </div>
      <div className={styles.dividerLine} />
    </div>
  );
};

export default DividerWithText;