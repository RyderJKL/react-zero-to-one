import React from 'react';
import stylesFactory from './style';

export function StitchesStyleDemo({
  fontSize,
  backgroundColor
}: {
  fontSize: number;
  backgroundColor: string;
}) {
  const styles = stylesFactory({ fontSize, backgroundColor });

  return (
    <div className={styles.root()}>
      <span className={styles.img()}>img</span>
    </div>
  );
}

export default React.memo(StitchesStyleDemo);
