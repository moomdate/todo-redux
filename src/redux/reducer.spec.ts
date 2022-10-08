import reducers from "./reducers";

test('Should found new state when given the new state', () => {
    let state;
    state = reducers({todoReducer: {list: []}}, {type: 'ADD_TODO', payload: {id: '1665213598830', data: 'my todo'}});
    expect(state).toEqual({todoReducer: {list: [{id: '1665213598830', data: 'my todo'}]}});
});
