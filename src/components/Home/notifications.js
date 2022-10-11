import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import './home.css';
import toast1img from '../../images/8700.jpg'
import toast2img from '../../images/toast2.jpg'
function Notifications() {
  
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);
  
  
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="position-relative notifications"
      style={{ minHeight: '240px' }}
    >
      <ToastContainer position="top-end" className="p-3 mt-5">
        <Toast show={showA} onClose={toggleShowA} className="border border-3 border-fourth">
          <Toast.Header>
            <img src={toast2img} className="rounded " alt="" />
            <strong className="me-auto">Elon</strong>
            <small>Just now</small>
          </Toast.Header>
          <Toast.Body>This Peter guy looks like a real hard worker we should hire him 😁</Toast.Body>
        </Toast>
        <Toast show={showB} onClose={() => { toggleShowB(); setTimeout(() =>{toggleShowA()},8000)}} className="border border-3 border-fourth">
          <Toast.Header>
          <img src={toast1img} className="rounded " alt="" />
            <strong className="me-auto">Bill</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Wow this is a sick website. The developer who created it is awesome!</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default Notifications;