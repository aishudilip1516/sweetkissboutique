import React from "react"
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';
import '../App.css'
import './ImageWithLink.module.css'


const ImageWithLink  = (props) => {

    return (<>
        <br/>
        <br/>
    <Link href={props.link} >
          <img src={props.imgSrc}  alt="logo" />
        </Link>
        <Typography>
          {props.appName}
        </Typography>
    </>)

}

export default ImageWithLink