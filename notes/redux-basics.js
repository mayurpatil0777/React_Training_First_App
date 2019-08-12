const {createStore} = require("redux");

const initialState = {
counter : 0
}

//Reducers
const reducer = (state = initialState, action) =>{

if(action.type === "Increment"){
return {
...state,
counter : state.counter + 1
}
}
if(action.type === "Add"){
return {
    ...state,
counter : state.counter + action.payload
}
}
return state;
}

//Store
const store = createStore(reducer);

console.log(store.getState());




//Subscribe
store.subscribe(() =>{
console.log("[Subscribe]",store.getState())
})



//Dispatching Acion

store.dispatch({type : "Increment"})
store.dispatch({type : "Add", payload : 10})