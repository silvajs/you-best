import React, {
    StyleSheet,
    View,
    Text,
    ToolbarAndroid,
    WebView,
    InteractionManager,
} from 'react-native';
import Loading from '../../component/Loading';
import MyToolbar from '../../component/MyToolbar';
import {ButtonDefault, ButtonPrimary} from '../../component/Button';
import PurchaseInfoPage from './PurchaseInfoPage';

class IntroducePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startLoadWeb: false
        };
    }

    componentDidMount() {

    }

    render() {
        let actions = [{title: '客服', icon: require('../../image/icon_tel.png'), show: 'always'}];
        return (
            <View style={styles.container}>
                <MyToolbar
                    navigator={this.props.navigator}
                    title='第二诊疗意见'
                    actions={actions}
                    onActionSelected={this.onActionSelected.bind(this)}>
                </MyToolbar>
                <View style={styles.webView}>
                    <WebView
                        ref='webview'
                        source={require('../html/zh/secondOpinion.html')}
                        style={styles.webView}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        startInLoadingState={true}
                        scalesPageToFit={true}
                        renderLoading={()=>{return <Loading />} }
                        >
                    </WebView>
                </View>
                <View style={styles.footer}>
                    <View style={styles.cell}><ButtonDefault onPress={this.goPurchase.bind(this)}>现在购买</ButtonDefault></View>
                    <View style={styles.cell}><ButtonPrimary>开始第二意见</ButtonPrimary></View>
                </View>
            </View>
        );
    }

    onActionSelected(position) {

    }

    goPurchase() {
        this.props.navigator.push({
            component: PurchaseInfoPage,
            name: 'PurchaseInfoPage'
        });
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    webView: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.8)',
    },
    footer: {
        height: 52,
        paddingHorizontal: 3,
        flexDirection: 'row',
    },
    cell: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 3,
    }
});

export default IntroducePage;
