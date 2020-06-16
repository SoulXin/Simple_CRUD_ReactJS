const Reducer = (state,action) => {
    switch(action.type){
        case 'TODO_LIST' :
            return {
                ...state,
                todo : action.data
            }
        case 'ADD_TODO' : 
            const temp_todo = state.todo;
            temp_todo.push(action.data);
            return {
                ...state,
                todo : temp_todo
            }
        case 'COMPLETE_TODO' :
            const filter_todo = state.todo.filter(list => list._id !== action.data);
            return {
                ...state,
                todo : filter_todo
            }
        
        // Notifikasi
        case 'NOTIFICATION_LIST' :
            return {
                ...state,
                notification : action.data
            }
        case 'ADD_NOTIFICATION' :
            const temp_notification = state.notification;
            temp_notification.push(action.data);
            return {
                ...state,
                notification : temp_notification
            }
        case 'DELETE_NOTIFICATION' :
            const filter_notification = state.notification.filter(list => list._id !== action.data);
            return {
                ...state,
                notification : filter_notification
            }
        default : return state
    }
}

export default Reducer