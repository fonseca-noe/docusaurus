import React from 'react';
import TOCComponent from '@theme-original/TOC';
import styles from './styles.module.css';

export default function TOCWrapper(props) {
  return (
    <div className={styles.toc}>
      <TOCComponent {...props} />
    </div>
  );
}