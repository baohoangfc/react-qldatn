import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";

import avatar from "assets/img/faces/marc.jpg";

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

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mssv: "88888888",
      tenTaiKhoan: "PhamVanMach",
      email: "MachPham@gmail.com",
      tenKhoa: "Công nghệ thông tin",
      matKhau: "foobar",
      nhapLaiMatKhau: "",
      ngaySinh: "1975-01-01",
      sdt: "0969123456",
      ho: "Phạm",
      ten: "Mách",
      hocvi: "Tiến sĩ",
      gioiTinh: "male",
      isEditing: false,
    }
  }


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };



  render() {

    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={ 12 } sm={ 12 } md={ 8 }>
            <Card>
              <CardHeader color="primary">
                <h4 className={ classes.cardTitleWhite }>Thông tin tài khoản cá nhân</h4>
                <div style={ { float: "right" } }>
                  {
                    !this.state.isEditing ? (
                      <IconButton onClick={ () => { this.setState({ isEditing: true }) } }>
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
                      disabled={ !this.state.isEditing }
                      InputProps={ {
                        disableUnderline: !this.state.isEditing,
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
                      label="Địa chỉ Email"
                      style={ { margin: 8 } }
                      className={ classes.textField }
                      value={ this.state.email }
                      onChange={ this.handleChange('email') }
                      margin="normal"
                      disabled={ !this.state.isEditing }
                      InputProps={ {
                        disableUnderline: !this.state.isEditing,
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
                      label="Điện thoại"
                      style={ { margin: 8 } }
                      className={ classes.textField }
                      value={ this.state.sdt }
                      onChange={ this.handleChange('sdt') }
                      margin="normal"
                      disabled={ !this.state.isEditing }
                      InputProps={ {
                        disableUnderline: !this.state.isEditing,
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
                      disabled={ !this.state.isEditing }
                      InputProps={ {
                        disableUnderline: !this.state.isEditing,
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
                      disabled={ !this.state.isEditing }
                      InputProps={ {
                        disableUnderline: !this.state.isEditing,
                        style: { "color": "black" }
                      } }
                      InputLabelProps={ {
                        shrink: true
                      } }
                      fullWidth
                    />
                  </GridItem>
                  <GridItem xs={ 12 } sm={ 12 } md={ 4 }>
                    <FormLabel style={ { margin: 8 } } component="legend">Giới tính</FormLabel>
                    <RadioGroup
                      aria-label="Giới tính"
                      name="gender1"
                      className={ classes.group }
                      value={ this.state.gioiTinh }
                      onChange={ this.handleChange('gioiTinh') }
                    >
                      <FormControlLabel value="female" control={ <Radio /> } label="Female" />
                      <FormControlLabel value="male" control={ <Radio /> } label="Male" />
                    </RadioGroup>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={ 12 } sm={ 12 } md={ 4 }>
                    <TextField
                      id="standard-name"
                      label="Khoa"
                      style={ { margin: 8 } }
                      className={ classes.textField }
                      value={ this.state.tenKhoa }
                      onChange={ this.handleChange('tenKhoa') }
                      margin="normal"
                      disabled
                      InputProps={ {
                        disableUnderline: !this.state.isEditing,
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
                      label="Học vị"
                      style={ { margin: 8 } }
                      className={ classes.textField }
                      value={ this.state.hocvi }
                      onChange={ this.handleChange('hocvi') }
                      margin="normal"
                      disabled
                      InputProps={ {
                        disableUnderline: !this.state.isEditing,
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
                      id="standard-date-start"
                      label="Ngày sinh"
                      style={ { margin: 8 } }
                      margin="normal"
                      InputProps={ {
                        defaultValue: this.state.ngaySinh,
                        type: "date",
                        disableUnderline: !this.state.isEditing,
                        style: { "color": "black" },
                      } }
                      disabled={ !this.state.isEditing }
                      fullwidth
                      InputLabelProps={ {
                        shrink: true
                      } }
                      fullWidth
                    />
                  </GridItem>
                  <GridItem xs={ 12 } sm={ 12 } md={ 8 } />
                  {
                    this.state.isEditing ? (
                      [
                        <GridItem key="1" xs={ 12 } sm={ 12 } md={ 4 }>
                          <TextField
                            id="standard-name"
                            label="Mật khẩu"
                            style={ { margin: 8 } }
                            className={ classes.textField }
                            value={ this.state.matKhau }
                            onChange={ this.handleChange('matKhau') }
                            margin="normal"
                            disabled={ !this.state.isEditing }
                            InputProps={ {
                              disableUnderline: !this.state.isEditing,
                              style: { "color": "black" },
                              type: "password"
                            } }
                            InputLabelProps={ {
                              shrink: true
                            } }
                            fullWidth
                          />
                        </GridItem>,
                        <GridItem key="2" xs={ 12 } sm={ 12 } md={ 4 }>
                          <TextField
                            id="standard-name"
                            label="Nhập lại mật khẩu"
                            style={ { margin: 8 } }
                            className={ classes.textField }
                            value={ this.state.nhapLaiMatKhau }
                            onChange={ this.handleChange('nhapLaiMatKhau') }
                            margin="normal"
                            disabled={ !this.state.isEditing }
                            InputProps={ {
                              disableUnderline: !this.state.isEditing,
                              style: { "color": "black" },
                              type: "password"
                            } }
                            InputLabelProps={ {
                              shrink: true
                            } }
                            fullWidth
                          />
                        </GridItem>
                      ]
                    ) : null
                  }

                </GridContainer>
                <GridContainer>
                  <GridItem container
                    direction="row"
                    justify="flex-end"
                    alignItems="center" xs={ 12 } sm={ 12 } md={ 12 }
                  >
                    {
                      this.state.isEditing ? [
                        <Button key="1" color="primary" onClick={ () => this.setState({ isEditing: false }) }>Lưu</Button>,
                        <Button key="2" onClick={ () => this.setState({ isEditing: false }) }> Hủy bỏ</Button>
                      ] : null
                    }
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={ 12 } sm={ 12 } md={ 4 }>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={ e => e.preventDefault() }>
                  <img src={ avatar } alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <h6 className={ classes.cardCategory }>CEO / CO-FOUNDER</h6>
                <h4 className={ classes.cardTitle }>Alec Thompson</h4>
                <p className={ classes.description }>
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves Kanye
                  I love Rick Owens’ bed design but the back is...
                </p>
                <Button color="primary" round>
                  Upload new Avatar
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }

}

export default withStyles(styles)(UserProfile);
