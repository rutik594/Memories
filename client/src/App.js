import React,{useEffect,useState} from "react";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";
import {getPosts} from './actions/posts'
import { useDispatch } from "react-redux";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [currentId,setCurrentId]=useState(null)
  useEffect(() => {
    dispatch(getPosts());
  },[dispatch])
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography
          className={classes.heading}
          variant="h2"
          align="center"
        ></Typography>
        <img
          className={classes.image}
          src="/images/memories.png"
          alt="memories"
          height="60"
        ></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form setCurrentId={setCurrentId} currentId={currentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};
export default App;
