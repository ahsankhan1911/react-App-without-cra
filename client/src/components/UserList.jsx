import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';



class UserList extends Component {

    // handleUserchange  () {
    //     this.props.users[0].first = "Ahsan";
    //     console.log(this.props.users)
    // }
    
    render() {
        console.log(this.props);

        return (
            <ul>
            {
                this.props.users.map((d) => {
                    return (
                        <li onClick={() => this.props.selectUser(d)} key={d.id}>{d.first} {d.last}</li>
                    );
                })
            }
            {/* <button onClick={() => this.handleUserchange()}>change user name</button> */}

            </ul>

        );
    }
}

function mapStateToProps (state) {
    return {
        users: state.users
    };
};

function matchDispatchToProps (dispatch) {
    return bindActionCreators({
        selectUser: selectUser
    }, dispatch);

}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);