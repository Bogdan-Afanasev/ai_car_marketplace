import { getDashboardData } from "@/actions/admin";
import React from "react";
import Dashboard from "./_components/dashboard";

export const metadata = {
  title: "Dashboard | ACM Admin",
  description: "Admin dashboard for ACM car marketplace",
};

const AdminPage = async () => {
  const dashboardData = await getDashboardData();

  return (
    <div className="p-6">
      <div className="text-2xl font-bold mb-6">Dashboard</div>
      <Dashboard initialData={dashboardData} />
    </div>
  );
};

export default AdminPage;
