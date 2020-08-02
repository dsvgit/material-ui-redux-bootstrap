import React, { Suspense } from "react";
import { Typography } from "@material-ui/core";
import useFetch from "use-http";

import AppLayout from "../../components/AppLayout";

function FilmsList() {
  const { data } = useFetch(
    "/films",
    {
      suspense: true
    },
    []
  );

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

function DashboardPage() {
  return (
    <AppLayout>
      <Typography>This is my dashboard</Typography>
      <Suspense fallback="loading">
        <FilmsList />
      </Suspense>
    </AppLayout>
  );
}

export default DashboardPage;
