import React from 'react';

const ContentA = () => {
  return (
    <div className="container mt-1" style={{ backgroundColor: 'white' }}>
      <div className="card border-0 bg-transparent"> {/* Added border-0 class */}
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <h5 className="card-title font-weight-bold"><strong>Library Timings:</strong></h5>
              <ul className="list-unstyled">
                <li>09:00 am to 06:00 pm</li>
              </ul>
            </div>

            <div className="col-md-6">
              <h5 className="card-title font-weight-bold"><strong>Circulation Section:</strong></h5>
              <ul className="list-unstyled">
                <li>09:00 am to 04:30 pm</li>
                <li>Book Returns: 09:00 am to 04:25 pm</li>
                <li>Book Issues: 10:30 am to 04:25 pm</li>
              </ul>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              <h5 className="card-title font-weight-bold"><strong>Reference Section:</strong></h5>
              <ul className="list-unstyled">
                <li>09:00 am to 06:00 pm</li>
                <li>On Saturdays: 09:00 am to 04:30 pm (Except 1st Saturday)</li>
              </ul>
            </div>

            <div className="col-md-6">
              <h5 className="card-title font-weight-bold"><strong>Closed on:</strong></h5>
              <ul className="list-unstyled">
                <li>All Sundays</li>
                <li>1st Saturday of every Month</li>
                <li>Other Institute's Holidays</li>
              </ul>
              <p className="mt-3">
                The above-mentioned timings of the library are subject to change from time to time. Changes will be notified on the notice board.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentA;
