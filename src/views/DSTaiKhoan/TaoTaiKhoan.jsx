import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import classNames from 'classnames';
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';

//Snackbar


const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};

const styles1 = theme => ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.dark,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
});

function MySnackbarContent(props) {
    const { classes, className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];

    return (
        <SnackbarContent
            className={ classNames(classes[variant], className) }
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={ classes.message }>
                    <Icon className={ classNames(classes.icon, classes.iconVariant) } />
                    { message }
                </span>
            }
            action={ [
                <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    className={ classes.close }
                    onClick={ onClose }
                >
                    <CloseIcon className={ classes.icon } />
                </IconButton>,
            ] }
            { ...other }
        />
    );
}

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

//



const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        },
        display: "inline"
    }
};

class TaoTaiKhoan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tenTaiKhoan: "",
            email: "",
            matKhau: "foobar",
            ho: "",
            ten: "",
            loaiTaiKhoan: "Sinh viên",

            roles: [
                {
                    id: 1,
                    title: "Sinh viên"
                },
                {
                    id: 2,
                    title: "Giảng viên"
                },
                {
                    id: 3,
                    title: "Quản lý"
                }
            ],

            openSnackBar: [false, false],
        }

    }

    handleSaveBtn = () => {
        this.setState({
            tenTaiKhoan: "",
            email: "",
            matKhau: "foobar",
            ho: "",
            ten: "",
            loaiTaiKhoan: "Sinh viên",
        });
        this.handleSnackBarOpen(0);
    }

    handleCancelBtn = () => {
        this.setState({
            tenTaiKhoan: "",
            email: "",
            matKhau: "foobar",
            ho: "",
            ten: "",
            loaiTaiKhoan: "Sinh viên",
        });
        this.handleSnackBarOpen(1);
    }

    handleSnackBarOpen = (type) => {
        let openSnackBar = this.state.openSnackBar.slice();
        openSnackBar[type] = true;
        this.setState({ openSnackBar })
    }


    handleSnackBarClose = (type) => (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        let openSnackBar = this.state.openSnackBar.slice();
        openSnackBar[type] = false;
        this.setState({ openSnackBar })
    };


    handleChange = name => event => {
        console.log(name);
        this.setState({
            [name]: event.target.value,
        });
    };

    generatePassword = () => {
        this.setState({ matKhau: Math.random().toString(36).slice(-8) });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <GridContainer>
                    <GridItem xs={ 12 } sm={ 12 } md={ 1 } />
                    <GridItem xs={ 12 } sm={ 12 } md={ 10 }>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={ classes.cardTitleWhite }>Tạo tài khoản</h4>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem xs={ 12 } sm={ 12 } md={ 4 }>
                                        <TextField
                                            id="standard-name"
                                            label="Tên đăng nhập"
                                            style={ { margin: 8 } }
                                            className={ classes.textField }
                                            value={ this.state.tenTaiKhoan }
                                            onChange={ this.handleChange('tenTaiKhoan') }
                                            margin="normal"
                                            // disabled={ !this.state.isEditing }
                                            InputProps={ {
                                                // disableUnderline: !this.state.isEditing,
                                                style: { "color": "black" }
                                            } }
                                            InputLabelProps={ {
                                                shrink: true
                                            } }
                                            fullWidth
                                        />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={ 12 } sm={ 12 } md={ 4 }>
                                        <TextField
                                            id="standard-name"
                                            label="Họ"
                                            style={ { margin: 8 } }
                                            className={ classes.textField }
                                            value={ this.state.ho }
                                            onChange={ this.handleChange('ho') }
                                            margin="normal"
                                            // disabled={ !this.state.isEditing }
                                            InputProps={ {
                                                // disableUnderline: !this.state.isEditing,
                                                style: { "color": "black" }
                                            } }
                                            InputLabelProps={ {
                                                shrink: true
                                            } }
                                            fullWidth
                                        />
                                    </GridItem>
                                    <GridItem xs={ 12 } sm={ 12 } md={ 4 }>
                                        <TextField
                                            id="standard-name"
                                            label="Tên"
                                            style={ { margin: 8 } }
                                            className={ classes.textField }
                                            value={ this.state.ten }
                                            onChange={ this.handleChange('ten') }
                                            margin="normal"
                                            // disabled={ !this.state.isEditing }
                                            InputProps={ {
                                                // disableUnderline: !this.state.isEditing,
                                                style: { "color": "black" }
                                            } }
                                            InputLabelProps={ {
                                                shrink: true
                                            } }
                                            fullWidth
                                        />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={ 12 } sm={ 12 } md={ 4 }>
                                        <TextField
                                            id="standard-name"
                                            label="Mật khẩu"
                                            style={ { margin: 8 } }
                                            className={ classes.textField }
                                            value={ this.state.matKhau }
                                            onChange={ this.handleChange('matKhau') }
                                            margin="normal"
                                            // disabled={ !this.state.isEditing }
                                            InputProps={ {
                                                // disableUnderline: !this.state.isEditing,
                                                style: { "color": "black" },
                                                type: "text"
                                            } }
                                            InputLabelProps={ {
                                                shrink: true
                                            } }
                                            fullWidth
                                        />
                                    </GridItem>
                                    <GridItem xs={ 12 } sm={ 12 } md={ 4 }>
                                        <Button color="primary" onClick={ this.generatePassword }>Tạo mật khẩu</Button>
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={ 12 } sm={ 12 } md={ 4 }>
                                        <FormControl style={ { margin: 8, minWidth: 120, } } fullwidth className={ classes.formControl }>
                                            <InputLabel fullwidth shrink>Loại tài khoản</InputLabel>
                                            <Select
                                                value={ this.state.loaiTaiKhoan }
                                                onChange={ this.handleChange('loaiTaiKhoan') }

                                                fullwidth
                                            >
                                                {
                                                    this.state.roles.map((role, index) => {
                                                        return (
                                                            <MenuItem value={ role.id }>{ role.title }</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem container
                                        direction="row"
                                        justify="flex-end"
                                        alignItems="center" xs={ 12 } sm={ 12 } md={ 12 }
                                    >
                                        <Button key="1" color="primary" onClick={ this.handleSaveBtn }>Tạo tài khoản</Button>,
                                        <Button key="2" onClick={ this.handleCancelBtn }> Hủy bỏ</Button>
                                    </GridItem>
                                </GridContainer>
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
                <Snackbar
                    anchorOrigin={ {
                        vertical: 'bottom',
                        horizontal: 'left',
                    } }
                    open={ this.state.openSnackBar[0] }
                    autoHideDuration={ 2000 }
                    onClose={ this.handleSnackBarClose(0) }
                >
                    <MySnackbarContentWrapper
                        onClose={ this.handleSnackBarClose(0) }
                        variant="success"
                        message="Đã tạo tài khoản thành công!"
                    />
                </Snackbar>

                <Snackbar
                    anchorOrigin={ {
                        vertical: 'bottom',
                        horizontal: 'left',
                    } }
                    open={ this.state.openSnackBar[1] }
                    autoHideDuration={ 2000 }
                    onClose={ this.handleSnackBarClose(1) }
                >
                    <MySnackbarContentWrapper
                        onClose={ this.handleSnackBarClose(1) }
                        variant="error"
                        message="Có lỗi xảy ra!"
                    />
                </Snackbar>
            </div>
        );
    }

}

export default withStyles(styles)(TaoTaiKhoan);
