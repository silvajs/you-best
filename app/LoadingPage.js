import React, {
    Image,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ToastAndroid
} from 'react-native';
import LoginPage from './LoginPage';

class LoadingPage extends React.Component {
    constructor(props) {
        super(props);
        setTimeout(function() {
            // ToastAndroid.show('This is a toast with short duration', ToastAndroid.SHORT);
            this.goLogin();
        }.bind(this), 1000)
    }

    render() {
        return (
            <Image source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}} style={styles.container}>

            </Image>
        )
    }

    goLogin() {
        let {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'LoginPage',
                component: LoginPage
            });
        }
    };
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default LoadingPage;
