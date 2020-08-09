import React from 'react';
import Container from '@material-ui/core/Container';
import Routes from '../routes';
import Navigation from '../navigation';
import styles from './styles.js'

const MainTheme = () => {

  return (
    <>
      <Navigation />
      <Container
        style={styles.mainContainer}
      >
        <Routes/>
      </Container>
    </>
  );
}

export default MainTheme;
