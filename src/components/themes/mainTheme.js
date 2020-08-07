import React from 'react';
import Container from '@material-ui/core/Container';
import Routes from '../routes';

const MainTheme = () => {

  return (
    <>
      {/* Navbar*/}
      <Container className={'enterprise'}>
        <Routes/>
      </Container>
    </>
  );
}

export default MainTheme;
