import React, {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
    TextInput,
    ScrollView,
    Picker,
} from 'react-native';
import MyToolbar from '../../component/MyToolbar';
import FormGroup from '../../component/FormGroup';
import FamilyRelationPage from './FamilyRelationPage';

export default class FamilyAddPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            relation: null,
            gender: null,
        }
    }

    render() {
        let actions = [{title: '保存', show: 'always', showWithText: true}];
        return (
            <View style={styles.container}>
                <MyToolbar navigator={this.props.navigator}
                    title= '添加新成员' />
                <ScrollView>
                    <View style={styles.form}>
                        <FormGroup title='关系' onPress={this.selectRelation.bind(this)}>
                            {
                                this.state.relation ?
                                <Text style={styles.formControlTextResult}>{this.state.relation.name}</Text>
                                :
                                <Text style={styles.formControlText}>请选择关系</Text>
                            }
                        </FormGroup>
                        <FormGroup title='姓名' hasArrow={false}>
                            <TextInput placeholder='请输入姓名' placeholderTextColor='#ccc' underlineColorAndroid='transparent' textAlign='start'/>
                        </FormGroup>
                        <FormGroup title='性别'>
                            {
                                this.state.gender ?
                                <Text style={styles.formControlTextResult}>{this.state.gender === 'male' ? '男' : '女'}</Text>
                                :
                                <Text style={styles.formControlText}>请选择性别</Text>
                            }
                            <Picker selectedValue={this.state.gender} style={styles.picker} onValueChange={this.onSelectGender.bind(this)}>
                                <Picker.Item label='请选择性别' value=''></Picker.Item>
                                <Picker.Item label='男' value='male'></Picker.Item>
                                <Picker.Item label='女' value='female'></Picker.Item>
                            </Picker>
                        </FormGroup>
                        <FormGroup title='生日'><Text style={styles.formControlText}>请选择生日</Text></FormGroup>
                        <FormGroup title='手机' hasArrow={false}>
                            <TextInput placeholder='请输入手机号' placeholderTextColor='#ccc' underlineColorAndroid='transparent' keyboardType='numeric'/>
                        </FormGroup>
                        <FormGroup title='邮箱' hasArrow={false}>
                            <TextInput placeholder='请输入邮箱' placeholderTextColor='#ccc' underlineColorAndroid='transparent' keyboardType='email-address'/>
                        </FormGroup>
                    </View>
                </ScrollView>
            </View>
        );
    }

    selectRelation() {
        var me = this;
        this.props.navigator.push({
            name: 'FamilyRelationPage',
            component: FamilyRelationPage,
            params: {
                selectRelation: function(relation) {
                    me.setState({
                        relation: relation
                    });
                }
            }
        });
    }

    onSelectGender(value) {
        if (value === '') {
            return;
        }
        this.setState({
            gender: value
        });
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    form: {
        marginTop: 20,
        backgroundColor: '#fff',
    },
    formControlText: {
        color: '#ccc',
        fontSize: 15,
        marginLeft: 12,
    },
    formControlTextResult: {
        fontSize: 15,
        marginLeft: 12,
    },
    picker: {
        opacity: 0,
        position: 'absolute',
        left: -100,
        top: -15,
        right: -100,
        bottom: -2
    }
});
