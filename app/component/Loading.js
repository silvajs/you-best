import React, {
    StyleSheet,
    View,
    Text,
    ProgressBarAndroid,
} from 'react-native';

class Loading extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <ProgressBarAndroid></ProgressBarAndroid>
                <Text>加载中...</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
		justifyContent: 'center'
    }
});

export default Loading;
