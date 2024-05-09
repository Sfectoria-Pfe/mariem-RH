import React, { useEffect, useState } from "react";
import Liste from "../../components/Liste";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "title",
    headerName: "Title",
    width: 150,
    editable: true,
  },
  {
    field: "type",
    headerName: "Type",
    width: 150,
    editable: true,
  },
  {
    field: "description",
    headerName: "Description",
    sortable: false,
    width: 160,
  },
  {
    field: "demands",
    headerName: "Demands",
    type: "number",
    width: 110,
    editable: true,
    valueGetter: (value, row) => row.demande.length,
  },
];

export default function JobOffreList() {
    const [rows, setRows] = useState([]);
    const navigate = useNavigate()

    const fetchOffres = async () => {
      const response = await axios.get("http://localhost:5432/job-offers");
      setRows(response.data.filter((el) => el.type === "offre d'emploi"));
    };
  
    useEffect(() => {
      fetchOffres();
    }, []);
  return (
    <div>
    <div>
      <button class="btn btn-primary d-flex justify-content-end my-4" onClick={()=>navigate("add-jobOffer")}>
        Ajouter une offre d'emploi
      </button>
    </div>
    <Liste rows={rows} columns={columns} />
  </div>
  )
}
