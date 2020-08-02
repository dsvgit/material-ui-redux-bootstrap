import React from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import useFetch from "use-http";

import AppLayout from "../../components/AppLayout";

function FilmsList() {
  const { data, loading } = useFetch("/films/", {}, []);

  if (loading) {
    return "loading";
  }

  return (
    <List>
      {data.results.map(film => (
        <ListItem>
          <ListItemText primary={film.title} />
        </ListItem>
      ))}
    </List>
  );
}

function DashboardPage() {
  return (
    <AppLayout>
      <Typography>This is my dashboard</Typography>
      <FilmsList />
    </AppLayout>
  );
}

export default DashboardPage;
