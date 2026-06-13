// import {rules, createComparison} from "../lib/compare.js";


// export function initSearching(searchField) {
//     const compare = createComparison(
//         ['skipEmptyTargetValues'],
//         [rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false)]
//     );
    
//     return (data, state, action) => {
//         return data.filter(row => compare(row, state));
//     }
// } 
export function initSearching(searchField) {
  return (query, state, action) => {
    return state[searchField]
      ? Object.assign({}, query, {
          search: state[searchField],
        })
      : query;
  };
}