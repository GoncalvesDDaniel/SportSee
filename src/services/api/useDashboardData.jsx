import { useState, useEffect } from "react";
import {
    formatUserData,
    formatActivityData,
    formatSessionsData,
    formatPerformanceData,
} from "../../utils/dataFormatters";

/**
 * Hook personnalisé pour charger et formater toutes les données d'un utilisateur.
 * @param {string | number} userId L'ID de l'utilisateur dont on veut charger les données.
 * @returns {{
 *   data: object | null,
 *   loading: boolean,
 *   error: string | null
 * }}
 */

function useDashboardData(userId) {
    const [data, setData] = useState({
        user: null,
        activity: null,
        averageSessions: null,
        performance: null,
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Flag pour éviter les mises à jour sur un composant démonté
        let isMounted = true;
        setLoading(true);
        setError(null);
        async function fetchAllData() {
            try {
                const endpoints = [
                    `http://localhost:3000/user/${userId}`,
                    `http://localhost:3000/user/${userId}/activity`,
                    `http://localhost:3000/user/${userId}/average-sessions`,
                    `http://localhost:3000/user/${userId}/performance`,
                ];

                // Lance toutes les requêtes en parallèle
                const responses = await Promise.all(
                    endpoints.map((url) => fetch(url))
                );

                // Vérifie si toutes les réponses sont OK
                const isAllResponseOk = responses.every((res) => res.ok);
                if (!isAllResponseOk) {
                    // Trouve le status de la première erreur
                    const failedResponse = responses.find((res) => !res.ok);
                    throw new Error(
                        `Échec de la récupération des données (status: ${failedResponse?.status})`
                    );
                }

                const [
                    userDataRaw,
                    activityDataRaw,
                    sessionsDataRaw,
                    performanceDataRaw,
                ] = await Promise.all(responses.map((res) => res.json()));

                // Formatage des données
                if (isMounted) {
                    setData({
                        user: formatUserData(userDataRaw),
                        activity: formatActivityData(activityDataRaw),
                        averageSessions: formatSessionsData(sessionsDataRaw),
                        performance: formatPerformanceData(performanceDataRaw),
                    });
                    setLoading(false);
                }
            } catch (err) {
                console.error(
                    "Erreur lors de la récupération des données du dashboard:",
                    err
                );
                if (isMounted) {
                    setError(err.message || "Une erreur est survenue");
                    setLoading(false);
                }
            }
        }

        fetchAllData();

        // nettoyage de isMounted
        return () => {
            isMounted = false;
        };
    }, [userId]);

    return { data, loading, error };
}

export default useDashboardData;
