import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

function handleClick() {
  alert('onClick triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

class OutputBar extends Component {
    handleClick() {
        this.props.clearClassifier();
    }

    render() {
        return (
            <AppBar
                title={<span style={styles.title}>Classification Results</span>}
                iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonClick={(e) => this.handleClick(e)}
            />
        );
    }
}

export default OutputBar;