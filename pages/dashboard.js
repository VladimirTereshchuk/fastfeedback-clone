import Head from "next/head";
import useSWR from "swr";

import { useAuth } from "@/lib/auth";
import EmptyState from "@/components/SiteEmptyState";
import DashboardShell from "@/components/DashBoardShell";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import fetcher from "@/utils/fetcher";
import SiteTable from "@/components/SiteTable";

const Dashboard = (props) => {
  const auth = useAuth();
  const { data } = useSWR("api/sites", fetcher);

  // console.log(data);

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      {data.length > 0 ? <SiteTable sites={data} /> : <EmptyState />}
    </DashboardShell>
  );
};

export default Dashboard;
