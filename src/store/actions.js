export default {
    addNotification ({ commit }, notification) {
        commit("PUSH_NOTIFICATION", notification);
    },

    removeNotification ({ commit }, notificationID) {
        commit("REMOVE_NOTIFICATION", notificationID);
    },
};