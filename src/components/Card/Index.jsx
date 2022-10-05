import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Style.css"
import { FaList } from 'react-icons/fa';
import {FcApprove} from 'react-icons/fc'

const Index = () => {
  return (
<div className="container">
  <div className="row">
    <div className="col-md-4 col-xl-3">
      <div className="card bg-c-blue order-card">
        <div className="card-block">
          <h6 className="m-b-20">Orders Received</h6>
          <h2 className="text-right"><FaList className='f-left pt-1 text-black' /><span>486</span></h2>
          <p className="m-b-0">Completed Orders<span className="f-right">351</span></p>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-xl-3">
      <div className="card bg-c-green order-card">
        <div className="card-block">
          <h6 className="m-b-20">Aproved orders</h6>
          <h2 className="text-right"><FcApprove  className='f-left pt-1 text-black '  /><span>486</span></h2>
          <p className="m-b-0">Pending orders<span className="f-right">351</span></p>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-xl-3">
      <div className="card bg-c-yellow order-card">
        <div className="card-block">
          <h6 className="m-b-20">Orders Received</h6>
          <h2 className="text-right"><i className="fa fa-refresh f-left" /><span>486</span></h2>
          <p className="m-b-0">Completed Orders<span className="f-right">351</span></p>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-xl-3">
      <div className="card bg-red-500 order-card">
        <div className="card-block">
          <h6 className="m-b-20">Orders Received</h6>
          <h2 className="text-right"><i className="fa fa-credit-card f-left" /><span>486</span></h2>
          <p className="m-b-0">Completed Orders<span className="f-right">351</span></p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Index