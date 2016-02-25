import React, {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
} from 'react-native';
import MyToolbar from '../../component/MyToolbar';
import NoFamilyView from './NoFamilyView';

export default class FamilyListPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let actions = [{title: '添加成员', icon: require('../../image/btn_add_hl.png'), show: 'always'}];
        return (
            <View style={styles.container}>
                <MyToolbar navigator={this.props.navigator}
                    title='选择家庭成员'
                    actions={actions}
                    onActionSelected={this.onAdd.bind(this)}/>
                <NoFamilyView />
            </View>

        );
    }

    onAdd() {
        React.ToastAndroid.show('待完成...', React.ToastAndroid.SHORT);
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',

    },
});
