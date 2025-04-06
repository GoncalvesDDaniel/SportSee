import { useState, useEffect } from "react";
import {
    formatUserData,
    formatActivityData,
    formatSessionsData,
    formatPerformanceData,
} from "../../utils/dataFormatters";
import {
    USER_MOCK_MAIN_DATA_1,
    USER_MOCK_ACTIVITY_1,
    USER_MOCK_AVERAGE_SESSIONS_1,
    USER_MOCK_PERFORMANCE_1,
} from "./../mocks/user/1";

const USE_MOCK_DATA = false;
const API_BASE_URL = "http://localhost:3000";

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
        // Evite les mises à jour sur un composant démonté
        let isMounted = true;
        setLoading(true);
        setError(null);
        async function fetchAllData() {
            if (USE_MOCK_DATA) {
                // Formatage des données
                // TODO: Si le format des mocks ou de l'API change, ajuster dataFormatters.jsx et/ou  les mocks/user/1.jsx
                setData({
                    user: formatUserData(USER_MOCK_MAIN_DATA_1),
                    activity: formatActivityData(USER_MOCK_ACTIVITY_1),
                    averageSessions: formatSessionsData(
                        USER_MOCK_AVERAGE_SESSIONS_1
                    ),
                    performance: formatPerformanceData(USER_MOCK_PERFORMANCE_1),
                });
                setError(null);
                setLoading(false);
                return;
            }

            try {
                const endpoints = [
                    `${API_BASE_URL}/user/${userId}`,
                    `${API_BASE_URL}/user/${userId}/activity`,
                    `${API_BASE_URL}/user/${userId}/average-sessions`,
                    `${API_BASE_URL}/user/${userId}/performance`,
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
    }, [userId, USE_MOCK_DATA]);

    return { data, loading, error };
}

export default useDashboardData;
