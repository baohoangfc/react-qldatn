// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import Auth from "../views/Auth/Auth.jsx";
import QuanLyTienDo from "../views/QuanLyTienDo/QuanLyTienDo.jsx";
import DanhSachKhoa from "views/DanhSachKhoa/DanhSachKhoa.jsx";
import ShowKhoa from "views/DanhSachKhoa/show/ShowKhoa.jsx";
import TaoTaiKhoan from "views/DSTaiKhoan/TaoTaiKhoan.jsx";
import DSTaiKhoan from "views/DSTaiKhoan/DSTaiKhoan.jsx";
import DSDoAn from "views/QuanLyDoAn/DSDoAn.jsx";
import ShowDoAn from "views/QuanLyDoAn/ShowDoAn.jsx";
import ShowBaoCao from "views/QuanLyDoAn/BaoCao/ShowBaoCao.jsx";
import DSHoiDong from "views/QuanLyDoAn/DSHoiDong.jsx";
import ShowHoiDong from "views/QuanLyDoAn/ShowHoiDong.jsx";

const dashboardRoutes = [
  {
    path: "/quanly/tongquan",
    sidebarName: "Tổng quan",
    navbarName: "TỔNG QUAN",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/quanly/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    slash: true,
  },
  {
    path: "/quanly/quanlytaikhoan",
    sidebarName: "Quản lý tài khoản",
    navbarName: "Table List",
    icon: "content_paste",
    childLink: [
      {
        path: "/quanly/quanlytaikhoan/taotaikhoan",
        sidebarName: "Tạo tài khoản",
        navbarName: "Tạo tài khoản",
        icon: "content_paste",
        component: TaoTaiKhoan
      },
      {
        path: "/quanly/quanlytaikhoan/danhsachtaikhoan",
        sidebarName: "Danh sách tài khoản",
        navbarName: "Danh sách tài khoản",
        icon: "content_paste",
        component: DSTaiKhoan
      }
    ]
  },
  {
    path: "/quanly/quanlychung/dskhoa/:id",
    sidebarName: "Khoa",
    navbarName: "Khoa",
    icon: "content_paste",
    hide: true,
    component: ShowKhoa
  },// de truoc dskhoa

  {
    path: "/quanly/quanlydoan/doan/:id/baocao/:idbaocao",
    sidebarName: "Đồ Án",
    navbarName: "Đồ Án",
    icon: "content_paste",
    hide: true,
    component: ShowBaoCao
  },// de truoc dsdoan
  {
    path: "/quanly/quanlydoan/doan/:id",
    sidebarName: "Đồ Án",
    navbarName: "Đồ Án",
    icon: "content_paste",
    hide: true,
    component: ShowDoAn
  },// de truoc dsdoan
  {
    path: "/quanly/quanlydoan/hoidongbaove/:id",
    sidebarName: "Hội đồng bảo vệ",
    navbarName: "Hội đồng bảo vệ",
    icon: "content_paste",
    hide: true,
    component: ShowHoiDong
  },// de truoc dsdoan
  {
    path: "/quanly/quanlychung",
    sidebarName: "Quản lý chung",
    navbarName: "Table List",
    icon: "content_paste",
    childLink: [
      {
        path: "/quanly/quanlychung/dskhoa",
        sidebarName: "Khoa",
        navbarName: "Khoa",
        icon: "content_paste",
        component: DanhSachKhoa
      },
      {
        path: "/quanly/quanlychung/dslop",
        sidebarName: "Lớp",
        navbarName: "Lớp",
        icon: "content_paste",
        component: TableList
      },
      {
        path: "/quanly/quanlychung/dsgv",
        sidebarName: "Giảng viên",
        navbarName: "Giảng viên",
        icon: "content_paste",
        component: TableList
      },
      {
        path: "/quanly/quanlychung/dssv",
        sidebarName: "Sinh viên",
        navbarName: "Sinh viên",
        icon: "content_paste",
        component: TableList
      },
    ]
  },
  {
    path: "/quanly/quanlydoan",
    sidebarName: "Quản lý đồ án",
    navbarName: "Quản lý đồ án",
    icon: "content_paste",
    childLink: [
      {
        path: "/quanly/quanlydoan/doan",
        sidebarName: "Quản lý đồ án",
        navbarName: "Quản lý đồ án",
        icon: LibraryBooks,
        component: DSDoAn
      },
      {
        path: "/quanly/quanlydoan/tiendo",
        sidebarName: "Quản lý tiến độ",
        navbarName: "Quản lý tiến độ",
        icon: BubbleChart,
        component: QuanLyTienDo
      },
      {
        path: "/quanly/quanlydoan/hoidongbaove",
        sidebarName: "Hội đồng bảo vệ",
        navbarName: "Hội đồng bảo vệ",
        icon: BubbleChart,
        component: DSHoiDong
      },
    ]
  },

  {
    path: "/quanly/maps",
    sidebarName: "Maps",
    navbarName: "Map",
    icon: LocationOn,
    component: Maps
  },
  {
    path: "/quanly/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  {
    path: "/quanly/login",
    sidebarName: "Login",
    navbarName: "Login plz",
    icon: Notifications,
    component: Auth,
  },
  { redirect: true, path: "/", to: "/quanly/tongquan", navbarName: "Redirect" }
];

export default dashboardRoutes;
