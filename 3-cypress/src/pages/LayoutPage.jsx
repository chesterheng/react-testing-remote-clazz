import React from 'react';
import { Route, Switch} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import MainPage from './MainPage';
import DetailsPage from './DetailsPage';
import NotFoundPage from './NotFoundPage';

const LayoutPage = () => {
  return (      
    <Container>
      <Header />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/movie/:id' component={DetailsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Container>
  )
}

export default LayoutPage;
