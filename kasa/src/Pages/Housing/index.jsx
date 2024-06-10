import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../../Components/Carrousel";
import HousingData from "../../Data/logements.json";
import "./housing.scss";

const Housing = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const data = HousingData.find(data => data.id === id);

    useEffect(() => {
        if (!data) {
            navigate("/*"); // Assurez-vous que ce chemin est correct
        }
    }, [data, navigate]);

    if (!data) {
        return <div>Loading...</div>; // Indicateur de chargement pendant la redirection
    }

    return (
        <main>
            <Carrousel pictures={data.pictures} />
        </main>
    );
}

export default Housing;
