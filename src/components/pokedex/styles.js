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
            borderRadius: "50%",
            borderRight: "1px soldi black",
            borderBottom: "1px solid black"
        },
        "led-available": {
            background: "blue",
            height: "15px",
            width: "15px",
            borderRadius: "50%",
            borderRight: "1px soldi black",
            borderBottom: "1px solid black"
        },
        "led-notViewed": {
            background: "rgb(255, 50, 50)",
            height: "15px",
            width: "15px",
            borderRadius: "50%",
            borderRight: "1px soldi black",
            borderBottom: "1px solid black"
        },
        "led-viewed": {
            background: "green",
            height: "15px",
            width: "15px",
            borderRadius: "50%",
            borderRight: "1px soldi black",
            borderBottom: "1px solid black"
        },
        "led-viewing": {
            background: "green",
            height: "15px",
            width: "15px",
            borderRadius: "50%",
            borderRight: "1px soldi black",
            borderBottom: "1px solid black"
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
        },
        "ledHeader-off": {
            height: "30px",
            width: "30px",
            background: "darkred",
            borderRadius: "50%",
            marginLeft: "3%",
            marginTop: "2%",
            borderBottom: "1px solid black",
            borderRight: "1px solid black"
        },
        "ledHeader-on": {
            height: "30px",
            width: "30px",
            background: "blue",
            borderRadius: "50%",
            marginLeft: "3%",
            marginTop: "2%",
            borderBottom: "1px solid black",
            borderRight: "1px solid black"
        },
        "ledHeader-notUsed": {
            height: "30px",
            width: "30px",
            background: "rgb(255, 50, 50)",
            borderRadius: "50%",
            marginLeft: "3%",
            marginTop: "2%",
            borderBottom: "1px solid black",
            borderRight: "1px solid black"
        },
        "glintHeader": {
            background: "white",
            height: "6px",
            width: "10px",
            marginLeft: "40%",
            marginTop: "10%",
            borderRadius: "50%"
        },
        "second-glintHeader": {
            background: "white",
            opacity: ".6",
            height: "12px",
            width: "8px",
            borderRadius: "50%",
            marginLeft: "70%",
            marginTop: "10%"
        }
    }
})