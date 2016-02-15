import React, {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Animated,
    LayoutAnimation
} from 'react-native';
import DraggableView from './DraggableView';

class Playground extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            w: 100,
            h: 100,
            bounceValue: new Animated.Value(0),
            rotateValue: new Animated.Value('30deg')
        };
    }

    componentWillMount() {
        // LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        // LayoutAnimation.spring();
    }

    render() {
        return (
            <View style={styles.container}
                onBack={() => {
                    console.log('I am back');
                    // if (route.index > 0) {
                    //     navigator.pop();
                    // }
                }}
            >
                <Animated.View style={[styles.box, {transform: [{scale: this.state.bounceValue}, {rotate: this.state.rotateValue}]}]}></Animated.View>
                <TouchableOpacity onPress={this.onPress}>
                    <DraggableView>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Press Me</Text>
                        </View>
                    </DraggableView>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.back}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>点我跳转回去</Text>
                    </View>
                </TouchableOpacity>
                <Text>id: {this.props.id}</Text>
            </View>
        );
    }

    onPress = () => {
        // LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        // this.setState({w: this.state.w + 15, h: this.state.h + 15});
        this.state.bounceValue.setValue(1);
        // this.state.rotateValue.setValue('0deg');
        Animated.sequence([
            Animated.spring(this.state.bounceValue, {
                toValue: 1.5,
                friction: 1
            }),
            Animated.timing(this.state.rotateValue, {
                toValue: new Animated.Value('360deg'),
                duration: 500
            })
        ]).start();
    };

    back = () => {
        let {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    };

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    box: {
        backgroundColor: 'red',
        width: 100,
        height: 100
    },
    button: {
        marginTop: 50,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'black'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default Playground;
