import InstagramIcon from "@material-ui/icons/Instagram";
import Typography from "@material-ui/core/Typography";
import {Link} from "@material-ui/core";
import React from "react";

const IconWithLink = (props) => {

    return (
        <>
            <br/>
            <br/>
            <Link href={props.link} underline="none">
                {props.imgSrc}
                <Typography>
                    {props.appName}
                </Typography>
            </Link>
        </>
    )

}

export default IconWithLink