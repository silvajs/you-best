import React, {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    Dimensions,
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
                        <View style={styles.menu}></View>
                        <View style={styles.menu}></View>
                        <View style={styles.menu}></View>
                        <View style={styles.menu}></View>
                        <View style={styles.menu}></View>
                        <View style={styles.menu}></View>
                        <View style={styles.menu}></View>
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
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    menu: {
        width: 150,
        height: 150,
        backgroundColor: '#ccc',
        borderColor: 'red',
        borderWidth: 1
    }
});

export default HomePage;
