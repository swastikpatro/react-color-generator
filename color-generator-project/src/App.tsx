import React, { useReducer, useRef, useState } from 'react';
import Values from 'values.js';
import { FaRandom } from 'react-icons/fa';
import { ImArrowRight } from 'react-icons/im';
import getRandomColor from './getRandomHex';

interface stateType {
  colorInput: string;
  shadeInput: number;
}

interface actionType {
  targetName?: any;
  type: string;
  val?: number | string;
}

function reducer(state: stateType, action: actionType): any {
  if (action.type === 'CHANGE_INPUT') {
    return {
      ...state,
      [action.targetName]: [action.val],
    };
  }
}

function App() {
  const DEFAULT_SHADE = 10;
  const defaultState = {
    colorInput: '#ffa500',
    shadeInput: DEFAULT_SHADE,
  };
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
  };

  const handleRandomClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const randomColor: string = getRandomColor();
    dispatch({
      type: 'CHANGE_INPUT',
      targetName: 'colorInput',
      val: randomColor,
    });
  };

  const checkShade = (val: any): number => {
    if (val === '') {
      return DEFAULT_SHADE;
    }

    if (val < 1) {
      return 1;
    }

    return Number(val);
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
              <label htmlFor='shade-input'>No. of Shades : </label>
              <input
                type='number'
                name='shadeInput'
                id='shade-input'
                placeholder='10'
                value={state.shadeInput}
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

      <section className='colors'></section>
    </>
  );
}

export default App;
