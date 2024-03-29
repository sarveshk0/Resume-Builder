import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/esm/Button';

export default function Card({cardDetail}) {
   console.log( "carddetails",cardDetail);
  
   const navigate=useNavigate();

  const clickhandler=()=>{
         navigate(`/dashboard/forms/:${cardDetail.id}`)
  }



  return (
    <MDBCard className='m-4 p-1'   style={{ maxWidth: '540px',  }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage className=''   src= {require(`../images/${cardDetail.id}.png`)} alt='' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody >
            <MDBCardTitle>{cardDetail.title}</MDBCardTitle>
            <MDBCardText>
             {cardDetail.des}
            </MDBCardText>
         <div className='space-x-4'>
          <Button onClick={clickhandler}>Choose</Button>
           
         </div>
         

          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}