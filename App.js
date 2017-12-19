 
import React, {	Component } from 'react'
import { Provider , connect } from 'react-redux'
import configureStore from './project/store/index'
import { addNavigationHelpers , StackNavigator } from 'react-navigation';
import  { AppNavigator }  from './project/router/index.js'
 

const navReducer = (state , action) => {
  
  const nextState = AppNavigator.router.getStateForAction(action, state);
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
  
};


 
class Apps extends React.Component {
  
  render() {
   
    const navigation=addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,

        
      })
      const {data} = this.props
    return (
      <AppNavigator navigation={navigation} screenProps={{test:data?data:0} }
       />
    );
  }
}

 


const mapStateToProps = (state) => ({
    nav:state.nav,
    data:state.Home.toJS().data

});

const AppWithNavigationState = connect(mapStateToProps)(Apps);
const store = configureStore(navReducer)


class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
       
    )
  }
}

export default App