import { useEffect, useState } from "react";
import { fetchdata } from "../../helpers/fetchData";

export const useFetchData = ( endPoint ) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
		const { data, isLoading}= await fetchdata(endPoint)
		setData(data)
		setIsLoading(isLoading)
	}
    useEffect(() => {
        getData();
    }, [endPoint]);

    return {
        data,
        isLoading,
    };
};
/*
const getData = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`);
            const fetchedData = await response.json();

            // Verificar si el resultado es un array
            if (Array.isArray(fetchedData)) {
                setData(fetchedData);
            } else {
                // Si no es un array, puedes ajustar según tu necesidad
                setData([]);
            }

            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
*/