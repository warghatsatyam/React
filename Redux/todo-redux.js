
const redux = require('redux');

// Actions
const ADD_TODO="Add TODO";
const TOGGLE_TODO="Toggle TODO";

// Action Creaters
const addTodo = (text)=>({text,type:ADD_TODO});
const toggleToDo = (index)=>({index,type:TOGGLE_TODO});


// Reducers

const initialState = {
    todos:[]
}

function toDoReducer(state=initialState,action){

    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos:[
                    ...state.todos,{
                        text: action.text,
                        completed:false
                    }
                ]
            }
        case TOGGLE_TODO:
    return {
        ...state,
        todos: state.todos.map((todo, i) => {
            if (i === action.index) {
                return { ...todo, completed: !todo.completed };  // ✅ Return new object
            }
            return todo;
        })
    }
        default:
            return state
    }
}

// Creating Store
const store = redux.createStore(toDoReducer);

// dispatch Actions
store.dispatch(addTodo("Studying React Redux"));
store.dispatch(addTodo("Dockerizing Django Application"));

store.dispatch(toggleToDo(0));


// Reading data from state (selectors)

console.log(store.getState());