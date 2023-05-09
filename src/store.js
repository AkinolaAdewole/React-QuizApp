import { configureStore } from "@reduxjs/toolkit";
import { scoreReducer } from "./reduxSlice/Correctredux";
import { wrongReducer } from "./reduxSlice/Wrongredux";

const store = configureStore({
  reducer: {
    correctScore: scoreReducer,
    wrongScore: wrongReducer,
  },
});

export default store;
