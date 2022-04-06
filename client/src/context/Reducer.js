function reducer(state, action) {
    switch (action.type) {
        case 'addCommand':
            return { ...state, user: {...state.user, commands: [...state.user.commands, action.payload] }};
        case 'deleteCommand':
            const newCommands = state.user.commands.filter(c => c.id !== action.payload)
            return { ...state, user: {...state.user, commands: newCommands } };
        case 'loginUser':
            return { ...state, user: action.payload };
        case 'logoutUser':
            return { ...state, user: {
                commands:[]
            } };
        case 'signupUser':
                return { ...state, user: action.payload };
        default:
            throw new Error();
    }
  }

  export default reducer