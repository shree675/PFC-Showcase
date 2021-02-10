import React, {useEffect, useState} from 'react';
import { Jumbotron } from 'react-bootstrap';
// import styled from 'styled-components';

const HeroBanner = (props) => {

    const linksList=props.links;
    const numberOfImages=linksList.length;
    const url=linksList[0];
    const pagename=props.pagename;
    // const [j,setIndex] = useState(0);
    var j=-1;

    const [cururl,setCururl] = useState(url);

    setInterval(()=>{
        j=(j+1)%numberOfImages;
        setCururl(linksList[j]);
    },3000);

    return (
        <div className="j-shr">

            <div className="container-shr"> 
                <h1 className="display-2"><b>{pagename}</b></h1>
            </div>

            <Jumbotron id="Jumbotron-shr" className="container=shr" style={{backgroundImage:
            `linear-gradient(
                rgba(0, 0, 0, 0.45), 
                rgba(0, 0, 0, 0.45)
                ),
                url(${cururl})`}}>
                
            </Jumbotron>

        </div>

    );
}

export default HeroBanner;