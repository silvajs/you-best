import React, {
    Image,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ToastAndroid,
    Dimensions,
    Animated,
} from 'react-native';
import LoginPage from './LoginPage';

class LoadingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(0)
        };
    }

    componentDidMount() {
        var me = this;
        this.state.bounceValue.setValue(1.5);
        Animated.spring(this.state.bounceValue, {
            toValue: 1,
            friction: 2,
            tension: 40
        }).start(function() {
            me.goLogin();
        });
    }

    render() {
        var {width, height} = Dimensions.get('window');
        var imageStyle = {width: width, height: height, transform: [
            {scale: this.state.bounceValue}
        ]};

        return (
            <Animated.Image source={require('../image/loading_android.png')}
                style={[styles.container, imageStyle]}></Animated.Image>
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
