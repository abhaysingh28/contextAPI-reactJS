import React from 'react';
import {data} from "./App"

const Child2 = () => {
  return (
    <>
    <data.Consumer>
        {
            (name)=>{
                return(
                <h1>my name is {name}</h1>
                )
            }
        }
    </data.Consumer>
      
    </>
  );
}

export default Child2;
