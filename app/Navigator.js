import React, {
    Navigator,
    BackAndroid,
    Alert
} from 'react-native';
import LoadingPage from './page/LoadingPage';
import TabPage from './page/TabPage';
import IntroducePage from './page/secondOpinion/IntroducePage';

class NavigatorComponent extends React.Component {

    constructor(props) {
        super(props);
        var me = this;
        BackAndroid.addEventListener('hardwareBackPress', function() {
            if (!me.onMainScreen()) {
                me.goBack();
                return true;
            }
            Alert.alert('退出', '确定要退出吗？', [{
                text: '取消'
            }, {
                text: '确定', onPress: () => {
                    BackAndroid.exitApp();
                }
            }])
            return true;
        });
    }

    render() {
        return (
            <Navigator ref='nav'
                initialRoute = {{name: 'loadingPage', component: IntroducePage, index: 0}}
                configureScene = {(route, routeStack) => {
                    console.log(route);
                    let animate = route.animate;
                    return animate || Navigator.SceneConfigs.FloatFromRight;
                }}
                renderScene = {(route, navigator) => {
                    let Component = route.component;
                    this.route = route;
                    this.navigator = navigator;
                    return <Component {...route.params} navigator={navigator} ></Component>
                }}
            />
        )
    }

    onMainScreen() {
        return this.route.name === 'loadingPage' || this.route.name === 'LoginPage';
    }

    goBack() {
        this.navigator.pop();
    }
}

export default NavigatorComponent;
