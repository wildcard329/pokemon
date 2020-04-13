import React, {useState} from "react";

import {useStyles} from "./styles.js";

import {connect} from "react-redux";

const Header = props => {
    const classes = useStyles()
    return(
        <div>
            <div className={classes["flex-group"]}>
                {props.imagePresent ? <div className={classes["ledHeader-on"]}> 
                                        <div className={classes["glintHeader"]}></div>
                                        <div className={classes["second-glintHeader"]}></div>
                                    </div> 
                                    : <div className={classes["ledHeader-off"]}>
                                        <div className={classes["glintHeader"]}></div>
                                        <div className={classes["second-glintHeader"]}></div>
                                    </div> 
                                        }
                {props.imagePresent ? <div className={classes["ledHeader-notUsed"]}> 
                                        <div className={classes["glintHeader"]}></div>
                                        <div className={classes["second-glintHeader"]}></div>
                                    </div> 
                                    : <div className={classes["ledHeader-off"]}>
                                        <div className={classes["glintHeader"]}></div>
                                        <div className={classes["second-glintHeader"]}></div>
                                    </div> 
                                        }
                {props.imagePresent ? <div className={classes["ledHeader-notUsed"]}> 
                                        <div className={classes["glintHeader"]}></div>
                                        <div className={classes["second-glintHeader"]}></div>
                                    </div> 
                                    : <div className={classes["ledHeader-off"]}>
                                        <div className={classes["glintHeader"]}></div>
                                        <div className={classes["second-glintHeader"]}></div>
                                    </div> 
                                        }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        imagePresent: state.imagePresent
    }
}

export default connect(mapStateToProps, {}) (Header);