import { Component } from 'react';
import authContext from './AutoContext';

export default class AuthProvider extends Component {
  state = {
    user: null,
    logIn: () => {
      this.setState({ user: 'Maks' });
    },
    logOut: () => {
      this.setState({ user: null });
    },
  };

  render() {
    return (
      <authContext.Provider value={this.state}>
        {this.prop.children}
      </authContext.Provider>
    );
  }
}
