import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Typography from "@material-ui/core/Typography"

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
    }
  }
};

function createDotBaoCao() {
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={1}>
        <h4>Đợt 1:</h4>
      </GridItem>
      <GridItem xs={12} sm={12} md={3}>
        <CustomInput
          labelText="Thời gian bắt đầu"
          id="tenKhoa"
          inputProps={{
            type: "date",
            defaultValue: "2018-01-01"
          }}
          formControlProps={{
            fullWidth: true
          }}
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={3}>
        <CustomInput
          labelText="Thời gian kết thúc"
          id="email-address"
          inputProps={{
            type: "date",
            defaultValue: "2018-01-01"
          }}
          formControlProps={{
            fullWidth: true
          }}
        />
      </GridItem>
    </GridContainer>
  )
}

function Icons(props) {
  const { classes } = props;
  return (
    <GridContainer>
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>QUẢN LÝ TIẾN ĐỘ</h4>
          <p className={classes.cardCategoryWhite}>
            Handcrafted by NDA NDA
        </p>
        </CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <h4><strong>Thời gian đăng kí:</strong></h4>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Thời gian bắt đầu"
                    id="tenKhoa"
                    inputProps={{
                      type: "date",
                      defaultValue: "2018-01-01"
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Thời gian kết thúc"
                    id="email-address"
                    inputProps={{
                      type: "date",
                      defaultValue: "2018-01-01"
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <hr></hr>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <h4><strong>Thời gian báo cáo tiến độ:</strong></h4>
                </GridItem>
              </GridContainer>
                {createDotBaoCao()}
                {createDotBaoCao()}
                {createDotBaoCao()}
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <IconButton>
                    <AddBoxIcon fontSize="inherit" />
                    <span style={{ paddingRight: "10px", fontSize: "20px" }}>Tạo đợt báo cáo tiến độ mới</span>
                  </IconButton>
                </GridItem>
              </GridContainer>
              <hr></hr>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <h4><strong>Thời gian bảo vệ:</strong></h4>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Thời gian bắt đầu"
                    id="tenKhoa"
                    inputProps={{
                      type: "date",
                      defaultValue: "2018-01-01"
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Thời gian kết thúc"
                    id="email-address"
                    inputProps={{
                      type: "date",
                      defaultValue: "2018-01-01"
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>

              <CardFooter>
                <Button color="primary">Lưu</Button>
              </CardFooter>
            </GridItem>
          </GridContainer>
        </CardBody>
      </Card>
    </GridContainer>
  );
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Icons);
