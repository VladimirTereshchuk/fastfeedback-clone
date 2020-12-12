import Head from "next/head";
import useSWR from "swr";

import { useAuth } from "@/lib/auth";
import EmptyState from "@/components/SiteEmptyState";
import DashboardShell from "@/components/DashBoardShell";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import fetcher from "@/utils/fetcher";
import SiteTable from "@/components/SiteTable";
import SiteTableHeader from "@/components/SiteTableHeader";

const Dashboard = () => {
  const { user } = useAuth();
  // const { data } = useSWR("api/sites", fetcher);
  const { data } = useSWR(user ? ["api/sites", user.token] : null, fetcher);
  const sites = data?.sites;
  // console.log(data);

  if (!sites) {
    return (
      <DashboardShell>
        <SiteTableHeader />
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }
  // if (sites.length) {
  return (
    <DashboardShell>
      <SiteTableHeader />

      {sites.length > 0 ? <SiteTable sites={sites} /> : <EmptyState />}
    </DashboardShell>
  );
  // }
};

export default Dashboard;
