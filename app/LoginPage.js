import React, {
    StyleSheet,
    View,
    Text,
    Image,
    ToolbarAndroid,
    ToastAndroid,
    TextInput,
    TouchableHighlight,
} from 'react-native';
import HomePage from './HomePage';

var actions = [{
    title: 'Close',
    icon: require('./image/btn_close.png'),
    show: 'always',
    showWithText: true
}];

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginText: '登录'
        };
    }

    render() {

        return (
            <View style={styles.container}>
                <ToolbarAndroid style={styles.toolbar}
                    //title="欢迎来到优可信"
                    actions={actions}
                    contentInsetEnd={100}
                    onActionSelected={this.onActionSelected.bind(this)} >
                    <View style={styles.title}><Text style={{fontSize: 20}}>欢迎来到优可信</Text></View>
                </ToolbarAndroid>
                <View style={styles.form}>
                    <TextInput style={styles.input} placeholder='手机号' keyboardType='numeric'></TextInput>
                    <TextInput style={styles.input} placeholder='密码' keyboardType='email-address'></TextInput>
                    <TouchableHighlight onPress={this.login.bind(this)} underlayColor='#fff'>
                        <View style={styles.btn}><Text style={styles.btntext}>{this.state.loginText}</Text></View>
                    </TouchableHighlight>
                    <View style={styles.help}>
                        <Text>忘记密码</Text>
                        <Text>手机快速登录</Text>
                    </View>
                </View>
                <View style={styles.footer}><Text style={styles.signup}>我要注册</Text></View>
            </View>
        );
    }

    onActionSelected(position) {
        let {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'HomePage',
                component: HomePage
            });
        }
    }

    login() {
        ToastAndroid.show('登录中...', ToastAndroid.SHORT);
        this.setState({
            loginText: '登录中...'
        });
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    toolbar: {
        backgroundColor: '#e9eaed',
        height: 56,
        justifyContent: 'center'
    },
    title: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        marginHorizontal: 30,
        marginTop: 20
    },
    input: {
        borderBottomWidth: 4,
        borderBottomColor: '#ff5645',
        borderColor: '#ff5645',
    },
    btn: {
        backgroundColor: '#ff5645',
        marginTop: 30,
        marginHorizontal: 3,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btntext: {
        color: '#fff',
        fontSize: 18,
    },
    help: {
        marginHorizontal: 3,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footer: {
        position: 'absolute',
        bottom: 35,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signup: {
        color: '#ff5645',
        fontSize: 18,
    }
});

export default LoginPage;
