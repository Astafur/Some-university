import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

/* НИЖЕ ЭЛЕМЕНТ PAPER */
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

export default class FormDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Paper id='NewForm' elevation={22}>
        <Button id='AddButton' variant="contained" color="primary" onClick={this.handleClickOpen}>ДОБАВИТЬ СТУДЕНТА</Button></Paper>


        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">НОВЫЙ СТУДЕНТ</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Введённые Вами данные отобразятся в таблице
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="firstname"
              label="Имя"
              type="firstname"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="secondname"
              label="Фамилия"
              type="secondname"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="rating"
              label="Рейтинг"
              type="rating"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Отмена
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Добавить
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
