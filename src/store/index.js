import { configureStore, createSlice } from '@reduxjs/toolkit';

const controlsSlice = createSlice({
  name: 'controls',
  initialState: {
    rootFontSize: { 
      value: 16, 
      unit: 'px' 
    },
    leftValue: { 
      value: 16, 
      unit: 'px' 
    },
    leftViewportWidth: { 
      value: 600, 
      unit: 'px' 
    },
    rightValue: { 
      value: 32, 
      unit: 'px' 
    },
    rightViewportWidth: { 
      value: 800, 
      unit: 'px' 
    },
    convertToRem: { 
      value: false 
    }
  },
  reducers: {
    update(state, action) {
      const {key, value} = action.payload;

      state[key].value = value;

      return state;
    },
    changeUnit(state, action) {
      const {key, unit} = action.payload;

      if (state[key].unit !== unit) {
        if (unit === 'px') {
          state[key].value = state[key].value * state.rootFontSize.value;
        }
        if (unit === 'rem') {
          state[key].value = state[key].value / state.rootFontSize.value;
        }
      }

      state[key].unit = unit;

      return state;
    }
  }
})

export const controlsActions = controlsSlice.actions;
export const store = configureStore({
  reducer: {
    controls: controlsSlice.reducer
  },
});