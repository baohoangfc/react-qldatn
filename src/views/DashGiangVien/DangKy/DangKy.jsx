import React, { Component } from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon"
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import MaterialTable from "material-table";

import DeTaiModal from "./DeTaiModal.jsx";
import DeTaiChungModal from "./DeTaiChungModal.jsx";

const ExpansionPanel = withStyles({
    root: {
        border: '1px solid rgba(0,0,0,.125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
    },
    expanded: {
        margin: 'auto',
    },
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0,0,0,.03)',
        borderBottom: '1px solid rgba(0,0,0,.125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(props => <MuiExpansionPanelSummary { ...props } />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const ExpansionPanelDetails = withStyles(theme => ({
    root: {
        padding: theme.spacing.unit * 2,
    },
}))(MuiExpansionPanelDetails);

Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

Date.prototype.subtDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() - days);
    return date;
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

class DangKy extends Component {
    state = {
        tenDeTai: "",
        listGV: [
            { id: 1, tenGV: "A" },
            { id: 2, tenGV: "B" },
            { id: 3, tenGV: "C" },
            { id: 4, tenGV: "D" },
        ],
        gvhd: "Lê Đình Xinh",
        moTa: "",
        maBaoMat: "",


        dsdtgvdx: {
            table: {
                header: [
                    { title: 'STT', field: 'id', cellStyle: { width: '10px' }, },
                    { title: 'Tên đề tài', field: 'tenDeTai' },
                    { title: 'Được làm nhóm?', field: 'nhom' },
                    { title: 'GV Hướng dẫn', field: 'tenGV' },
                ],
                data: [
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", nhom: "Có", tenGV: "Putin" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", nhom: "Có", tenGV: "Putin" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", nhom: "Có", tenGV: "Putin" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", nhom: "Có", tenGV: "Trump" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", nhom: "Không", tenGV: "Trump" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", nhom: "Không", tenGV: "Trump" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", nhom: "Không", tenGV: "Trump" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", nhom: "Không", tenGV: "Trump" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", nhom: "Không", tenGV: "Trump" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", nhom: "Có", tenGV: "Putin" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", nhom: "Có", tenGV: "Putin" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", nhom: "Có", tenGV: "Xinh" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", nhom: "Có", tenGV: "Xinh" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", nhom: "Không", tenGV: "Xinh" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", nhom: "Có", tenGV: "Xinh" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", nhom: "Không", tenGV: "Xinh" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", nhom: "Có", tenGV: "Xinh" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", nhom: "Có", tenGV: "Putin" },
                ]
            },
        },

        dsdtchung: {
            table: {
                header: [
                    { title: 'STT', field: 'id', cellStyle: { width: '10px' }, },
                    { title: 'Tên đề tài', field: 'tenDeTai' },
                    { title: 'GV Hướng dẫn', field: 'tenGV' },
                ],
                data: [
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", tenGV: "Putin" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", tenGV: "Putin" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", tenGV: "Putin" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", tenGV: "Trump" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", tenGV: "Trump" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", tenGV: "Trump" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", tenGV: "Trump" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", tenGV: "Trump" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", tenGV: "Trump" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", tenGV: "Putin" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", tenGV: "Putin" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", tenGV: "Xinh" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", tenGV: "Xinh" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", tenGV: "Xinh" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", tenGV: "Xinh" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", tenGV: "Xinh" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", tenGV: "Xinh" },
                    { tenDeTai: "Xây dựng website foobar sử dụng machinelearnfoo", tenGV: "Putin" },
                ],
            }
        },




        deTaiModalOpen: false,
        deTaiChungModalOpen: false,
        expanded: '',
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };


    handleChangeInput = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    rawDataToTable = (data) => {
        console.log(data);
        let rawTable = data.table;
        let tableHead = rawTable.header;
        let tableData = rawTable.data.map((row, index) => {
            return {
                id: index,
                ...row,
            }
        });
        return {
            tableHead: tableHead,
            tableData: tableData
        }
    }

    closeDeTaiModal = () => {
        this.setState({ deTaiModalOpen: false });
    }

    openDeTaiModal = () => {
        this.setState({ deTaiModalOpen: true });
    }

    closeDeTaiChungModal = () => {
        this.setState({ deTaiChungModalOpen: false });
    }

    openDeTaiChungModal = () => {
        this.setState({ deTaiChungModalOpen: true });
    }

    render() {
        const { expanded } = this.state;
        const { classes } = this.props;

        const dsDeTaiGVDeXuatdata = this.rawDataToTable(this.state.dsdtgvdx);
        const dsDeTaiGVDeXuat = <MaterialTable
            // title={""}
            columns={ dsDeTaiGVDeXuatdata.tableHead }
            data={ dsDeTaiGVDeXuatdata.tableData }
            actions=
            {
                [
                    {
                        icon: 'open_in_new',
                        tooltip: 'Chi tiết',
                        onClick: (event, rowData) => {
                            this.openDeTaiModal();
                        },
                    },
                ]
            }
            options={
                {
                    actionsColumnIndex: -1,
                    filtering: true,
                    toolbar: false,
                    search: true,
                    sorting: true,
                    // selection: true,
                }
            }
            localization={ {
                pagination: {
                    labelDisplayedRows: 'Mục {from} đến {to} trong tổng số {count}', // {from}-{to} of {count}
                    labelRowsPerPage: 'Số hàng hiển thị:', // Rows per page:
                    firstAriaLabel: 'Trang đầu', // First Page
                    firstTooltip: 'Trang đầu', // First Page
                    previousAriaLabel: 'Trang trước', // Previous Page
                    previousTooltip: 'Trang trước', // Previous Page
                    nextAriaLabel: 'Trang tiếp', // Next Page
                    nextTooltip: 'Trang tiếp', // Next Page
                    lastAriaLabel: 'Trang cuối', // Last Page
                    lastTooltip: 'Trang cuối', // Last Page
                },
                toolbar: {
                    nRowsSelected: '{0} hàng được chọn', // {0} row(s) selected
                    showColumnsTitle: 'Các cột hiển thị', // Show Columns
                    showColumnsAriaLabel: 'Các cột hiển thị', // Show Columns
                    exportTitle: 'Xuất file', // Export
                    exportAriaLabel: 'Xuất file', // Export
                    exportName: 'Xuấy file CSV', // Export as CSV
                    searchTooltip: 'Tìm kiếm', // Search
                },
                header: {
                    actions: 'Hành động', // Actions
                },
                body: {
                    emptyDataSourceMessage: 'Không có dữ liệu', // No records to display
                    filterRow: {
                        filterTooltip: 'Bộ lọc', // Filter
                    },
                },
            } }
        />
        const expan1 = dsDeTaiGVDeXuat

        const expan2 = (
            <GridContainer style={ { width: "100%" } }>
                <GridItem xs={ 12 } sm={ 12 } md={ 10 }>
                    <TextField
                        id="standard-name"
                        label="Tên đề tài"
                        style={ { margin: 8 } }
                        className={ classes.textField }
                        value={ this.state.tenDeTai }
                        onChange={ this.handleChangeInput('tenDeTai') }
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
                    <FormControl style={ { margin: 8 } } fullWidth className={ classes.formControl }>
                        <InputLabel fullWidth shrink>GVHD</InputLabel>
                        <Select
                            value={ this.state.gvhd }
                            onChange={ this.handleChangeInput('gvhd') }
                            fullWidth
                        >
                            {
                                this.state.listGV.map((gv, index) => {
                                    return (
                                        <MenuItem value={ gv.id }>{ gv.tenGV }</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>
                </GridItem>
                <GridItem xs={ 12 } sm={ 12 } md={ 10 }>
                    <TextField
                        id="standard-name"
                        label="Mô tả"
                        style={ { margin: 8 } }
                        className={ classes.textField }
                        value={ this.state.moTa }
                        onChange={ this.handleChangeInput('moTa') }
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
                        multiline
                    />
                </GridItem>
                <GridItem xs={ 12 } sm={ 12 } md={ 10 }>
                    <TextField
                        id="standard-name"
                        label="Mã bảo mật"
                        style={ { margin: 8 } }
                        className={ classes.textField }
                        value={ this.state.maBaoMat }
                        onChange={ this.handleChangeInput('maBaoMat') }
                        margin="normal"
                        // disabled={ !this.state.isEditing }
                        InputProps={ {
                            // disableUnderline: !this.state.isEditing,
                            style: { "color": "black" }
                        } }
                        InputLabelProps={ {
                            shrink: true
                        } }
                        helperText="Cần mã bảo mật nếu muốn làm chung nhóm với sinh viên khác"
                        fullWidth
                        multiline
                    />
                </GridItem>

                <GridItem xs={ 12 } sm={ 12 } md={ 12 } />
                <GridItem xs={ 12 } sm={ 12 } md={ 1 }>
                    <Button color="primary">Đăng ký</Button>
                </GridItem>
            </GridContainer>
        );

        const dsDeTaiChungData = this.rawDataToTable(this.state.dsdtchung);
        const dsDeTaiChung = <MaterialTable
            // title={""}
            columns={ dsDeTaiChungData.tableHead }
            data={ dsDeTaiChungData.tableData }
            actions=
            {
                [
                    {
                        icon: 'open_in_new',
                        tooltip: 'Chi tiết',
                        onClick: (event, rowData) => {
                            this.openDeTaiChungModal();
                        },
                    },
                ]
            }
            options={
                {
                    actionsColumnIndex: -1,
                    filtering: true,
                    toolbar: false,
                    search: true,
                    sorting: true,
                    // selection: true,
                }
            }
            localization={ {
                pagination: {
                    labelDisplayedRows: 'Mục {from} đến {to} trong tổng số {count}', // {from}-{to} of {count}
                    labelRowsPerPage: 'Số hàng hiển thị:', // Rows per page:
                    firstAriaLabel: 'Trang đầu', // First Page
                    firstTooltip: 'Trang đầu', // First Page
                    previousAriaLabel: 'Trang trước', // Previous Page
                    previousTooltip: 'Trang trước', // Previous Page
                    nextAriaLabel: 'Trang tiếp', // Next Page
                    nextTooltip: 'Trang tiếp', // Next Page
                    lastAriaLabel: 'Trang cuối', // Last Page
                    lastTooltip: 'Trang cuối', // Last Page
                },
                toolbar: {
                    nRowsSelected: '{0} hàng được chọn', // {0} row(s) selected
                    showColumnsTitle: 'Các cột hiển thị', // Show Columns
                    showColumnsAriaLabel: 'Các cột hiển thị', // Show Columns
                    exportTitle: 'Xuất file', // Export
                    exportAriaLabel: 'Xuất file', // Export
                    exportName: 'Xuấy file CSV', // Export as CSV
                    searchTooltip: 'Tìm kiếm', // Search
                },
                header: {
                    actions: 'Hành động', // Actions
                },
                body: {
                    emptyDataSourceMessage: 'Không có dữ liệu', // No records to display
                    filterRow: {
                        filterTooltip: 'Bộ lọc', // Filter
                    },
                },
            } }
        />
        const expan3 = dsDeTaiChung

        return (
            <GridContainer>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={ classes.cardTitleWhite }>QUẢN LÝ TIẾN ĐỘ</h4>
                        <div style={ { float: "right" } }>
                            {
                                !this.state.isEditing ? (
                                    <IconButton onClick={ () => { this.setState({ isEditing: true }) } }>
                                        <Icon>
                                            edit
                                        </Icon>
                                    </IconButton>
                                ) : null
                            }
                        </div>
                    </CardHeader>
                    <CardBody>
                        <GridContainer>
                            <GridItem xs={ 12 } sm={ 12 } md={ 12 } >
                                <ExpansionPanel expanded={ expanded === 'panel1' } onChange={ this.handleChange('panel1') }>
                                    <ExpansionPanelSummary>
                                        <Typography>Đề tài do giảng viên đề xuất</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <div style={ { width: "100%" } }>
                                            { expan1 }
                                        </div>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel expanded={ expanded === 'panel2' } onChange={ this.handleChange('panel2') }>
                                    <ExpansionPanelSummary>
                                        <Typography>Đề tài tự đề xuất</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        { expan2 }
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel expanded={ expanded === 'panel3' } onChange={ this.handleChange('panel3') }>
                                    <ExpansionPanelSummary>
                                        <Typography>Đề tài chung với sinh viên khác</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <div style={ { width: "100%" } }>
                                            { expan3 }
                                        </div>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </GridItem>
                        </GridContainer>
                    </CardBody>
                </Card >

                <DeTaiModal open={ this.state.deTaiModalOpen } onClose={ this.closeDeTaiModal } />

                <DeTaiChungModal open={ this.state.deTaiChungModalOpen } onClose={ this.closeDeTaiChungModal } />
            </GridContainer>
        );
    }
}

export default withStyles(styles)(DangKy);
