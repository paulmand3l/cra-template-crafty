import React from 'react';
import styles from './App.module.scss';

interface AppProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode
};

const App = (props: AppProps) => {
  const {children, ...rest} = props;
  return (
    <div className={styles.App} {...rest}>
      {children}
    </div>
  );
};

export default App;
