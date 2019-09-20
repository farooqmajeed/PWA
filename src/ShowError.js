import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    close: {
      padding: theme.spacing.unit / 2,
    },
  });
class ShowMessage extends React.Component {
  state = {
    open: false,
    vertical: 'bottom', 
    horizontal: 'left'
  };

  handleClick = state => () => {
    this.setState({ open: true, ...state });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  componentWillReceiveProps=(newP)=>{
      const {ShowMessage}=newP
      this.setState({open:ShowMessage})
  }
  render() {
    const { classes } = this.props;
    const { vertical, horizontal, open } = this.state;
    const { message, error } = this.props
    return (
      <div>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={this.handleClose}
          autoHideDuration={3000}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{message}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

export default  withStyles(styles)(ShowMessage);