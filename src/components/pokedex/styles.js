import {makeStyles} from "@material-ui/styles";

export const useStyles = makeStyles(() => {
    return {
        "image-display": {
            background:  "gray",
            width: "450%",
            marginTop: "20%",
            marginLeft: "10%"
        },
        "list-display": {
            opacity: ".6",
            background: "lightgray",
            width: "30%",
            padding: "2%",
            marginLeft: "3%",
            marginTop: "4%",
            borderBottom: "2px solid white",
            borderRight: "2px solid white"
        },
        "led-off": {
            background: "darkred",
            height: "15px",
            width: "15px",
            borderRadius: "50%"
        },
        "list-light": {
            background: "darkred",
            height: "15px",
            width: "15px",
            borderRadius: "50%"
        },
        "flex-group": {
            display: "flex",
            alignItems: "space-between"
        },
        "glint": {
            background: "white",
            height: "2px",
            width: "2px",
            marginLeft: "47%",
            marginTop: "47%"
        },
        "stat-display": {
            background: 'lightgray',
            marginRight: "8%",
            padding: '2%'
        }
    }
})