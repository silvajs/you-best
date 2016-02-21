import React, {
    StyleSheet,
    View,
    Text,
    ViewPagerAndroid,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';
import HomePage from './HomePage';

class TabPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ViewPagerAndroid style={styles.container} ref={viewPager => { this.viewPager = viewPager; }}
                    initialPage={this.state.page}
                    onPageSelected ={this.onPageSelected.bind(this)}>
                    <View><HomePage {...this.props}></HomePage></View>
                    <View><Text>First2</Text></View>
                    <View><Text>First3</Text></View>
                </ViewPagerAndroid>
                <View style={styles.tab}>
                    <TouchableWithoutFeedback onPress={this.goPage(0)}>
                        <View style={styles.tabItem}>
                            <Image source={this.state.page === 0 ? require('../image/tab_home_focus.png') : require('../image/tab_home.png')} style={styles.tabIcon}></Image>
                            <Text style={[styles.tabTitle, this.state.page === 0 ? styles.tabTitleActive : {}]}>首页</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.goPage(1)}>
                        <View style={styles.tabItem}>
                            <Image source={this.state.page === 1 ? require('../image/tab_notify_focus.png') : require('../image/tab_notify.png')} style={styles.tabIcon}></Image>
                            <Text  style={[styles.tabTitle, this.state.page === 1 ? styles.tabTitleActive : {}]}>消息</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.goPage(2)}>
                        <View style={styles.tabItem}>
                            <Image source={this.state.page === 2 ? require('../image/tab_me_focus.png') : require('../image/tab_me.png')} style={styles.tabIcon}></Image>
                            <Text  style={[styles.tabTitle, this.state.page === 2 ? styles.tabTitleActive : {}]}>个人中心</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }

    onPageSelected(e) {
        this.setState({
            page: e.nativeEvent.position
        });
    }

    goPage(pageIndex) {
        return () => {
            this.viewPager.setPageWithoutAnimation(pageIndex);
            this.setState({
                page: pageIndex
            });
        }
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    tab: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#f5f5f5',
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    tabIcon: {
        width: 26,
        height: 26,
    },
    tabTitle: {
        fontSize: 12
    },
    tabTitleActive: {
        color: '#ff5645'
    }
});

export default TabPage;
