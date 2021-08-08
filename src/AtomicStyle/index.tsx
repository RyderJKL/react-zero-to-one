import React from 'react';
import { themeClass, hero } from './styles.css';

export default function AtomicStyles() {
  return (
    <div className={themeClass}>
      <span className={hero}>jack</span>
    </div>
  );
}

// export default React.memo(AtomicStyles);
