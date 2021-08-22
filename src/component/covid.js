import React, { useEffect } from 'react';

const Covid =() =>{
  
  // const getCovidData = async () => {
  //   try {
  //     const res = await fetch('https://api.covid19india.org/data.json');
  //     console.log(res);
  //   } catch (err) {

  //     console.log(err);
  //   }
  // }


  // useEffect(() => {

  //   getCovidData();
  // }, []);


  return (

<>
<section>
  <h1>LIVE</h1>
<h2>Covid-19 CORONAVIRUS TRACKER</h2>
<ul>
  <li className="card"> 
  <div className="card_main">
    <div className="card_inner">
      <p className="card_name"> <span >Our</span>Country</p>
      <p className="card_total_card_small">India </p>
    </div>

  </div>
    </li>
  </ul>
  </section>

</>

  );
};

export default Covid;