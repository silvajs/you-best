import React, {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
    TextInput,
    ScrollView,
    Picker,
    DatePickerAndroid,
    AsyncStorage,
    ToastAndroid,
} from 'react-native';
import MyToolbar from '../../component/MyToolbar';
import FormGroup from '../../component/FormGroup';
import FamilyRelationPage from './FamilyRelationPage';
import '../../util/dateFormat';
import {ButtonPrimary} from '../../component/Button';

export default class FamilyAddPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            relation: null,
            name: '',
            gender: '',
            birthday: '',
            phone: '',
            email: ''
        };
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
                                <Text style={styles.formControlTextResult}>{this.state.relation && this.state.relation.name}</Text>
                                :
                                <Text style={styles.formControlText}>请选择关系</Text>
                            }
                        </FormGroup>
                        <FormGroup title='姓名' hasArrow={false}>
                            <TextInput placeholder='请输入姓名' placeholderTextColor='#ccc' underlineColorAndroid='transparent'
                                style={styles.textInput}
                                value={this.state.name} onChangeText={this.changeTextInput.bind(this, 'name')}/>
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
                        <FormGroup title='生日' onPress={this.showDatePicker.bind(this)}>
                            {
                                this.state.birthday ?
                                <Text style={styles.formControlTextResult}>{this.state.birthday}</Text>
                                :
                                <Text style={styles.formControlText}>请选择生日</Text>
                            }
                        </FormGroup>
                        <FormGroup title='手机' hasArrow={false}>
                            <TextInput placeholder='请输入手机号' placeholderTextColor='#ccc' underlineColorAndroid='transparent' keyboardType='numeric'
                                style={styles.textInput}
                                value={this.state.phone}  onChangeText={this.changeTextInput.bind(this, 'phone')}/>
                        </FormGroup>
                        <FormGroup title='邮箱' hasArrow={false}>
                            <TextInput placeholder='请输入邮箱' placeholderTextColor='#ccc' underlineColorAndroid='transparent' keyboardType='email-address'
                                style={styles.textInput}
                                value={this.state.email}  onChangeText={this.changeTextInput.bind(this, 'email')}/>
                        </FormGroup>
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <ButtonPrimary onPress={this.saveFamily.bind(this)} disabled={this.canSave()}>保 存</ButtonPrimary>
                </View>
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

    async showDatePicker() {
        let options = {
            date: this.state.birthday ? new Date(this.state.birthday) :　new Date()
        };
        const {action, year, month, day} = await DatePickerAndroid.open(options);
        if (action === DatePickerAndroid.dateSetAction) {
            this.setState({
                birthday: new Date(year, month, day).pattern('yyyy-MM-dd')
            });
        }
    }

    changeTextInput(key, value) {
        this.setState({
            [key]: value
        });
    }

    async saveFamily() {
        let info = {
            relation: this.state.relation,
            name: this.state.name,
            gender: this.state.gender,
            birthday: this.state.birthday,
            phone: this.state.phone,
            email: this.state.email
        };
        let families = await AsyncStorage.getItem('family');
        families = JSON.parse(families);
        function add() {
            if (!families) {
                families = [];
            }
            families.push(info)
        }
        function edit() {
            families[this.state.id] = info;
        }

        if (this.state.id) {
            edit();
        } else {
            add();
        }
        await AsyncStorage.setItem('family', JSON.stringify(families));
        ToastAndroid.show('保存成功', ToastAndroid.SHORT);
        this.props.navigator.pop();
    }

    canSave() {
        let state = this.state;
        return !(state.relation && state.name && state.gender && state.birthday && state.phone && state.email);
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
    },
    textInput: {
        color: '#6c6969',
        fontSize: 15
    },
    footer: {
        height: 50,
        paddingHorizontal: 10
    }
});
