import React, {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Image,
} from 'react-native';
import MyToolbar from '../../component/MyToolbar';
import FormGroup from '../../component/FormGroup';

var relations = [{
    id: 1,
    name: '本人',
    value: 'self'
}, {
    id: 2,
    name: '配偶',
    value: 'spouse'
}, {
    id: 3,
    name: '子女',
    value: 'children'
}, {
    id: 4,
    name: '父母',
    value: 'parent'
}, {
    id: 5,
    name: '其他',
    value: 'other',
    note: '非直系亲属请选择此项，暂不享受第二份半价优惠'
}];

export default class FamilyRelationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: -1
        };
    }

    static PropTypes = {
        selectRelation: React.PropTypes.func
    };

    componentWillMount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        let items = relations.map(function(relation, index) {
            return (
                <FormGroup key={relation.id} title={relation.name} hasArrow={false} checked={index === this.state.selectedItem}
                    onPress={this.selectRelation.bind(this, index)}>
                    {relation.note && <Text style={styles.note}>非直系亲属暂不享受第二份半价优惠</Text>}
                </FormGroup>
            )
        }.bind(this));

        return (
            <View style={styles.container}>
                <MyToolbar title='关系' navigator={this.props.navigator}></MyToolbar>
                <View style={styles.relation}>
                    {items}
                </View>
            </View>
        );
    }

    selectRelation(index) {
        var me = this;
        this.setState({
            selectedItem: index
        });
        this.timer = setTimeout(function() {
            let {navigator, selectRelation} = me.props;
            navigator.pop();
            if (selectRelation) {
                selectRelation(relations[index]);
            }
        }, 200);
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    relation: {
        marginTop: 20,
        backgroundColor: '#fff',
    },
    note: {
        fontSize: 12,
        color: '#ff5645',
    },
    markIcon: {
        width: 15,
        height: 15,
    }
});
