import * as React from "react";
import Logo from "../images/horus.png";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

// markup
const IndexPage = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <main>
        <img src={Logo} alt="God Horus" width="100" height="100" />
        <title>Home Page</title>
        <h1>
          Horus
        </h1>
      </main>
      <Grid container spacing={2} className={classes.root} direction="row" justify="center"
  alignItems="center">
        <Grid item xs={12}>
          Shiba Inu
        </Grid>
        <Grid item xs={12}>
          Bezoge
        </Grid>
      </Grid>
    </Container>
  );
};

export default IndexPage;
