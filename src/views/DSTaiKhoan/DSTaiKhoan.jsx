import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components

import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import CardBody from "components/Card/CardBody.jsx";

import Typography from '@material-ui/core/Typography';
import MaterialTable from 'material-table';
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


class DSTaiKhoan extends Component {
    state = {
        dstk: {
            table: {
                header: [
                    { title: 'STT', field: 'id', cellStyle: { width: '10px' }, },
                    { title: 'Tên đăng nhập', field: 'tenTK' },
                    { title: 'Mật khẩu', field: 'matkhau', filtering: false },
                    { title: 'Loại tài khoản', field: 'loai', lookup: { 1: "Sinh viên", 2: "Giảng viên", 3: "Quản lý" } },
                ],
                data: [
                    { tenTK: "ledinhsinh", matkhau: "ak47awp", loai: 1 },
                    { tenTK: "ledinhlang", matkhau: "ak47awp", loai: 1 },
                    { tenTK: "ledinhtung", matkhau: "ak47awp", loai: 1 },
                    { tenTK: "ledinhbang", matkhau: "ak47awp", loai: 1 },
                    { tenTK: "ledinhson", matkhau: "ak47awp", loai: 1 },
                    { tenTK: "lebanson", matkhau: "ak47awp", loai: 2 },
                    { tenTK: "lethanhson", matkhau: "ak47awp", loai: 2 },
                    { tenTK: "lebuison", matkhau: "ak47awp", loai: 2 },
                    { tenTK: "lefoobar", matkhau: "ak47awp", loai: 2 },
                    { tenTK: "levansong", matkhau: "ak47awp", loai: 2 },
                    { tenTK: "lengoctrong", matkhau: "ak47awp", loai: 2 },
                    { tenTK: "lecaoson", matkhau: "ak47awp", loai: 3 },
                    { tenTK: "lelyly", matkhau: "ak47awp", loai: 3 },
                    { tenTK: "ledinhsinh", matkhau: "ak47awp", loai: 3 },
                    { tenTK: "ledinhsinh", matkhau: "ak47awp", loai: 3 },
                    { tenTK: "ledinhsinh", matkhau: "ak47awp", loai: 3 },
                    { tenTK: "ledinhsinh", matkhau: "ak47awp", loai: 3 },
                ]
            },
        }
    }


    handleTabValueChange = (event, currentTabValue) => {
        this.setState({ currentTabValue });
    };

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

    render() {
        const { classes } = this.props;
        const dstkTableData = this.rawDataToTable(this.state.dstk);

        const dstkTableComponent = <MaterialTable
            // title={""}
            columns={ dstkTableData.tableHead }
            data={ dstkTableData.tableData }
            actions=
            {
                [
                    {
                        icon: 'open_in_new',
                        tooltip: 'Chi tiết',
                        onClick: (event, rowData) => {
                            // this.props.history.push("/quanlychung/dskhoa/1")
                        },
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Xóa',
                        onClick: (event, rowData) => {
                            alert('You clicked user ' + rowData.tenTK)
                        },
                    }
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

        return (
            <GridContainer>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={ classes.cardTitleWhite }>Khoa { this.state.tenKhoa }</h4>
                    </CardHeader>
                    <CardBody>
                        { dstkTableComponent }
                    </CardBody>
                </Card>
            </GridContainer>
        );
    }
}

export default withStyles(styles)(DSTaiKhoan);
