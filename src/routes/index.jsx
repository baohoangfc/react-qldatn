import DashboardQuanLy from "layouts/Dashboard/DashboardQuanLy.jsx";
import DashboardSinhVien from "layouts/Dashboard/DashboardSinhVien.jsx";
import DashboardGiangVien from "layouts/Dashboard/DashboardGiangVien.jsx";

const indexRoutes = 
    [
        { path: "/quanly", component: DashboardQuanLy },
        { path: "/sinhvien", component: DashboardSinhVien },
        { path: "/giangvien", component: DashboardGiangVien },
        { path: "/", component: DashboardQuanLy },
    ];

export default indexRoutes;
