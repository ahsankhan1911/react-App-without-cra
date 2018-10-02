import React, { Component } from 'react';
import UserList from './components/UserList.jsx';
import UserDetails from './components/UserDetails.jsx';

class App extends Component {

    render() {

        return (
            <div className="App">
                 <h2>Username List</h2>
                 <UserList/>
                 <hr/>
                 <h2>User Details</h2>
                 <UserDetails/>
            </div>

        );
    }
}

export default App;