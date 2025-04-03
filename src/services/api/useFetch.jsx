import { useState, useEffect } from "react";

/**
 * Hook pour récupérer des données depuis une URL via l'API Fetch.
 * @param {string} url
 * @returns {{ data: any | null, loading: boolean, error: string | null }}
 */
function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true; // Pour éviter les mises à jour après un démontage

        async function getData() {
            try {
                setLoading(true);
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Échec de la récupération des données");
                }
                const jsonData = await response.json();
                if (isMounted) {
                    setData(jsonData);
                    setLoading(false);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message);
                    setLoading(false);
                }
            }
        }

        getData();

        return () => {
            isMounted = false; // Annule la mise à jour si le composant est démonté
        };
    }, [url]);

    return { data, loading, error };
}

export default useFetch;
