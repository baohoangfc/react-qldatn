import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
// core components

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import CardBody from "components/Card/CardBody.jsx";

import Typography from '@material-ui/core/Typography';
function TabContainer(props) {
    return (
        <Typography component="div" >
            { props.children }
        </Typography>
    );
}


const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
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


class ShowBaoCao extends Component {
    state = {

        mssv: "102150256",
        tenSV: "Lê Đình Xinh",
        tenDeTai: "Xây dựng XXX",
        noiDungCongViecDaThucHien: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At multis malis affectus. Quem quidem vos, cum improbis poenam proponitis, inpetibilem facitis, cum sapientem semper boni plus habere vultis, tolerabilem. Atqui reperies, inquit, in hoc quidem pertinacem; Quamquam id quidem, infinitum est in hac urbe; Sed venio ad inconstantiae crimen, ne saepius dicas me aberrare; Quamquam id quidem licebit iis existimare, qui legerint. Cui Tubuli nomen odio non est? Duo Reges: constructio interrete. Idemne potest esse dies saepius, qui semel fuit? Dic in quovis conventu te omnia facere, ne doleas. Tu enim ista lenius, hic Stoicorum more nos vexat. Atque hoc loco similitudines eas, quibus illi uti solent, dissimillimas proferebas. Nam memini etiam quae nolo, oblivisci non possum quae volo. Sed venio ad inconstantiae crimen, ne saepius dicas me aberrare",
        noiDungCongViecSeThucHien: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At multis malis affectus. Quem quidem vos, cum improbis poenam proponitis, inpetibilem facitis, cum sapientem semper boni plus habere vultis, tolerabilem. Atqui reperies, inquit, in hoc quidem pertinacem; Quamquam id quidem, infinitum est in hac urbe; Sed venio ad inconstantiae crimen, ne saepius dicas me aberrare; Quamquam id quidem licebit iis existimare, qui legerint. Cui Tubuli nomen odio non est? Duo Reges: constructio interrete. Idemne potest esse dies saepius, qui semel fuit? Dic in quovis conventu te omnia facere, ne doleas. Tu enim ista lenius, hic Stoicorum more nos vexat. Atque hoc loco similitudines eas, quibus illi uti solent, dissimillimas proferebas. Nam memini etiam quae nolo, oblivisci non possum quae volo. Sed venio ad inconstantiae crimen, ne saepius dicas me aberrare",
        isEditing: false,
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleEditClick = () => {
        this.setState({ isEditing: true });
    }

    handleDataChangeClick = () => {
        this.setState({ isEditing: false });
        //save data
    }

    handleDataChangeAbortClick = () => {
        this.setState({ ...this.state.oldData });
        this.setState({ isEditing: false });
        // reFetch data
    }

    render() {
        const { classes } = this.props;
        console.log(this.props.match.params)
        return (
            <GridContainer>
                {/* <Grid>
                    <NavLink to="/quanly/quanlydoan/doan">Danh sách đồ án</NavLink> > <NavLink to="/quanly/quanlydoan/doan/1">{ this.state.tenSV }</NavLink> > Báo cáo { this.props.match.params.idbaocao }
                </Grid> */}
                <Card>
                    <CardHeader color="primary">
                        <h4 className={ classes.cardTitleWhite }>Đề tài: { this.state.tenDeTai }</h4>
                        <div style={ { float: "right" } }>
                            {
                                !this.state.isEditing ? (
                                    <IconButton onClick={ this.handleEditClick }>
                                        <Icon>
                                            edit
                                        </Icon>
                                    </IconButton>
                                ) :
                                    null
                            }
                        </div>
                    </CardHeader>
                    <CardBody>
                        <form className={ classes.container } noValidate autoComplete="off">
                            <h5 style={ { marginLeft: 8 } }>Báo cáo tiến độ từ ngày X đến ngày Y</h5>
                            <GridContainer>
                                <GridItem xs={ 12 } sm={ 12 } md={ 12 }>
                                    <TextField
                                        id="standard-full-width"
                                        label="Nội dung công việc đã thực hiện từ ngày X đến ngày Y"
                                        style={ { margin: 8 } }
                                        value={ this.state.noiDungCongViecDaThucHien }
                                        onChange={ this.handleChange('noiDungCongViecDaThucHien') }
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={ {
                                            shrink: true
                                        } }
                                        InputProps={ {
                                            disableUnderline: !this.state.isEditing,
                                            style: { "color": "black" }
                                        } }
                                        disabled={ !this.state.isEditing }
                                        multiline
                                        fullWidth
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={ 12 } sm={ 12 } md={ 12 }>
                                    <TextField
                                        id="standard-full-width"
                                        label="Nội dung công việc đã thực hiện sẽ ngày X đến ngày Y"
                                        style={ { margin: 8 } }
                                        value={ this.state.noiDungCongViecSeThucHien }
                                        onChange={ this.handleChange('noiDungCongViecSeThucHien') }
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={ {
                                            shrink: true
                                        } }
                                        InputProps={ {
                                            disableUnderline: !this.state.isEditing,
                                            style: { "color": "black" }
                                        } }
                                        disabled={ !this.state.isEditing }
                                        multiline
                                        fullWidth
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={ 12 } sm={ 12 } md={ 4 }>
                                    <h5 style={ { margin: 8 } }>File liên quan</h5>
                                    <Link style={ { margin: 8 } } to="/quanly/quanlydoan/doan/1/baocao/1"><Icon>attach_file</Icon> File 1</Link><br />
                                    <Link style={ { margin: 8 } } to="/quanly/quanlydoan/doan/1/baocao/2"><Icon>attach_file</Icon> File 2</Link><br />
                                    <Link style={ { margin: 8 } } to="/quanly/quanlydoan/doan/1/baocao/3"><Icon>attach_file</Icon> File 3</Link>
                                </GridItem>
                            </GridContainer>

                            {
                                this.state.isEditing ? (
                                    <div style={ { float: "right", marginBottom: "10px" } }>
                                        <Button color="primary" key="1" onClick={ this.handleDataChangeClick }>Lưu</Button>,
                                        <Button key="2" onClick={ this.handleDataChangeAbortClick }>Hủy bỏ</Button>
                                    </div>
                                ) :
                                    null
                            }
                            <GridContainer>
                                <GridItem xs={ 12 } sm={ 12 } md={ 4 }>
                                    <Button color="primary">Xác nhận</Button>
                                </GridItem>
                            </GridContainer>
                        </form>


                    </CardBody>
                </Card>
            </GridContainer>
        );
    }
}

export default withStyles(styles)(ShowBaoCao);
