import React from 'react';

export const Loading = () =>{
    return(
        <div className="col-12 loader">
            <img src='http://localhost:3000/assets/images/loader.gif' width='100px' height='100px' ></img>
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
            <p>Loading . . .</p>
        </div>
    );
}