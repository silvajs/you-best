import React, {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    Dimensions,
    TouchableHighlight,
} from 'react-native';
import IntroducePage from './secondOpinion/IntroducePage';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {width} = Dimensions.get('window');
        return (
            <View style={{flex: 1}}>
                <View style={styles.bar}><Text style={styles.barTitle}>优可信</Text></View>
                <ScrollView>
                    <View style={{backgroundColor: '#ccc'}}>
                        <Image source={require('../image/default_main_banner.png')} style={{ height: 200,width: width}}></Image>
                    </View>
                    <View style={styles.menus}>
                        <View style={styles.menuItem}>
                            <Menu title='第二诊疗意见' subTitle='全球超50,000名顶级医生提供专业级的第二诊疗意见' icon={require('../image/img_2ndopinion.png')}
                                onPress={this.goIntroduce.bind(this)}></Menu>
                            <Menu title='上门体检' subTitle='预约上门体检，您可合理安排时间，免去上医院排长队' icon={require('../image/img_homecheck.png')}></Menu>
                        </View>
                        <View style={styles.menuItem}>
                            <Menu title='电话医生' subTitle='海内外顶级医生为您提供全时段在线，电话问诊服务' icon={require('../image/img_teledoc.png')}></Menu>
                            <Menu title='海外绿色通道' subTitle='提供全球最优质的外海医疗资源，最便捷贴心的陪诊服' icon={require('../image/img_overseagreen.png')}></Menu>
                        </View>
                        <View style={styles.menuItem}>
                            <Menu title='海外体检' subTitle='成熟的海外高端私人健康体检接待模式，细节精益求精' icon={require('../image/img_overseacheck.png')}></Menu>
                            <Menu title='保险销售理赔' subTitle='最优质的产品，最特色的诚信服务保障您及家人的健康' icon={require('../image/img_insurance.png')}></Menu>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }

    goIntroduce() {
        this.props.navigator.push({
            name: 'IntroducePage',
            component: IntroducePage
        });
    }
}

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        icon: require('../image/img_2ndopinion.png'),
        title: '',
        subTitle: '',
        onPress: null
    };

    render() {
        return (
            <TouchableHighlight style={styles.menuTouch} underlayColor="rgb(210, 230, 255)" onPress={this.onPress.bind(this)}>
                <View style={styles.menu}>
                    <Image source={this.props.icon} style={styles.menuIcon}></Image>
                    <Text style={styles.menuTitle}>{this.props.title}</Text>
                    <Text style={styles.menuDesc}>{this.props.subTitle}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    onPress() {
        if (this.props.onPress) {
            requestAnimationFrame(() => {
                this.props.onPress();
            });
        }
    }
}

var styles = StyleSheet.create({
    bar: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    barTitle: {
        fontSize: 20,
        color: '#333'
    },
    menus: {
        marginTop: 10,
    },
    menuItem: {
        marginBottom: 10,
        flexDirection: 'row',
    },
    menuTouch: {
        flex: 1,
        width: 0,
        borderRadius: 5,
    },
    menu: {
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fcfcfc',
    },
    menuIcon: {
        width: 50,
        height: 50,
    },
    menuTitle: {
        color: '#333',
        fontSize: 18,
        marginTop: 5,
        marginBottom: 7,
    },
    menuDesc: {
        fontSize: 12,
        color: '#999999',
        flexDirection: 'column'
    }
});

export default HomePage;
