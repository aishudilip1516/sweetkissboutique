import React from "react"
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';


const ImageWithLink  = (props) => {

    return (<>
    {/* <Link href="https://www.etsy.com/shop/SweetKissBoutique" > */}
    <Link href={props.link} >
          <img src={props.imgSrc} className="logo-weight" alt="logo" />
        </Link>
        <Typography>
          {props.appName}
        </Typography>
        <br />
        <br />
    </>)

}

export default ImageWithLink