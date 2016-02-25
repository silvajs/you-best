import React, {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Image,
} from 'react-native';
import MyToolbar from '../../component/MyToolbar';
import TouchableRow from '../../component/TouchableRow';

var services = [{
    id: 1,
    name: '一年期',
    listPrice: 5000,
    memberPrice: 4500
}, {
    id: 2,
    name: '半年期',
    listPrice: 2600,
    memberPrice: 2000
}, {
    id: 3,
    name: '单次',
    listPrice: 3850,
    memberPrice: 3500
}];

export default class SoServicePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: -1
        };
    }

    static PropTypes = {
        selectService: React.PropTypes.func
    };

    componentWillMount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        let items = services.map(function(service, index) {
            return <ServiceItem key={service.name} onPress={this.selectService.bind(this, index)}
                        title={service.name}
                        listPrice={service.listPrice}
                        memberPrice={service.memberPrice}
                        checked={index === this.state.selectedItem} />
        }.bind(this));

        return (
            <View style={styles.container}>
                <MyToolbar title='服务期限' navigator={this.props.navigator}></MyToolbar>
                <View style={styles.service}>
                    {items}
                </View>
            </View>
        );
    }

    selectService(index) {
        var me = this;
        this.setState({
            selectedItem: index
        });
        this.timer = setTimeout(function() {
            let {navigator, selectService} = me.props;
            navigator.pop();
            if (selectService) {
                selectService(services[index]);
            }
        }, 200);
    }
}

class ServiceItem extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        onPress: function() {}
    };

    render() {
        return (
            <TouchableRow onPress={this.props.onPress.bind(this)}>
                <View style={styles.itemBox}>
                    <View style={styles.item}>
                        <Text style={styles.title}>{this.props.title}</Text>
                        <Text style={styles.listPrice}>&yen;{this.props.listPrice}</Text>
                        <Text style={styles.memberPrice}>会员价&yen;{this.props.memberPrice}</Text>
                    </View>
                    {this.props.checked && <Image source={require('../../image/icon_mark.png')} style={styles.markIcon}></Image>}
                </View>
            </TouchableRow>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    service: {
        marginTop: 20,
        backgroundColor: '#fff',
    },
    itemBox: {
        borderTopWidth: 1,
        borderColor: '#eeeeee',
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
    },
    title: {
        color: '#333',
        fontSize: 16,
        marginRight: 10,
        width: 50,
    },
    listPrice: {
        color: '#ff5645',
        fontSize: 16,
        marginRight: 20,
    },
    memberPrice: {
        color: '#ff5645',
        fontSize: 12,
        marginTop: 2,
    },
    markIcon: {
        width: 15,
        height: 15,
    }
});
