import React, { useReducer } from 'react';
import Values from 'values.js';
import { FaRandom } from 'react-icons/fa';
import { ImArrowRight } from 'react-icons/im';
import getRandomColor from './getRandomHex';
import SingleColor from './SingleColor';
import { actionType, singleColorType, stateType } from './types';

function reducer(state: stateType, action: actionType): any {
  if (action.type === 'CHANGE_INPUT') {
    return {
      ...state,
      [action.targetName]: action.val,
    };
  }

  if (action.type === 'SHOW_LIST') {
    return {
      ...state,
      colorsList: action.nextList,
    };
  }
}

function App() {
  const DEFAULT_SHADE = 10;
  const DEFAULT_COLOR = '#ffa500';
  const DEFAULT_LIST_OF_COLORS = new Values(DEFAULT_COLOR).all(DEFAULT_SHADE);
  // console.log('list', DEFAULT_LIST_OF_COLORS.length, DEFAULT_LIST_OF_COLORS);
  const defaultState = {
    colorInput: DEFAULT_COLOR,
    shadeInput: DEFAULT_SHADE,
    colorsList: DEFAULT_LIST_OF_COLORS,
  };
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    dispatch({
      type: 'SHOW_LIST',
      nextList: [...new Values(state.colorInput).all(state.shadeInput)],
    });
  };

  const handleRandomClick = (): void => {
    const randomColor: string = getRandomColor();
    dispatch({
      type: 'CHANGE_INPUT',
      targetName: 'colorInput',
      val: randomColor,
    });
    dispatch({
      type: 'SHOW_LIST',
      nextList: [...new Values(randomColor).all(state.shadeInput)],
    });
  };

  const checkShade = (val: any): number => {
    if (val === '') {
      return DEFAULT_SHADE;
    }

    if (val < 1) {
      return 1;
    }

    if (val > 100) {
      return 100;
    }

    return Number(Number(val).toFixed(1));
  };

  return (
    <>
      <section className='container'>
        <form onSubmit={handleSubmit}>
          <h3>Color Generator</h3>
          <div className='search-form'>
            <div className='color-search'>
              <label htmlFor='color-input'>Color : </label>
              <input
                type='color'
                name='colorInput'
                id='color-input'
                placeholder='#f15025'
                value={state.colorInput}
                onChange={(e) => {
                  dispatch({
                    type: 'CHANGE_INPUT',
                    targetName: e.target.name,
                    val: e.target.value,
                  });
                }}
              />
            </div>
            <div className='shade-count-div'>
              <label htmlFor='shade-input'>Shades : </label>
              <input
                type='number'
                name='shadeInput'
                id='shade-input'
                placeholder='10'
                value={state.shadeInput}
                step='any'
                onChange={(e) => {
                  dispatch({
                    type: 'CHANGE_INPUT',
                    targetName: e.target.name,
                    val: checkShade(e.target.value),
                  });
                }}
              />
            </div>

            <button className='submit-btn' type='submit'>
              <ImArrowRight />
            </button>
          </div>
        </form>
        <button className='random-btn' onClick={handleRandomClick}>
          <FaRandom />
        </button>
      </section>

      <section className='colors'>
        {state.colorsList.map((color: singleColorType) => (
          <SingleColor color={color} />
        ))}
      </section>
    </>
  );
}

export default App;
