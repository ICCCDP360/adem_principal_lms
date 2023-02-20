import React from 'react'
import Trophy from '../../../assests/images/trophy.svg'
import NoOfStudent from '../../../assests/images/profstudent.svg'
import Clock from "../../../assests/images/clock.svg";
import Spoc from "../../../assests/images/spoc.svg";


import './styles/Dashboard.scss'
function DashboardContent() {
  return (
    <div style={{ display:'flex',width:'100%'}}>
    <div style={{width:'100%'}}>
        <div style={{width:'100%',display:'flex'}}>
        <div className="average-container">
          <div className="average-inside-container">
            <img
              src={Trophy}
              className= "target-img"
            />
            <div className="average-content-container">
              <p
                className='average-content'
              >
                Standings
                {/* {item.lang.avergescore} */}
              </p>
              <p
                className='average-subcontent'
              >
                7/23
              </p>
            </div>
          </div>
        </div>
        <div className="average-container">
          <div className="average-inside-container">
            <img
              src={NoOfStudent}
              className= "target-img"
            />
            <div className="average-content-container">
              <p
                className='average-content'
              >
                Number of Students
                {/* {item.lang.avergescore} */}
              </p>
              <p
                className='average-subcontent'
              >
                1395
              </p>
            </div>
          </div>
        </div>
        </div>
        <div style={{width:'100%',display:'flex'}}>
        <div className="average-container">
          <div className="average-inside-container">
            <img
              src={Clock}
              className= "target-img"
            />
            <div className="average-content-container">
              <p
                className='average-content'
              >
                Total Time Spent
                {/* {item.lang.avergescore} */}
              </p>
              <p
                className='average-subcontent'
              >
                251hrs
              </p>
            </div>
          </div>
        </div>
        <div className="average-container">
          <div className="average-inside-container">
            <img
              src={Spoc}
              className= "target-img"
            />
            <div className="average-content-container">
              <p
                className='average-content'
              >
                Program SPOC
                {/* {item.lang.avergescore} */}
              </p>
              <p
                className='average-subcontent'
              >
                13
              </p>
            </div>
          </div>
        </div>
        </div>
    </div>
    <div className="average-container1">
          
        </div>
    </div>
  )
}

export default DashboardContent