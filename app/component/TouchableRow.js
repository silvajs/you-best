import React, {
    TouchableHighlight,
    View,
} from 'react-native';

export default class TouchableRow extends React.Component {
    constructor(props) {
        super(props);
    }

    static PropTypes = {
        onPress: React.PropTypes.func
    };

    render() {
        return (
            <TouchableHighlight onPress={this.onPress.bind(this)} underlayColor='#d6d4d4'>
                <View>{this.props.children}</View>
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
