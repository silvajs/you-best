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

    }

    componentDidMount() {
        this.timer = setTimeout(function() {
            this.goLogin();
        }.bind(this), 1000)
    }

    componentWillMount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        var {width, height} = Dimensions.get('window');
        return (
            <Image source={require('../image/loading_android.png')} style={[styles.container, {width: width, height: height}]}>
            </Image>
        )
    }

    goLogin() {
        let {navigator} = this.props;
        if (navigator) {
            navigator.replace({
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
