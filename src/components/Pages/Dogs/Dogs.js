import React, { Component } from 'react';
import {fetchDog} from '../../../store/dogs/actions'
import {connect} from 'react-redux';



const ConnectedApp = (state) => {
  console.log(state);
  return state.dogs;
};


class DogsApp extends Component {

    render () {
        return (
              <div>
                <button onClick={() => this.props.dispatch(fetchDog())}>Show Dog</button>
                  {this.props.loading
                    ? <p>Loading...</p>
                    : this.props.error
                        ? <p>Error, try again</p>
                        : <p><img src={this.props.url}/></p>}
              </div>
        )
        }
}

export default connect(ConnectedApp)(DogsApp);