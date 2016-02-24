import React, {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
} from 'react-native';

class FormGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        title: '',
        placeholder: '',
        hasArrow: true
    };

    static propTypes = {
        onPress: React.PropTypes.func
    };

    render() {
        return (
            <TouchableHighlight underlayColor='#d6d4d4' onPress={this.onPress.bind(this)}>
                <View style={styles.formGroup}>
                    <View style={styles.formLabel}><Text style={styles.formLabelText}>{this.props.title}</Text></View>
                    <View style={styles.formControl}>{this.props.children}</View>
                    {
                        this.props.hasArrow &&
                        <View style={styles.formArrow}>
                            <Image source={require('../image/icon_arrow_right.png')} style={styles.formArrowIcon}></Image>
                        </View>
                    }
                </View>
            </TouchableHighlight>
        );
    }

    onPress() {
        if (this.props.onPress) {
            requestAnimationFrame(() => {
                this.props.onPress();
            });
        }
    }
}

var styles = StyleSheet.create({
    formGroup: {
        height: 52,
        flexDirection: 'row',
        borderColor: '#eeeeee',
        borderTopWidth: 1,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    formLabel: {
        marginRight: 30
    },
    formLabelText: {
        color: '#333',
        fontSize: 15,
    },
    formControl: {
        flex: 1
    },
    formControlText: {
        color: '#ccc'
    },
    formArrow: {

    },
    formArrowIcon: {
        width: 12,
        height: 12
    },
});

export default FormGroup;
