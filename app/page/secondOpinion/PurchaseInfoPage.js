import React, {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
} from 'react-native';
import MyToolbar from '../../component/MyToolbar';
import {ButtonPrimary} from '../../component/Button';
import FormGroup from '../../component/FormGroup';
import SoServicePage from './SoServicePage';
import FamilyListPage from './FamilyListPage';

class PurchaseInfoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            service: null,
            family: null
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <MyToolbar title='填写信息' navigator={this.props.navigator}></MyToolbar>
                <View style={styles.form}>
                    <View style={styles.header}><Text style={styles.title}>请如实填写以下信息：</Text></View>
                    <FormGroup title='服务类型' onPress={this.selectService.bind(this)}>
                        {   this.state.service
                            ?
                            <View><Text style={styles.serviceName}>{this.state.service.name}</Text></View>
                            :
                            <Text style={styles.formControlText}>请选择服务类型</Text>
                        }
                    </FormGroup>
                    <FormGroup title='服务对象' onPress={this.selectFamily.bind(this)} height='auto'>
                        {   this.state.family
                            ?
                            <View>
                                <FamilyInfo family={this.state.family} />
                            </View>
                            :
                            <View style={styles.serviceBox}><Text style={styles.formControlText}>请选择用户</Text></View>

                        }
                    </FormGroup>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.footer}>
                    <ButtonPrimary height={45}>确 定</ButtonPrimary>
                </View>

            </View>
        );
    }

    selectService() {
        var me = this;
        this.props.navigator.push({
            name: 'SoServicePage',
            component: SoServicePage,
            params: {
                selectService: function(service) {
                    me.setState({
                        service: service
                    });
                }
            }
        });
    }

    selectFamily() {
        var me = this;
        this.props.navigator.push({
            name: 'FamilyListPage',
            component: FamilyListPage,
            params: {
                selectFamily: function(family) {
                    me.setState({
                        family: family
                    });
                }
            }
        });
    }
}

class FamilyInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let family = this.props.family;
        return (
            <View style={styles.familyBox}>
                <Text style={styles.familyText}>{family.name + ' - ' + family.relation.name}</Text>
                <Text style={styles.familyText}>{(family.gender === 'male' ? '男' : '女') + '    生日：' + family.birthday}</Text>
                <Text style={styles.familyText}>{'手机：' + family.phone}</Text>
                <Text style={styles.familyText}>{'邮箱：' + family.email}</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    form: {
        backgroundColor: '#fff',
        marginTop: 20,
        flex: 1,
    },
    line: {
        height: 1.3,
        backgroundColor: '#eaeaea'
    },
    header: {
        paddingVertical: 15,
        paddingLeft: 20,
    },
    title: {
        fontSize: 14,
        color: 'gray',
    },
    formControlText: {
        color: '#ccc',
        fontSize: 15,
    },
    serviceName: {
        fontSize: 15
    },
    footer: {
        marginBottom: 10,
        marginHorizontal: 10
    },
    familyBox: {
        paddingVertical: 10,
    },
    familyText: {
        fontSize: 15,
    },
    serviceBox: {
        height: 52,
        justifyContent: 'center'
    }
});

export default PurchaseInfoPage;
