import {makeStyles} from '@material-ui/core';
// in the above line, we imported a makeStyles. makeStyles is a function from Material-UI that allows us to create CSS classes and rules using JavaScript objects
// Below, we created a hook useStyles which will take the classnames of various components as a prop and execute CSS styles on it.
const useStyles = makeStyles((theme)=> ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8,0,6)
    },
    icon: {
        marginRight: "20px",
    },
    buttons: {
        marginTop: '40px',
    },
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0'
    }
}))
// we need to export the hook so that we can import it in other files.
export default useStyles;