// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Table, Button } from 'antd';
// import { DeleteOutlined } from '@ant-design/icons';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const BookHistory = () => {
//   const [requestedBooks, setRequestedBooks] = useState([]);
//   const token = localStorage.getItem('token');
//   const storedStudent = JSON.parse(localStorage.getItem('Student'));
//   const studentRoll = storedStudent ? storedStudent.roll : null;

//   useEffect(() => {
//     if (token && studentRoll) {
//       fetchRequestedBooks(studentRoll);
//     }
//   }, [token, studentRoll]);

//   const fetchRequestedBooks = async (roll) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/auth/requested_books/${roll}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setRequestedBooks(response.data);
//     } catch (error) {
//       console.error('Error fetching requested books:', error);
//     }
//   };

//   const handleCancelRequest = async (bookId) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/auth/deleteBook/${bookId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       fetchRequestedBooks(studentRoll);
//     } catch (error) {
//       console.error('Error canceling request:', error);
//     }
//   };

//   const calculateDaysLeft = (requestedAt, status) => {
//     if (status === 'Taken') {
//       // ... (unchanged)
//     }
//     return 'N/A'; // Default value for other statuses
//   };

//   const calculateFine = (requestedAt, status) => {
//     if (status === 'Taken') {
//       // ... (unchanged)
//     }
//     return 0; // Default value when status is not 'Taken'
//   };

//   return (
//     <div className="book-history-container">
//       <h2>Requested Books</h2>
//       <Table dataSource={requestedBooks} bordered>
//         <Table.Column title="Serial No" dataIndex="serial" key="serial" width={70} />
//         <Table.Column title="Book Name" dataIndex="bookName" key="bookName" />
//         <Table.Column
//           title="Action"
//           key="action"
//           render={(text, record) => (
//             <Button type="danger" onClick={() => handleCancelRequest(record._id)}>
//               <DeleteOutlined />
//             </Button>
//           )}
//           align="center"
//         />
//         <Table.Column title="Status" dataIndex="status" key="status" />
//         <Table.Column title="Days Left" dataIndex="daysLeft" key="daysLeft" width={120} />
//         <Table.Column title="Fine" dataIndex="fine" key="fine" width={80} />
//       </Table>
//     </div>
//   );
// };

// export default BookHistory;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookHistory = () => {
  const [requestedBooks, setRequestedBooks] = useState([]);
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const token = localStorage.getItem('token');
  const storedStudent = JSON.parse(localStorage.getItem('Student'));
  const studentRoll = storedStudent ? storedStudent.roll : null;

  useEffect(() => {
    if (token && studentRoll) {
      fetchRequestedBooks(studentRoll);
    }
  }, [token, studentRoll]);

  const fetchRequestedBooks = async (roll) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/auth/book-requests`);
      const updatedRequests = response.data.map((request) => ({
        ...request,
        givenTime: null,
        daysLeft: null,
      }));
      setRequestedBooks(updatedRequests);
    } catch (error) {
      console.error('Error fetching requested books:', error);
    }
  };

  const calculateDaysLeft = (requestedAt, status) => {
    const requestDate = new Date(requestedAt);
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

  const calculateFine = (requestedAt, status) => {
    const daysLeft = calculateDaysLeft(requestedAt, status);
    const finePerDay = 2; // Assuming a fine of $2 per day for late return
    const daysAllowed = 21; // Days after which the fine starts
  
    // Calculate the days difference after the allowed period
    const daysAfterAllowedPeriod = daysLeft > daysAllowed ? daysLeft - daysAllowed : 0;
  
    // Calculate fine only if days after the allowed period exist
    const fine = daysAfterAllowedPeriod * finePerDay; // Calculate fine based on remaining days
  
    return fine;
  };

  const handleCancelRequest = async (requestId) => {
    try {
      await axios.put(`http://localhost:5000/api/auth/reject-request/${requestId}`);
      setSelectedRequestId(requestId);
      fetchRequestedBooks(studentRoll);
    } catch (error) {
      console.error('Error canceling request:', error);
    }
  };

  return (
    <div className="book-history-container">
      <h2>Requested Books</h2>
      <Table dataSource={requestedBooks} bordered>
        <Table.Column title="Book" key="book" render={(text, record) => record.selectedBooks.length > 0 ? record.selectedBooks[0].title : 'Book N/A'} />
        <Table.Column title="Student Roll" dataIndex="studentRoll" key="studentRoll" />
        <Table.Column title="Student Name" dataIndex="studentName" key="studentName" />
        <Table.Column title="Requested At" dataIndex="requestedAt" key="requestedAt" render={(text) => new Date(text).toLocaleString()} />
        <Table.Column title="Status" dataIndex="status" key="status" />
        <Table.Column
          title="Actions"
          key="actions"
          render={(text, record) => (
            <Button type="danger" onClick={() => handleCancelRequest(record._id)}>
              <DeleteOutlined />
            </Button>
          )}
          align="center"
        />
        <Table.Column title="Days Left" dataIndex="daysLeft" key="daysLeft" width={120} render={(text, record) => record.daysLeft !== null ? record.daysLeft : calculateDaysLeft(record.requestedAt, record.status) || 'N/A'} />
        <Table.Column title="Fine" dataIndex="fine" key="fine" width={80} render={(text, record) => calculateFine(record.requestedAt, record.status) || 0} />
      </Table>
    </div>
  );
};

export default BookHistory;

