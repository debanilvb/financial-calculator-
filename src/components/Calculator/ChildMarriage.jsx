import React, { useEffect, useState } from "react";
import "./ChildMarriage.css";
import Slider from "@material-ui/core/Slider";
import Box from "@material-ui/core/Box";
import {format} from "indian-number-format"
// import Slider from "@material-ui/core/Slider";
// import Box from "@material-ui/core/Box";

const ChildMarriage = () => {
  const [currentCost, setCurrentCost ] = useState(500000)
  const [inflation, setInflation] = useState(1);
  const [currentAge, setCurrentAge] = useState(10);
  const [requiredAge, setRequiredAge] = useState(25);
  const [returnRate, setReturnRate] = useState(1);
  
    //output variables
    const [futureCost, setFutureCost] = useState(0);
    const [monthlyInvestment, setMonthlyInvestment] = useState(0);
  

  const handleChange1=(e, value) => {
    setCurrentCost(value)
  }
  const handleChange2=(e, value) => {
    setInflation(value)
  }
  const handleChange3  = (e, value) => {
    setCurrentAge(value)
    if(requiredAge < value){
      setRequiredAge(value)
    }
  }
  const handleChange4 = (e, value) => {
    setRequiredAge(value);
    if(value < currentAge){
      setCurrentAge(value)
    }
  }
  const handleChange5 = (event, value) => {
    setReturnRate(value);
  };


  useEffect(()=>{
    //the calculation occurs here
    let f_cost, m_invest;
    f_cost = currentCost*Math.pow(1+inflation/100, requiredAge-currentAge)
    let r = returnRate;
    r = r/1200;
    m_invest = f_cost/(((Math.pow(1+r, (requiredAge-currentAge)*12)-1)/r)*(r+1));
    setFutureCost(parseInt(f_cost));
    setMonthlyInvestment(parseInt(m_invest))
  },
  [currentAge, currentCost, inflation, requiredAge, returnRate])

  return (
    <div className="debanil-lawri">
     <h1 className="hedarf">Child Marriage Calculator</h1>
      {/* <div>hello</div> */}
      <div className="marriage">
     
        <div className="marriageinput">
          <div className="marriageheading">
            Systematic Investment Plan (SIP) allows you to make small investment at regular
            intervals to help you achieve your dreams.
          </div>
          <div className="marrigeslider">
            <div className="goalinfo-title-text">
              <h1>How much do you plan to spend on your child marriage</h1>
              <div className="marrigeinfo-title-text-sub"> 
              <span>&#8377;</span> 
              <input type="number" placeholder="0" onChange={(e) => setCurrentCost(e.target.value)} value={currentCost} />
              </div>
            </div>
            <Box >
              <Slider
                aria-label="Volume"
                value={currentCost}
                onChange={handleChange1}
               
                max={2000000}
              />
            </Box>
          </div>
          <div className="marrigeslider">
            <div className="goalinfo-title-text">
              <h1>Inflation Rate</h1>
              <div className="marrigeinfo-title-text-sub">
              
              <input type="number" placeholder="0" onChange={(e) => setInflation(e.target.value)} value={inflation} />
              <span>% </span> 
              </div>
            </div>
            <Box >
              <Slider
                aria-label="Volume"
                value={inflation}
                onChange={handleChange2}
               
                max={50}
              />
            </Box>
          </div>
          <div className="marrigeslider">
            <div className="goalinfo-title-text">
              <h1>Age</h1>
              <div className="marrigeinfo-title-text-sub">
              <input type="number" placeholder="0" onChange={(e) => setCurrentAge(e.target.value)} value={currentAge} />                
                 
              <span>&nbsp;Y</span>
              </div>
            </div>
            <Box >
              <Slider
                aria-label="Volume"
                value={currentAge}
                onChange={handleChange3}
               
                max={100}
              />
            </Box>
          </div>
          <div className="marrigeslider">
            <div className="goalinfo-title-text">
              <h1>Expected Age of marriage of your child</h1>
              <div className="marrigeinfo-title-text-sub">
                 <input type="number" placeholder="0" onChange={(e) => setRequiredAge(e.target.value)} value={requiredAge} />
                 
                <span> &nbsp;Y </span>
              </div>
            </div>
            <Box >
              <Slider
                aria-label="Volume"
                value={requiredAge}
                onChange={handleChange4}
               
                max={100}
              />
            </Box>
          </div>
          <div className="marrigeslider">
            <div className="goalinfo-title-text">
              <h1>Expected Investment Returns</h1>
              <div className="marrigeinfo-title-text-sub"> 
              <input type="number" placeholder="0" onChange={(e) => setReturnRate(e.target.value)} value={returnRate} />
              <span>&nbsp;%</span>
              </div>
            </div>
            <Box >
              <Slider
                aria-label="Volume"
                value={returnRate}
                onChange={handleChange5}
               
                max={50}
              />
            </Box>
          </div>

          </div>
          
        <div className="marriageinfos">
          <div className="marriageinfo">
            <div className="marriageinfo-title">
              <h1 >
                Full cost of your child marriage{" "}
              </h1>
              <h2>&#8377;  {format(futureCost)}</h2>
            </div>
            <div className="marriageinfo-title">
              <h1 >
                Monthly Investments Required{" "}
              </h1>
              <h2>&#8377; {format(monthlyInvestment)}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildMarriage;
