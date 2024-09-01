// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './BookRequests.css';

// const BookRequests = () => {
//   const [requests, setRequests] = useState([]);
//   const [selectedRequestId, setSelectedRequestId] = useState(null);

//   useEffect(() => {
//     fetchRequests();
//   }, []);

//   const fetchRequests = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/auth/book-requests');
//       setRequests(response.data);
//     } catch (error) {
//       console.error('Error fetching requests:', error);
//     }
//   };

//   const handleAccept = async (requestId) => {
//     try {
//       await axios.put(http://localhost:5000/api/auth/accept-request/${requestId});
//       setSelectedRequestId(requestId);
//       fetchRequests();
//     } catch (error) {
//       console.error('Error accepting request:', error);
//     }
//   };

//   const handleReject = async (requestId) => {
//     try {
//       await axios.put(http://localhost:5000/api/auth/reject-request/${requestId});
//       setSelectedRequestId(requestId);
//       fetchRequests();
//     } catch (error) {
//       console.error('Error rejecting request:', error);
//     }
//   };

//   const handleGive = async (requestId) => {
//     try {
//       await axios.put(http://localhost:5000/api/auth/given-request/${requestId});
//       setSelectedRequestId(requestId);
//       fetchRequests();
//     } catch (error) {
//       console.error('Error marking as given:', error);
//     }
//   };

//   const handleReturn = async (requestId) => {
//     try {
//       await axios.put(http://localhost:5000/api/auth/received-request/${requestId});
//       setSelectedRequestId(requestId);
//       fetchRequests();
//     } catch (error) {
//       console.error('Error marking as received:', error);
//     }
//   };

//   return (
//     <div className="book-requests">
//       <h2>Book Requests</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Book</th>
//             <th>Student Roll</th>
//             <th>Student Name</th>
//             <th>Requested At</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {requests.map((request) => (
//             <tr key={request._id}>
//               <td>{request.selectedBooks.length > 0 ? request.selectedBooks[0].title : 'Book N/A'}</td>
//               <td>{request.studentRoll}</td>
//               <td>{request.studentName}</td>
//               <td>{new Date(request.requestedAt).toLocaleString()}</td>
//               <td className={selectedRequestId === request._id ? 'highlight-status' : ''}>
//                 {request.status}
//               </td>
//               <td>
//                 <button onClick={() => handleAccept(request._id)} className="btn btn-success mr-2">
//                   Accept
//                 </button>
//                 <button onClick={() => handleReject(request._id)} className="btn btn-danger mr-2">
//                   Reject
//                 </button>
//                 <button onClick={() => handleGive(request._id)} className="btn btn-primary mr-2">
//                   Given
//                 </button>
//                 <button onClick={() => handleReturn(request._id)} className="btn btn-warning">
//                   Received
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BookRequests;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BookRequests.css';

const BookRequests = () => {
  const [requests, setRequests] = useState([]);
  const [selectedRequestId, setSelectedRequestId] = useState(null);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/book-requests');
      const updatedRequests = response.data.map((request) => ({
        ...request,
        givenTime: null,
        daysLeft: null,
      }));
      setRequests(updatedRequests);
    } catch (error) {
      console.error('Error fetching requests:', error);
    }
  };

  const calculateDaysLeft = (request) => {
    const requestDate = new Date(request.requestedAt);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - requestDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24)); // Calculating days difference

    const daysAllowed = 21; // Assuming 21 days are allowed for returning the book

    let daysLeft = daysAllowed - daysDifference;
    if (daysLeft < 0) {
      daysLeft = 0; // Prevent negative days left
    }

    return daysLeft;
  };

  const calculateFine = (request) => {
    const daysLeft = calculateDaysLeft(request);
    const finePerDay = 2; // Assuming a fine of $2 per day for late return
    const daysAllowed = 21; // Days after which the fine starts
  
    // Calculate the days difference after the allowed period
    const daysAfterAllowedPeriod = daysLeft > daysAllowed ? daysLeft - daysAllowed : 0;
  
    // Calculate fine only if days after the allowed period exist
    const fine = daysAfterAllowedPeriod * finePerDay; // Calculate fine based on remaining days
  
    return fine;
  };

  const handleAccept = async (requestId) => {
    try {
      await axios.put(`http://localhost:5000/api/auth/accept-request/${requestId}`);
      setSelectedRequestId(requestId);
      fetchRequests();
    } catch (error) {
      console.error('Error accepting request:', error);
    }
  };

  const handleReject = async (requestId) => {
    try {
      await axios.put(`http://localhost:5000/api/auth/reject-request/${requestId}`);
      setSelectedRequestId(requestId);
      fetchRequests();
    } catch (error) {
      console.error('Error rejecting request:', error);
    }
  };

  const handleGive = async (requestId) => {
    try {
      await axios.put(`http://localhost:5000/api/auth/given-request/${requestId}`);
      setRequests((prevRequests) =>
        prevRequests.map((request) =>
          request._id === requestId ? { ...request, givenTime: new Date(), daysLeft: 21 } : request
        )
      );
      setSelectedRequestId(requestId);
    } catch (error) {
      console.error('Error marking as given:', error);
    }
  };

  const handleReturn = async (requestId) => {
    try {
      await axios.put(`http://localhost:5000/api/auth/received-request/${requestId}`);
      setRequests((prevRequests) =>
        prevRequests.map((request) =>
          request._id === requestId ? { ...request, givenTime: null, daysLeft: null } : request
        )
      );
      setSelectedRequestId(requestId);
    } catch (error) {
      console.error('Error marking as received:', error);
    }
  };

  return (
    <div className="book-requests">
      <h2>Book Requests</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Book</th>
            <th>Student Roll</th>
            <th>Student Name</th>
            <th>Requested At</th>
            <th>Status</th>
            <th>Actions</th>
            <th>Days Left for Fine</th>
            <th>Fine</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request._id}>
              <td>{request.selectedBooks.length > 0 ? request.selectedBooks[0].title : 'Book N/A'}</td>
              <td>{request.studentRoll}</td>
              <td>{request.studentName}</td>
              <td>{new Date(request.requestedAt).toLocaleString()}</td>
              <td className={selectedRequestId === request._id ? 'highlight-status' : ''}>
                {request.status}
              </td>
              <td>
                <button onClick={() => handleAccept(request._id)} className="btn btn-success mr-2">
                  Accept
                </button>
                <span> </span>
                <button onClick={() => handleReject(request._id)} className="btn btn-danger mr-2">
                  Reject
                </button>
                <span> </span>
                <button onClick={() => handleGive(request._id)} className="btn btn-primary mr-2">
                  Given
                </button>
                <span> </span>
                <button onClick={() => handleReturn(request._id)} className="btn btn-warning">
                  Received
                </button>
              </td>
              <td>{request.daysLeft !== null ? request.daysLeft : calculateDaysLeft(request) || 'N/A'}</td>
              <td>{calculateFine(request) || 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookRequests;