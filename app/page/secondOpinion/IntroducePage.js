import React, {
    StyleSheet,
    View,
    Text,
    ToolbarAndroid,
    WebView,
    InteractionManager,
} from 'react-native';
import Loading from '../../component/Loading';

class IntroducePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        let actions = [{title: '客服', icon: require('../../image/icon_tel.png'), show: 'always'}];
        return (
            <View style={styles.container}>
                <ToolbarAndroid
                    style={styles.bar}
                    navIcon={require('../../image/btn_back.png')}
                    onIconClicked={()=>{this.props.navigator.pop()}}
                    title='第二诊疗意见'
                    titleColor='#ff5645'
                    actions={actions}
                    onActionSelected={this.onActionSelected.bind(this)}>
                </ToolbarAndroid>
                <WebView
                    ref='webview'
                    source={require('../html/zh/secondOpinion.html')}
                    style={styles.webView}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                    decelerationRate="normal"
                    onShouldStartLoadWithRequest={true}
                    renderLoading={()=>{return <Loading />} }
                    >
                </WebView>
                <View style={styles.footer}></View>
            </View>
        );
    }

    onActionSelected(position) {

    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    bar: {
        height: 52,
        backgroundColor: '#fff',
    },
    webView: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.8)',
    },
    footer: {
        height: 50,
        backgroundColor: 'red'
    }
});

export default IntroducePage;
