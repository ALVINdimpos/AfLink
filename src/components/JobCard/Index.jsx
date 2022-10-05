import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
const Index = () => {
  return (
 <div className='w-50 p-3 m-auto bg-white shadow md:shadow-lg'>
  <h1 className=' text-center text-red-500 mb-6 text-2xl font-extrabold'>Job Card</h1>
  <div className="row">
    <div className="col">
      <div className="form-outline">
      <label className="form-label" htmlFor="form8Example1">Order Number:</label>
        <input type="number" id="form8Example1" className="form-control" />
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
      <label className="form-label" htmlFor="form8Example2">Date:</label>
        <input type="date" id="form8Example2" className="form-control" />
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col">
      <div className="form-outline">
      <label className="form-label" htmlFor="form8Example1">Payment Method:</label>
      <select class="form-select" aria-label="Default select example">
          <option selected>select</option>
          <option value="1">Debit cards.</option>
           <option value="2">Cash.</option>
           <option value="3">  Mobile payments. </option>
           <option value="3">   Electronic bank transfers. </option>
      </select>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
      <label className="form-label" htmlFor="form8Example2">Contact Number:</label>
        <input type="tel" id="form8Example2" className="form-control" />
      </div>
    </div>
  </div>
  <div className="col">
      <div className="form-outline">
      <label className="form-label" htmlFor="form8Example2">Customer:</label>
        <input type="text" id="form8Example2" className="form-control" />
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
      <label className="form-label" htmlFor="form8Example2">Job Description:</label>
      <textarea id="form10" class="md-textarea form-control" rows="2"></textarea>
      </div>
    </div>
    <div className="row mt-1">
       <div className="col-1">
      <div className="form-outline">
      <label className="form-label" htmlFor="form8Example1">#</label>
        1.
      </div>
       </div>
      <div className="col-3">
      <div className="form-outline">
      <label className="form-label" htmlFor="form8Example2">Description:</label>
        <input type="text" id="form8Example2" className="form-control" />
      </div>
       </div>
      <div className="col-3">
      <div className="form-outline">
      <label className="form-label" htmlFor="form8Example2">Material:</label>
        <input type="text" id="form8Example2" className="form-control" />
      </div>
    </div>
    <div className="col-2">
      <div className="form-outline">
      <label className="form-label" htmlFor="form8Example2">QTY:</label>
        <input type="number" id="form8Example2" className="form-control" />
      </div>
    </div>
    <div className="col-2">
      <div className="form-outline">
      <label className="form-label" htmlFor="form8Example2">Width:</label>
        <input type="number" id="form8Example2" className="form-control" />
      </div>
    </div>
    <div className="col-1">
      <div className="form-outline ">
      <label className="form-label " htmlFor="form8Example2">Del:</label>
      <AiFillDelete  className=''size={30} color="red"/>
      </div>
    </div>
  </div>
  <button className='btn  mt-2 float-end bg-red-600 text-white'>Add item</button>
  <div className="row mt-14">
    <div className="col">
      <div className="form-outline">
      <label className="form-label" htmlFor="form8Example1">Received by:</label>
        <input type="text" id="form8Example1" className="form-control" disabled value="Alvin Fiston" />
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
      <label className="form-label" htmlFor="form8Example2">Aproved by:</label>
        <input type="text" id="form8Example2" className="form-control" disabled value="Niyigena" />
      </div>
    </div>
  </div>
  <div className="row mt-1">
    <div className="col">
    </div>
    <div className="col">
      <div className="form-outline">
      <button className='btn  mt-2 float-end bg-red-600 text-white'>Add item</button>
      </div>
    </div>
  </div>
</div>

  )
}

export default Index