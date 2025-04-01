export const formatUserData = (apiData) => {
    const userData = apiData.data;
    return {
        firstNamename: userData.userInfos.firstName,
        score: userData.todayScore || userData.score || 0,
        keyData: userData.keyData,
    };
};

export const formatActivityData = (apiData) => {
    const activityData = apiData.data;
    return activityData.sessions.map((session) => ({
        ...session,
        // on remplace day : YYYY-MM-DD par D (ex:1,2,3,...)
        day: new Date(session.day).getDate(),
    }));
};

export const formatSessionsData = (apiData) => {
    const sessionsData = apiData.data;
    // on remplace les jours en chiffre par des lettres avec un index - 1
    const dayMapping = ["L", "M", "M", "J", "V", "S", "D"];
    return sessionsData.sessions.map((session) => ({
        ...session,
        day: dayMapping[session.day - 1] || "?",
    }));
};

export const formatPerformanceData = (apiData) => {
    const performanceData = apiData.data;
    // dictionnaire de data.kind en francais
    const kindMapping = {
        1: "Cardio",
        2: "Energie",
        3: "Endurance",
        4: "Force",
        5: "Vitesse",
        6: "Intensité",
    };
    return (
        performanceData.data
            .map((item) => ({
                ...item,
                //on remplace kind anglais par son equivalent dans le dictionnaire fr
                kind: kindMapping[item.kind] || "Inconnu",
            }))
            //on reverse pour respecter la presentation figma
            .reverse()
    );
};
