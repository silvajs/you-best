import React, {
    StyleSheet,
    View,
    Text
} from 'react-native';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}><Text>Home</Text></View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});

export default HomePage;
