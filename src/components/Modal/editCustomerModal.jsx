import React from 'react'

const editCustomerModal = () => {
  return (
<div id="editCustomerModal" className="modal fade">
    <div className="modal-dialog">
      <div className="modal-content">
        <form>
          <div className="modal-header">						
            <h4 className="modal-title">Edit customer</h4>
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={handleClose}>×</button>
          </div>
          <div className="modal-body">					
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" required />
            </div>
            <div className="form-group">
              <label>Address</label>
              <textarea className="form-control" required defaultValue={""} />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="text" className="form-control" required />
            </div>					
          </div>
          <div className="modal-footer">
            <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
            <input type="submit" className="btn btn-info" defaultValue="Save" />
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default editCustomerModal