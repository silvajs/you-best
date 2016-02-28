import React, {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

class ButtonDefault extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        onPress: null,
        disabled: false,
        height: 40,
    };

    static propTypes = {
        onPress: React.PropTypes.func,
        disabled: React.PropTypes.bool,
        height: React.PropTypes.number
    };

    render() {
        return (
            <TouchableHighlight onPress={this.onPress.bind(this)} underlayColor='red'>
                <View style={[styles.btnDefault, {height: this.props.height}]}>
                    <Text style={styles.btnDefaultText}>{this.props.children}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    onPress() {
        if (!this.props.disabled && this.props.onPress) {
            requestAnimationFrame(() => {
                this.props.onPress();
            });
        }
    }
}

class ButtonPrimary extends ButtonDefault {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableHighlight onPress={this.onPress.bind(this)}>
                <View style={[styles.btnDefault, styles.btnPrimary, {height: this.props.height}]}>
                    <Text style={[styles.btnDefaultText, styles.btnDefaultPrimary]}>{this.props.children}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

var styles = StyleSheet.create({
    btnDefault: {
        height: 40,
        backgroundColor: '#fff',
        borderColor: '#ff5645',
        borderWidth: 1,
        borderRadius: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnPrimary: {
        backgroundColor: '#ff5645',
    },
    btnDefaultText: {
        color: '#ff5645',
        fontSize: 16,
    },
    btnDefaultPrimary: {
        color: '#fff',
    }
});

export {ButtonDefault, ButtonPrimary};
