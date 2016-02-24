import React, {
    StyleSheet,
    ToolbarAndroid,
} from 'react-native';

export default class MyToolbar extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        title: '',
        titleColor: '#ff5645',
        navIcon: null,
        actions: null,
        onActionSelected: null
    };

    render() {
        return (
            <ToolbarAndroid
                style={styles.bar}
                navIcon={this.props.navIcon ? this.props.navIcon : require('../image/btn_back.png')}
                onIconClicked={this.onIconClicked.bind(this)}
                title={this.props.title}
                titleColor={this.props.titleColor}
                actions={this.props.actions}
                onActionSelected={this.props.onActionSelected.bind(this)}>
            </ToolbarAndroid>
        );
    }

    onIconClicked() {
        let {onIconClicked} = this.props
        if (onIconClicked) {
            onIconClicked();
        } else {
            this.props.navigator.pop();
        }
    }
}

var styles = StyleSheet.create({
    bar: {
        height: 51,
        backgroundColor: '#fff',
    }
});
