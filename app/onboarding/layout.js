'use client';
import React from 'react';
import styles from './styles.module.scss';

export default function RootLayout({ children }) {

  return (
    <div className='h-[100vh] flex'>
      {children}
    </div>
  );
}
