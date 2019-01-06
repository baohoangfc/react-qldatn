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
import UserProfile from "views/DashGiangVien/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import Auth from "../views/Auth/Auth.jsx";
import QuanLyTienDo from "../views/QuanLyTienDo/QuanLyTienDo.jsx";
import DanhSachKhoa from "views/DanhSachKhoa/DanhSachKhoa.jsx";
import ShowKhoa from "views/DanhSachKhoa/show/ShowKhoa.jsx";
import TaoTaiKhoan from "views/DSTaiKhoan/TaoTaiKhoan.jsx";
import DSTaiKhoan from "views/DSTaiKhoan/DSTaiKhoan.jsx";


const dashboardRoutes = [
  {
    path: "/giangvien/tongquan",
    sidebarName: "Tổng quan",
    navbarName: "TỔNG QUAN",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/giangvien/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    slash: true,
  },
  {
    path: "/giangvien/quanlytaikhoan",
    sidebarName: "Quản lý tài khoản",
    navbarName: "Table List",
    icon: "content_paste",
    childLink: [
      {
        path: "/giangvien/quanlytaikhoan/taotaikhoan",
        sidebarName: "Tạo tài khoản",
        navbarName: "Tạo tài khoản",
        icon: "content_paste",
        component: TaoTaiKhoan
      },
      {
        path: "/giangvien/quanlytaikhoan/danhsachtaikhoan",
        sidebarName: "Danh sách tài khoản",
        navbarName: "Danh sách tài khoản",
        icon: "content_paste",
        component: DSTaiKhoan
      }
    ]
  },
  {
    path: "/giangvien/quanlychung/dskhoa/:id",
    sidebarName: "Khoa",
    navbarName: "Khoa",
    icon: "content_paste",
    hide: true,
    component: ShowKhoa
  },// de truoc dskhoa
  {
    path: "/giangvien/quanlychung",
    sidebarName: "Quản lý chung",
    navbarName: "Table List",
    icon: "content_paste",
    childLink: [
      {
        path: "/giangvien/quanlychung/dskhoa",
        sidebarName: "Khoa",
        navbarName: "Khoa",
        icon: "content_paste",
        component: DanhSachKhoa
      },
      {
        path: "/giangvien/quanlychung/dslop",
        sidebarName: "Lớp",
        navbarName: "Lớp",
        icon: "content_paste",
        component: TableList
      },
      {
        path: "/giangvien/quanlychung/dsgv",
        sidebarName: "Giảng viên",
        navbarName: "Giảng viên",
        icon: "content_paste",
        component: TableList
      },
      {
        path: "/giangvien/quanlychung/dssv",
        sidebarName: "Sinh viên",
        navbarName: "Sinh viên",
        icon: "content_paste",
        component: TableList
      },
    ]
  },
  {
    path: "/giangvien/quanlydoan",
    sidebarName: "Quản lý đồ án",
    navbarName: "Quản lý đồ án",
    icon: "content_paste",
    childLink: [
      {
        path: "/giangvien/doan",
        sidebarName: "Quản lý đồ án",
        navbarName: "Quản lý đồ án",
        icon: LibraryBooks,
        component: Typography
      },
      {
        path: "/giangvien/phancong",
        sidebarName: "Phân công hướng dẫn",
        navbarName: "Phân công hướng dẫn",
        icon: BubbleChart,
        component: null
      },
      {
        path: "/giangvien/tiendo",
        sidebarName: "Quản lý tiến độ",
        navbarName: "Quản lý tiến độ",
        icon: BubbleChart,
        component: QuanLyTienDo
      },
      {
        path: "/giangvien/hoidongbaove",
        sidebarName: "Hội đồng bảo vệ",
        navbarName: "Hội đồng bảo vệ",
        icon: BubbleChart,
        component: null
      },
    ]
  },

  {
    path: "/giangvien/maps",
    sidebarName: "Maps",
    navbarName: "Map",
    icon: LocationOn,
    component: Maps
  },
  {
    path: "/giangvien/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  {
    path: "/giangvien/login",
    sidebarName: "Login",
    navbarName: "Login plz",
    icon: Notifications,
    component: Auth,
  },
  { redirect: true, path: "/", to: "/giangvien/tongquan", navbarName: "Redirect" }
];

export default dashboardRoutes;
