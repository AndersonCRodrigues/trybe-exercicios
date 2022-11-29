import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: action.payload,
      };
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

const next = () => {
  const { colors, index } = store.getState();
  const payload = index === colors.length - 1 ? 0 : index + 1;
  return {type: 'NEXT_COLOR', payload};
}

const prev = () => {
  const { colors, index } = store.getState();
  const payload = index === 0 ? colors.length - 1 : index - 1;
  return {type: 'PREVIOUS_COLOR', payload};
}

const btnPrevious = document.getElementById('previous');
const btnNext = document.getElementById('next');

btnPrevious.addEventListener('click', () => {
  store.dispatch(prev());
});

btnNext.addEventListener('click', () => {
  store.dispatch(next());
});

store.subscribe(() => {
  const { colors, index } = store.getState();
  document.getElementById('value').innerHTML = colors[index];
  document.getElementById('container').style.backgroundColor = colors[index];
});