import * as React from 'react';

import styles = require('./styles.scss');

interface LayoutProps {
  children?: JSX.Element | Array<JSX.Element>;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>Inno GGJ 2020 | Team: Iron soul</header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>Iron soul 2020-presence</footer>
    </div>
  );
};

export default Layout;
