import React, {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
} from 'react-native';
import MyToolbar from '../../component/MyToolbar';
import NoFamilyView from './NoFamilyView';
import FamilyAddPage from './FamilyAddPage';

var familyMembers = [];

export default class FamilyListPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let actions = [{title: '添加成员', icon: require('../../image/btn_title_add.png'), show: 'always'}];
        return (
            <View style={styles.container}>
                <MyToolbar navigator={this.props.navigator}
                    title='选择家庭成员'
                    actions={actions}
                    onActionSelected={this.onAdd.bind(this)}/>
                {
                    familyMembers.length === 0
                    ?
                    <NoFamilyView />
                    :
                    <View></View>
                }
            </View>

        );
    }

    onAdd() {
        this.props.navigator.push({
            name: 'FamilyAddPage',
            component: FamilyAddPage
        });
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',

    },
});
