import React, {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
    ScrollView,
    AsyncStorage,
    Picker,
} from 'react-native';
import MyToolbar from '../../component/MyToolbar';
import NoFamilyView from './NoFamilyView';
import FamilyAddPage from './FamilyAddPage';
import FormGroup from '../../component/FormGroup';

export default class FamilyListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            families: [],
            selectedItem: -1
        }
    }

    componentWillMount() {
        this.getFamilies();
    }

    componentWillReceiveProps() {
        this.getFamilies();
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        let actions = [{title: '添加成员', icon: require('../../image/btn_title_add.png'), show: 'always'}];
        let familyView = this.state.families.map(function(family, i) {
            var title = family.name + ' - ' + family.relation.name;
            return <FormGroup key={i} title={title} hasArrow={false}
                        checked={this.state.selectedItem === i}
                        onPress={this.selectFamily.bind(this, i)}
                        onLongPress={this.showEdit.bind(this)}></FormGroup>;
        }.bind(this));
        return (
            <View style={styles.container}>
                <MyToolbar navigator={this.props.navigator}
                    title='选择家庭成员'
                    actions={actions}
                    onActionSelected={this.onAdd.bind(this)}/>
                {
                    this.state.families.length === 0
                    ?
                    <NoFamilyView />
                    :
                    <ScrollView style={{backgroundColor: '#f7f7f7'}}>
                        <View style={styles.familyList}>
                            <View style={styles.header}><Text style={styles.title}>长按编辑：</Text></View>
                            {familyView}
                        </View>
                        <View style={styles.line}></View>
                    </ScrollView>
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

    getFamilies() {
        var me = this;
        AsyncStorage.getItem('family').then(function(data) {
            let families = JSON.parse(data);
            me.setState({
                families: families || []
            });
        });
    }

    selectFamily(index) {
        var me = this;
        this.setState({
            selectedItem: index
        });
        this.timer = setTimeout(function() {
            let {navigator, selectFamily} = me.props;
            navigator.pop();
            if (selectFamily) {
                selectFamily(me.state.families[index]);
            }
        }, 200);
    }

    showEdit() {
        console.log(Picker);
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    familyList: {
        backgroundColor: '#fff',
        marginTop: 20
    },
    header: {
        paddingVertical: 15,
        paddingLeft: 20,
    },
    title: {
        fontSize: 14,
        color: 'gray',
    },
    line: {
        height: 1.3,
        backgroundColor: '#eaeaea'
    },
});
