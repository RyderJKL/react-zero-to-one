import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  button: {
    color: 'red',
    fontSize: '16px'
  }
});

function Demo() {
  const classes = useStyle();

  return <div className={classes.button}>button</div>;
}

export default Demo;
