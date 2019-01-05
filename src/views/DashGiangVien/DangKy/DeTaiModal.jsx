import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';


import TextField from "@material-ui/core/TextField";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

function getModalStyle() {
    const top = 55;
    const left = 56;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 170,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 1,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 10,
    },
    menu: {
        width: 200,
    },
});

class SimpleModal extends Component {
    state = {
        tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo",
        listGV: [
            { id: 1, tenGV: "A" },
            { id: 2, tenGV: "B" },
            { id: 3, tenGV: "C" },
            { id: 4, tenGV: "D" },
        ],
        gvhd: "Lê Đình Xinh",
        moTa: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacusLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus",
        maBaoMat: "",
    };


    handleChangeInput = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={ this.props.open }
                    onClose={ this.props.onClose }
                >
                    <div style={ getModalStyle() } className={ classes.paper }>
                        <GridContainer style={ { width: "100%" } }>
                            <GridItem xs={ 12 } sm={ 12 } md={ 12 }>
                                <div style={ { float: "right", height: "60px" } }>
                                    <IconButton onClick={ this.props.onClose }>
                                        <Icon>
                                            clear
                                        </Icon>
                                    </IconButton>
                                </div>
                                <Card>
                                    <CardHeader color="primary">
                                        <h5 style={ { padding: "0px", margin: "0px" } }>THÔNG TIN ĐỀ TÀI</h5>
                                    </CardHeader>
                                    <CardBody>
                                        <GridContainer>
                                            <GridItem xs={ 12 } sm={ 12 } md={ 10 }>
                                                <TextField
                                                    id="standard-name"
                                                    label="Tên đề tài"
                                                    style={ { margin: 8, width: "100%" } }
                                                    className={ classes.textField }
                                                    value={ this.state.tenDeTai }
                                                    onChange={ this.handleChangeInput('tenDeTai') }
                                                    margin="normal"
                                                    disabled
                                                    InputProps={ {
                                                        disableUnderline: false,
                                                        style: { "color": "black" }
                                                    } }
                                                    InputLabelProps={ {
                                                        shrink: true
                                                    } }
                                                />
                                            </GridItem>
                                        </GridContainer>

                                        <GridContainer>
                                            <GridItem xs={ 12 } sm={ 12 } md={ 12 }>
                                                <TextField
                                                    id="standard-name"
                                                    label="GVHD"
                                                    style={ { margin: 8, width: "100%" } }
                                                    className={ classes.textField }
                                                    value={ this.state.gvhd }
                                                    onChange={ this.handleChangeInput('gvhd') }
                                                    margin="normal"
                                                    disabled
                                                    InputProps={ {
                                                        disableUnderline: false,
                                                        style: { "color": "black" }
                                                    } }
                                                    InputLabelProps={ {
                                                        shrink: true
                                                    } }
                                                />
                                            </GridItem>
                                            <GridItem xs={ 12 } sm={ 12 } md={ 10 }>
                                                <TextField
                                                    id="standard-name"
                                                    label="Mô tả"
                                                    style={ { margin: 8, width: "100%" } }
                                                    className={ classes.textField }
                                                    value={ this.state.moTa }
                                                    onChange={ this.handleChangeInput('moTa') }
                                                    margin="normal"
                                                    disabled
                                                    InputProps={ {
                                                        disableUnderline: false,
                                                        style: { "color": "black" }
                                                    } }
                                                    InputLabelProps={ {
                                                        shrink: true
                                                    } }
                                                    multiline
                                                />
                                            </GridItem>
                                            <GridItem xs={ 12 } sm={ 12 } md={ 10 }>
                                                <TextField
                                                    id="standard-name"
                                                    label="Mã bảo mật"
                                                    style={ { margin: 8, width: "100%" } }
                                                    className={ classes.textField }
                                                    value={ this.state.maBaoMat }
                                                    onChange={ this.handleChangeInput('maBaoMat') }
                                                    margin="normal"
                                                    // disabled
                                                    InputProps={ {
                                                        // disableUnderline: false,
                                                        style: { "color": "black" }
                                                    } }
                                                    InputLabelProps={ {
                                                        shrink: true
                                                    } }
                                                    helperText="Cần mã bảo mật nếu muốn làm chung nhóm với sinh viên khác"
                                                />
                                            </GridItem>
                                        </GridContainer>
                                    </CardBody>
                                <CardFooter>
                                    <Button color="primary">Đăng ký</Button>
                                </CardFooter>
                                </Card>
                            </GridItem>

                        </GridContainer>
                    <DeTaiModal />
                    </div>

                </Modal>
            </div >
        );
    }
}

// We need an intermediary variable for handling the recursive nesting.
const DeTaiModal = withStyles(styles)(SimpleModal);

export default DeTaiModal;