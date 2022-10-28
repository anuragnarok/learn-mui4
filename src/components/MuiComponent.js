import React from 'react'
import {Typography,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Button,Container} from '@material-ui/core';
import {PhotoCamera} from '@material-ui/icons';
import useStyles from './styles';
function MuiComponent() {
    const classes = useStyles()
  return (
    <div>
        <CssBaseline/>
        <AppBar position='relative'>
            <Toolbar>
                <PhotoCamera/>
                <Typography variant='h6'>
                    Photo Album
                </Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div className={classes.container}>
                <Container maxWidth='sm' >
                    <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                        Photo Album
                    </Typography>
                    <Typography variant='h5' align='center' color='textSecondary' paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nulla odit vel nobis laboriosam exercitationem nihil ratione reiciendis at? Nihil tempore unde repellendus assumenda rem, animi dolor impedit voluptate numquam.
                    </Typography>
                    <div>
                        <Grid container spacing={2} justify= 'center'>
                            <Grid item>
                                <Button variant='contained' color='primary'> See my Photos</Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlned' color='primary'> Secondary action</Button>
                            </Grid>
                            


                        </Grid>
                    </div>
                </Container>
            </div>
        </main>
    </div>
  )
}

export default MuiComponent