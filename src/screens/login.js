import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import * as Actions from '../actions/actions';

import { connect } from 'react-redux';

export class LoginApp extends Component  {

    constructor(props) {
        super(props)
    }

    render() {
        return <View>
            <Button
                onPress={this.props.login}
                title="Login"
                color="#841584"
                accessibilityLabel="Login"
            />

            <Text>{this.props.isLogged}</Text>
            <Text>Count: {this.props.count}</Text>
            <Button
                onPress={this.props.logout}
                title="Logout"
                color="#841584"
                accessibilityLabel="Logout"
            />
        </View>
    }

}

const mapStateToProps = (state) => {
    console.debug('CCCCCCCCCCCCCCCCCCCCCCCCCCC ' + JSON.stringify(state))
    return {
    isLogged: state.loginReducer.isLoggedIn
}};

const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(Actions.LOGGED_IN()),
    logout: () => dispatch(Actions.LOGGED_OUT()),
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginApp);

