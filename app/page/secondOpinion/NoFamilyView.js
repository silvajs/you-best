import React, {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

export default class NoFamily extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.noFamily}>
                <Image source={require('../../image/img_nofamily.png')} style={styles.noFamilyImage}/>
                <Text style={styles.descption}>暂未添加过家庭成员信息</Text>
                <Text style={styles.tips}>请点击右上角添加家庭成员信息</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    noFamily: {
        alignItems: 'center',
    },
    noFamilyImage: {
        width: 130,
        height: 130,
        marginTop: 40,
    },
    descption: {
        fontSize: 17,
        color: '#333',
        marginTop: 20,
    },
    tips: {
        marginTop: 8,
        fontSize: 12,
        color: 'gray',
    }
});
