import React, {Component} from 'react';


class App extends Component {
    state = {
        users: []
    }
    componentWillMount () {
       
        fetch(`http://localhost:5000/api/getUsers`).then( (response) => {
           response.json().then(data => {
               this.setState({
                   users : data
               })
           })
        })

    }
    render () {
    
        return (
            <div className="App"> 
                <img src='/images/React-logo.png'/>

                {/* {this.state.users.map( d => {
                    return <div>{d.email}</div>
                })} */}
        </div> );
    }
}

export default App;