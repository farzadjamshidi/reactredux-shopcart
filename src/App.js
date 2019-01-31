import React from 'react';
import './App.css';
import Counter from './components/counter';
import NavBar from './components/navbar';
import { connect } from 'react-redux';
import {resetCounters} from './actions/index';
import {
  Container,
  Button
} from 'reactstrap';


const App = ({dispatch, counters}) => {
    return (
      <React.Fragment>
        <NavBar/>
        <Container>
          <div style={{float : 'right'}}>
              {counters.map(counter => 
                  <Counter
                      key = {counter.id}
                      counter={counter}
                  />
              )}
              <Button color="success" className="btn-sm md-2" 
              onClick={()=> dispatch(resetCounters())}>
              ری استارت
              </Button>
                  
          </div>
        </Container>

      </React.Fragment>
    );
}

export default connect (state => {
  return{
    counters : state
  }
}) (App);
