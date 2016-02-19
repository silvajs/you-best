import React, {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    Dimensions,
    TouchableHighlight,
} from 'react-native';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        console.log(Object.keys(Image.resizeMode).join('   '));
    }

    render() {
        let {width} = Dimensions.get('window');
        console.log(width);
        return (
            <View style={{flex: 1}}>
                <View style={styles.bar}><Text style={styles.barTitle}>优可信</Text></View>
                <ScrollView>
                    <View style={{backgroundColor: '#ccc'}}>
                        <Image source={require('./image/default_main_banner.png')} style={{ height: 200,width: width}}></Image>
                    </View>
                    <View style={styles.menus}>
                        <View style={styles.menuItem}>
                            <TouchableHighlight style={styles.menuTouch} underlayColor="rgb(210, 230, 255)">
                                <View style={styles.menu}>
                                    <Image source={require('./image/img_2ndopinion.png')} style={styles.menuIcon}></Image>
                                    <Text style={styles.menuTitle}>第二诊疗意见</Text>
                                    <Text style={styles.menuDesc}>全球超50,000名顶级医生提供专业级的第二诊疗意见</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.menuTouch} underlayColor="rgb(210, 230, 255)">
                                <View style={styles.menu}>
                                    <Image source={require('./image/img_homecheck.png')} style={styles.menuIcon}></Image>
                                    <Text style={styles.menuTitle}>上门体检</Text>
                                    <Text style={styles.menuDesc}>预约上门体检，您可合理安排时间，免去上医院排长队</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.menuItem}>
                            <TouchableHighlight style={styles.menuTouch} underlayColor="rgb(210, 230, 255)">
                                <View style={styles.menu}>
                                    <Image source={require('./image/img_teledoc.png')} style={styles.menuIcon}></Image>
                                    <Text style={styles.menuTitle}>电话医生</Text>
                                    <Text style={styles.menuDesc}>海内外顶级医生为您提供全时段在线，电话问诊服务</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.menuTouch} underlayColor="rgb(210, 230, 255)">
                                <View style={styles.menu}>
                                    <Image source={require('./image/img_overseagreen.png')} style={styles.menuIcon}></Image>
                                    <Text style={styles.menuTitle}>海外绿色通道</Text>
                                    <Text style={styles.menuDesc}>提供全球最优质的外海医疗资源，最便捷贴心的陪诊服</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.menuItem}>
                            <TouchableHighlight style={styles.menuTouch} underlayColor="rgb(210, 230, 255)">
                                <View style={styles.menu}>
                                    <Image source={require('./image/img_overseacheck.png')} style={styles.menuIcon}></Image>
                                    <Text style={styles.menuTitle}>海外体检</Text>
                                    <Text style={styles.menuDesc}>成熟的海外高端私人健康体检接待模式，细节精益求精</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.menuTouch} underlayColor="rgb(210, 230, 255)">
                                <View style={styles.menu}>
                                    <Image source={require('./image/img_insurance.png')} style={styles.menuIcon}></Image>
                                    <Text style={styles.menuTitle}>保险销售理赔</Text>
                                    <Text style={styles.menuDesc}>最优质的产品，最特色的诚信服务保障您及家人的健康</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
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
