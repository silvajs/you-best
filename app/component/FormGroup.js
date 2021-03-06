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
        hasArrow: true,
        checked: false,
        height: 52,
    };

    static propTypes = {
        onPress: React.PropTypes.func,
        onLongPress: React.PropTypes.func
    };

    render() {
        return (
            <TouchableHighlight underlayColor='#d6d4d4'
                onPress={this.onPress.bind(this)}
                onLongPress={this.onLongPress.bind(this)}>
                <View style={[styles.formGroup, this.props.height !== 'auto' && {height: this.props.height}]}>
                    <View style={styles.formLabel}><Text style={styles.formLabelText}>{this.props.title}</Text></View>
                    <View style={styles.formControl}>{this.props.children}</View>
                    {
                        this.props.hasArrow &&
                        <View style={styles.formArrow}>
                            <Image source={require('../image/icon_arrow_right.png')} style={styles.formArrowIcon}></Image>
                        </View>
                    }
                    {
                        this.props.checked &&
                        <View style={styles.formArrow}>
                            <Image source={require('../image/icon_mark.png')} style={styles.markIcon}></Image>
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

    onLongPress() {
        if (this.props.onLongPress) {
            this.props.onLongPress();
        }
    }
}

var styles = StyleSheet.create({
    formGroup: {
        flexDirection: 'row',
        borderColor: '#eeeeee',
        borderTopWidth: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    formLabel: {
        marginRight: 30
    },
    formLabelText: {
        color: '#333',
        fontSize: 15,
    },
    formControl: {
        flex: 1,
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
    markIcon: {
        width: 15,
        height: 15,
    },
});

export default FormGroup;
