import React from 'react';
import { Provider } from 'react-redux';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './app';

const Root = ({ store }) => (
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>
);

export default Root;