/**
 * Formate les données principales de utilisateur
 * @param {object} apiData
 * @returns {{
 * firstName: string ,
 * score : number ,
 * keyData: object
 * }}
 */
export const formatUserData = (apiData) => {
    const userData = apiData.data;
    return {
        firstName: userData.userInfos.firstName,
        score: userData.todayScore || userData.score || 0,
        keyData: userData.keyData,
    };
};

/**
 * Formate les données d'activité quotidienne et transforme la date complète ('YYYY-MM-DD') en numéro du jour (1-31)
 * @param {object} apiData
 * @returns {Array<object>}
 */
export const formatActivityData = (apiData) => {
    const activityData = apiData.data;
    return activityData.sessions.map((session) => ({
        ...session,
        // on remplace day : YYYY-MM-DD par D (ex:1,2,3,...)
        day: new Date(session.day).getDate(),
    }));
};

/**
 * Formate les données des sessions et remplace le numéro du jour (1-7) par ('L', 'M', 'M', 'J', 'V', 'S', 'D').
 * @param {object} apiData
 * @returns {Array<object>}
 */
export const formatSessionsData = (apiData) => {
    const sessionsData = apiData.data;
    const dayMapping = ["L", "M", "M", "J", "V", "S", "D"];
    return sessionsData.sessions.map((session) => ({
        ...session,
        day: dayMapping[session.day - 1],
    }));
};

/**
 * Formate les données de performance et on traduit les noms de 'kind' en français et on inverse l'ordre pour correspondre à la maquette.
 * @param {object} apiData
 * @returns {Array<object>}
 */
export const formatPerformanceData = (apiData) => {
    const performanceData = apiData.data;
    const kindMapping = {
        1: "Cardio",
        2: "Energie",
        3: "Endurance",
        4: "Force",
        5: "Vitesse",
        6: "Intensité",
    };
    return performanceData.data
        .map((item) => ({
            ...item,
            //on remplace kind anglais par son equivalent dans le dictionnaire fr
            kind: kindMapping[item.kind],
        }))
        .reverse();
};
