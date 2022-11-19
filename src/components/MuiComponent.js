import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Button,
  Container,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./styles";
import BasicModal from "./BasicModal";

const cards = [
  {
    heading : "harry puttar 1",
    body : "puttar is born",
    imgageUrl : "https://bornbabies.com/public/main_category/New%20Born%20Essential.webp"
  },
  {
    heading : "harry puttar 2",
    body : "puttar goes school",
    imgageUrl : "https://upload.wikimedia.org/wikipedia/en/8/8e/Hari_Puttar%2C_A_Comedy_of_Terrors.jpeg"
  },
  {
    heading : "harry puttar 3",
    body : "puttar goes college",
    imgageUrl : "https://img.jagranjosh.com/imported/images/E/Articles/8-Indian-college-campuses-made.jpg"
  },
  {
    heading : "harry puttar 4",
    body : "puttar gets a job",
    imgageUrl : "https://gumlet.assettype.com/film-companion/import/wp-content/uploads/2020/01/Film_Companion_TVF-Cubicles-Lead-image-1.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max"
  }
]
function MuiComponent() {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              nulla odit vel nobis laboriosam exercitationem nihil ratione
              reiciendis at? Nihil tempore unde repellendus assumenda rem, animi
              dolor impedit voluptate numquam.
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    {" "}
                    See my Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlned" color="primary">
                    {" "}
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((item,index) => (

            <Grid item key= {index} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={item.imgageUrl}
                  title={item.title}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5">
                  {item.title}
                  </Typography>
                  <Typography>
                    {item.body}
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal item={item}/>
                  <Button size="small" color="primary">
                    {" "}
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
            Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
            Something to give a footer a purpose
        </Typography>
      </footer>
    </div>
  );
}

export default MuiComponent;
