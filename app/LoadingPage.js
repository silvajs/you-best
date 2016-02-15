import React, {
    Image,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ToastAndroid,
    Dimensions
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
        var {width, height} = Dimensions.get('window');
        return (
            <Image source={require('./image/loading_android.png')} style={[styles.container, {width: width, height: height}]}>
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
    },
});

export default LoadingPage;
