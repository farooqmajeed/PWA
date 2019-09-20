import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Preloader } from 'react-preloading-screen';
import Navigation from './Navigation/Navigation';
import NoSSR from 'react-no-ssr';


class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
        // <NoSSR key="1">
        <Preloader fadeDuration={1000}>
            <Navigation />
        {children}
        </Preloader>
            // </NoSSR>
    );
  }
}

export default Layout;
