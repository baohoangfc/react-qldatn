// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/DashSinhVien/UserProfile/UserProfile.jsx";
import QuanLyTienDo from "../views/QuanLyTienDo/QuanLyTienDo.jsx";
import DangKy from "views/DashSinhVien/DangKy/DangKy.jsx";
import ShowDoAn from "views/DashSinhVien/QuanLyDoAn/ShowDoAn.jsx";
import ShowBaoCao from "views/DashSinhVien/QuanLyDoAn/BaoCao/ShowBaoCao.jsx";

const dashboardRoutes = [
  {
    path: "/sinhvien/tongquan",
    sidebarName: "Tổng quan",
    navbarName: "TỔNG QUAN",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/sinhvien/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    slash: true,
  },
  {
    path: "/sinhvien/baocao/:id",
    sidebarName: "Báo cáo",
    navbarName: "Báo cáo",
    icon: BubbleChart,
    hide: true,
    component: QuanLyTienDo
  },
  {
    path: "/sinhvien/doan/chitiet/baocao/:id",
    sidebarName: "Đồ án",
    navbarName: "Đồ án",
    icon: BubbleChart,
    hide: true,
    component: ShowBaoCao
  },
  {
    path: "/sinhvien/doan",
    sidebarName: "Quản lý đồ án",
    navbarName: "Quản lý đồ án",
    icon: "content_paste",
    childLink: [
      {
        path: "/sinhvien/doan/chitiet",
        sidebarName: "Đồ án",
        navbarName: "Đồ án",
        icon: BubbleChart,
        component: ShowDoAn
      },
      {
        path: "/sinhvien/doan/dangky",
        sidebarName: "Đăng ký",
        navbarName: "Đăng ký",
        icon: LibraryBooks,
        component: DangKy
      },
    ]
  },
  { redirect: true, path: "/", to: "/sinhvien/tongquan", navbarName: "Redirect" }
];

export default dashboardRoutes;
