const initialState = {
    counter: 10,
    resultArr: []
}

const reducer = (state = initialState, action) => {
    if (action.type === "INCREMENT") {
        return {
            ...state,
            counter: state.counter + 1

        }
    }
    if (action.type === "DECREMENT") {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if (action.type === "ADD10") {
        return {
            ...state,
            counter: state.counter + action.add
        }
    }
    if (action.type === "SUBTRACT5") {
        return {
            ...state,
            counter: state.counter - action.subtract
        }
    }
    if (action.type === "RESULT") {
        return {
            ...state,
            resultArr: state.resultArr.concat({
                id: new Date(),
                value: state.counter
            })
        }
    }
    console.log(state);
    return state
}
export default reducer;