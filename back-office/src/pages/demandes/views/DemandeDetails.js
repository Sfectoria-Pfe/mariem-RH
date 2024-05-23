import React from 'react'
import { useLocation } from 'react-router-dom';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  
} from 'mdb-react-ui-kit';
import { Heat } from '@alptugidin/react-circular-progress-bar'
import HeaderPage from '../../../components/HeaderPage';
import Chip from '@mui/joy/Chip';

export default function DemandeDetails() {
  const location = useLocation();
  const { row } = location.state || {};
  console.log(row, "row");
  if (!row) {
    return <div>No data available</div>;
  }
  return (
    <div className='card'>
      <div className="mx-5">
        <HeaderPage parent={`Demande of ${row.type}`} firstChild={"CV"} />


        <MDBRow>

          <MDBCol lg="12">
            <MDBCard className="mb-4 mt-3">
              <MDBCardBody className="text-center">

                <iframe src={row?.cv} height={500} width={"100%"} />
              </MDBCardBody>
            </MDBCard>

          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="8" className='mt-2'>
            <MDBCard className="mb-4">
              <HeaderPage parent="Demande" firstChild={"Personel Information"} />

              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{row.name} {row.lastName}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />

                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Age</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{row.age}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{row.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{row.phoneNumber}</MDBCardText>
                  </MDBCol>
                </MDBRow>

                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{row.adress}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />

                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Note</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{row.note}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

          </MDBCol>

          <MDBCol md="12" sm="12" lg="4">
            <HeaderPage parent="Demande" firstChild={"Matched Skills"} />
            {row.matchedSkills.map((elem, i) => (

              <Chip
                variant="filled"
                color="primary"
                size="sm"
                sx={{ pointerEvents: 'none', padding: "10px", backgroundColor: "#1976d2", color: "white", marginLeft: "10px" }}

              >

                {elem}
              </Chip>
            ))}
            <Heat
              progress={row.score}
              range={{ from: 0, to: 100 }}
              sign={{ value: '%', position: 'end' }}
              showValue={true}
              revertBackground={false}
              text={'Match'}
              sx={{
                barWidth: 5,
                bgColor: '#dadada',
                shape: 'half',

                valueSize: 13,
                textSize: 13,
                valueFamily: 'Trebuchet MS',
                textFamily: 'Trebuchet MS',
                valueWeight: 'normal',
                textWeight: 'normal',
                textColor: '#000000',
                valueColor: '#000000',
                loadingTime: 1000,
                strokeLinecap: 'round',
                valueAnimation: true,
                intersectionEnabled: true
              }}
            />


          </MDBCol>
        </MDBRow>

        <div className="d-flex mb-5 gap-2  justify-content-start">
        <button className="btn btn-success btn-lg " >
          Agree
        </button>
        <button className="btn btn-danger btn-lg" >
         Refuse
        </button>
        </div>
      </div>
    </div>
  )
}
