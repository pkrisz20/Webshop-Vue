export default {
    PUSH_NOTIFICATION (state, notification) {
        if (state.notifications.length > 5) {
            state.haveToWait = true;
            setTimeout(() => {
                state.haveToWait = false;
            }, 5000);
            return;
        }
        state.notifications.push({
            ...notification,
            id: (Math.random().toString(36) + Date.now().toString(36)).substring(2)
        });
        setTimeout(() => {
            state.notifications.shift();
        }, 8000);
    },

    REMOVE_NOTIFICATION (state, notificationID) {
        state.notifications = state.notifications.filter(item => {
            return item.id != notificationID;
        });
    },
}