import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Style.css"
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { IoIosAddCircle } from 'react-icons/io';
import Modal from 'react-bootstrap/Modal';
import AddCustomerModal from '../Modal/addCustomerModal';
import EditCustomerModal from '../Modal/editCustomerModal';
import DeleteCustomerModal from '../Modal/deleteCustomerModal';


const Index = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
<div>
  <div className="container-xl">
    <div className="table-responsive">
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-6">
              <h2>Manage <b>customer</b></h2>
            </div>
            <div className="col-sm-6">
              <button className="btn btn-success btn-circle btn-xl" data-toggle="modal" onClick={handleShow} ><IoIosAddCircle /> </button>
              <a href="#deleteCustomerModal" className="btn btn-danger" data-toggle="modal"><AiFillDelete/></a>						
            </div>
          </div>
        </div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>
                <span className="custom-checkbox">
                  <input type="checkbox" id="selectAll" />
                  <label htmlFor="selectAll" />
                </span>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="custom-checkbox">
                  <input type="checkbox" id="checkbox1" name="options[]" defaultValue={1} />
                  <label htmlFor="checkbox1" />
                </span>
              </td>
              <td>Thomas Hardy</td>
              <td>thomashardy@mail.com</td>
              <td>89 Chiaroscuro Rd, Portland, USA</td>
              <td>(171) 555-2222</td>
              <td>
                <button href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit" onClick={handleShow }><AiFillEdit /></i></button>
                <button href="#deleteCustomerModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete" onClick={handleShow } ><AiFillDelete/></i></button>
              </td>
            </tr>
            <tr>
              <td>
                <span className="custom-checkbox">
                  <input type="checkbox" id="checkbox2" name="options[]" defaultValue={1} />
                  <label htmlFor="checkbox2" />
                </span>
              </td>
              <td>Dominique Perrier</td>
              <td>dominiqueperrier@mail.com</td>
              <td>Obere Str. 57, Berlin, Germany</td>
              <td>(313) 555-5735</td>
              <td>
                <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"><AiFillEdit /></i></a>
                <a href="#deleteCustomerModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"><AiFillDelete/></i></a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="custom-checkbox">
                  <input type="checkbox" id="checkbox3" name="options[]" defaultValue={1} />
                  <label htmlFor="checkbox3" />
                </span>
              </td>
              <td>Maria Anders</td>
              <td>mariaanders@mail.com</td>
              <td>25, rue Lauriston, Paris, France</td>
              <td>(503) 555-9931</td>
              <td>
                <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"><AiFillEdit /></i></a>
                <a href="#deleteCustomerModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"><AiFillDelete/></i></a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="custom-checkbox">
                  <input type="checkbox" id="checkbox4" name="options[]" defaultValue={1} />
                  <label htmlFor="checkbox4" />
                </span>
              </td>
              <td>Fran Wilson</td>
              <td>franwilson@mail.com</td>
              <td>C/ Araquil, 67, Madrid, Spain</td>
              <td>(204) 619-5731</td>
              <td>
                <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"><AiFillEdit /></i></a>
                <a href="#deleteCustomerModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"><AiFillDelete/></i></a>
              </td>
            </tr>					
            <tr>
              <td>
                <span className="custom-checkbox">
                  <input type="checkbox" id="checkbox5" name="options[]" defaultValue={1} />
                  <label htmlFor="checkbox5" />
                </span>
              </td>
              <td>Martin Blank</td>
              <td>martinblank@mail.com</td>
              <td>Via Monte Bianco 34, Turin, Italy</td>
              <td>(480) 631-2097</td>
              <td>
                <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"><AiFillEdit /></i></a>
                <a href="#deleteCustomerModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"><AiFillDelete/></i></a>
              </td>
            </tr> 
          </tbody>
        </table>
        <div className="clearfix">
          <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
          <ul className="pagination">
            <li className="page-item disabled"><a href="#">Previous</a></li>
            <li className="page-item"><a href="#" className="page-link">1</a></li>
            <li className="page-item"><a href="#" className="page-link">2</a></li>
            <li className="page-item active"><a href="#" className="page-link">3</a></li>
            <li className="page-item"><a href="#" className="page-link">4</a></li>
            <li className="page-item"><a href="#" className="page-link">5</a></li>
            <li className="page-item"><a href="#" className="page-link">Next</a></li>
          </ul>
        </div>
      </div>
    </div>        
  </div>
  <Modal  show={show}>
   <AddCustomerModal />
  </Modal>
</div>

  )
}

export default Index