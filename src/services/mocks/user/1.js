/**
 * Données mockées pour l'endpoint principal /user/1
 */
export const USER_MOCK_MAIN_DATA_1 = {
    data: {
        id: 1,
        userInfos: {
            firstName: "Jean",
            lastName: "Dupont",
            age: 28,
        },
        todayScore: 0.45,
        keyData: {
            calorieCount: 2100,
            proteinCount: 120,
            carbohydrateCount: 270,
            lipidCount: 60,
        },
    },
};

/**
 * Données mockées pour l'endpoint /user/1/activity
 */
export const USER_MOCK_ACTIVITY_1 = {
    data: {
        userId: 1,
        sessions: [
            { day: "2020-07-01", kilogram: 75, calories: 250 },
            { day: "2020-07-02", kilogram: 74, calories: 280 },
            { day: "2020-07-03", kilogram: 75, calories: 300 },
            { day: "2020-07-04", kilogram: 74, calories: 270 },
            { day: "2020-07-05", kilogram: 73, calories: 200 },
            { day: "2020-07-06", kilogram: 72, calories: 180 },
            { day: "2020-07-07", kilogram: 71, calories: 400 },
        ],
    },
};

/**
 * Données mockées pour l'endpoint /user/12/average-sessions
 * Correspond à ce qui se trouverait dans la clé "data" de la réponse API.
 */
export const USER_MOCK_AVERAGE_SESSIONS_1 = {
    data: {
        userId: 1,
        sessions: [
            { day: 1, sessionLength: 35 },
            { day: 2, sessionLength: 25 },
            { day: 3, sessionLength: 40 },
            { day: 4, sessionLength: 30 },
            { day: 5, sessionLength: 20 },
            { day: 6, sessionLength: 15 },
            { day: 7, sessionLength: 50 },
        ],
    },
};

/**
 * Données mockées pour l'endpoint /user/1/performance
 */
export const USER_MOCK_PERFORMANCE_1 = {
    data: {
        userId: 1,
        kind: {
            1: "cardio",
            2: "energy",
            3: "endurance",
            4: "strength",
            5: "speed",
            6: "intensity",
        },
        data: [
            { value: 90, kind: 1 },
            { value: 130, kind: 2 },
            { value: 150, kind: 3 },
            { value: 70, kind: 4 },
            { value: 180, kind: 5 },
            { value: 100, kind: 6 },
        ],
    },
};
