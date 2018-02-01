import React from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions/index';

function Counter(props) {
  const { incCounter, decCounter } = props;
  return (
    <div>
      <p>The counter value is :{props.counter}</p>
      <button onClick={incCounter}>Increment</button>
      <button onClick={decCounter}>Decrement</button>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    incCounter: () => dispatch(incrementCounter()),
    decCounter: () => dispatch(decrementCounter()),
  };
}

// export default connect(mapStateToProps,mapDispatchToProps)(Counterr);
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
