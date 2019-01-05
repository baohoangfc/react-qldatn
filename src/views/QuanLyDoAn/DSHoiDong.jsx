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


class DSHoiDong extends Component {
    state = {
        dstk: {
            table: {
                header: [
                    { title: 'STT', field: 'id', cellStyle: { width: '10px' }, },
                    {
                        title: 'Khoa', field: 'tenKhoa', lookup:
                        {
                            1: "Công nghệ thông tin",
                            2: "Công nghệ thông báo",
                            3: "Công nghệ thông cống",
                            4: "Công nghệ thông đồ án",
                            5: "Công nghệ thông thái",
                        }
                    },
                    { title: 'SLSV', field: 'slsv' },
                    { title: 'SLGV', field: 'slgv' },
                    { title: 'Phòng', field: 'phong' },
                    { title: 'Thời gian', field: 'thoiGian' },
                ],
                data: [
                    { tenKhoa: 1, slsv: 15, slgv: 6, phong: "H101", thoiGian: new Date().toJSON().substr(0,10) },
                    { tenKhoa: 1, slsv: 12, slgv: 6, phong: "H102", thoiGian: new Date().toJSON().substr(0,10) },
                    { tenKhoa: 1, slsv: 11, slgv: 6, phong: "H103", thoiGian: new Date().toJSON().substr(0,10) },
                    { tenKhoa: 2, slsv: 14, slgv: 6, phong: "H104", thoiGian: new Date().toJSON().substr(0,10) },
                    { tenKhoa: 2, slsv: 12, slgv: 6, phong: "H105", thoiGian: new Date().toJSON().substr(0,10) },
                    { tenKhoa: 3, slsv: 13, slgv: 6, phong: "H106", thoiGian: new Date().toJSON().substr(0,10) },
                    { tenKhoa: 3, slsv: 15, slgv: 6, phong: "H107", thoiGian: new Date().toJSON().substr(0,10) },
                    { tenKhoa: 4, slsv: 16, slgv: 6, phong: "H108", thoiGian: new Date().toJSON().substr(0,10) },
                    { tenKhoa: 4, slsv: 17, slgv: 6, phong: "H109", thoiGian: new Date().toJSON().substr(0,10) },
                    { tenKhoa: 5, slsv: 11, slgv: 6, phong: "H110", thoiGian: new Date().toJSON().substr(0,10) },
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
                            this.props.history.push("/quanly/quanlydoan/hoidongbaove/1")
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
                        <h4 className={ classes.cardTitleWhite }>DANH SÁCH HỘI ĐỒNG</h4>
                    </CardHeader>
                    <CardBody>
                        { dstkTableComponent }
                    </CardBody>
                </Card>
            </GridContainer>
        );
    }
}

export default withStyles(styles)(DSHoiDong);
