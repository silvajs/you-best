import React, {
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native';

class ButtonDefault extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        disabled: false
    };

    render() {
        return (
            <TouchableHighlight onPress={this.onPress.bind(this)} underlayColor='#ff5645'>
                <View style={styles.btnDefault}>
                    <Text style={styles.btnDefaultText}>{this.props.children}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    onPress() {
        console.log("press");
    }
}

class ButtonPrimary extends ButtonDefault {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableHighlight onPress={this.onPress.bind(this)}>
                <View style={[styles.btnDefault, styles.btnPrimary]}>
                    <Text style={[styles.btnDefaultText, styles.btnDefaultPrimary]}>{this.props.children}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

var styles = StyleSheet.create({
    btnDefault: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: '#fff',
        borderColor: '#ff5645',
        borderWidth: 1,
        borderRadius: 1,
        alignItems: 'center',
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
