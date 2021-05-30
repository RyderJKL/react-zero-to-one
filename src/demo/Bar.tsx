import React, { Component } from 'react';
import withStyles, { createUseStyles, WithStylesProps } from 'react-jss';
import clsx from 'clsx';
import Styles from './Bar.module.scss';

const styles = {
  bar: {
    font: '26px',
    color: 'green',
    '&:hover': {
      cursor: 'pointer'
    }
  }
};

export interface Props extends WithStylesProps<typeof styles> {
  title?: string;
}

class Bar extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return <div className={clsx(classes.bar, Styles.bar)}>bar</div>;
  }
}

export default withStyles(styles)(Bar);
