import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AccordionsState = {
  accordions: { [key: string]: boolean };
};

type SetPayload = {
  key: string;
  value: boolean;
};

const initialState: AccordionsState = {
  accordions: {},
};

export const accordionsSlice = createSlice({
  name: "accordions",
  initialState,
  reducers: {
    setAccordion: (state, action: PayloadAction<SetPayload>) => {
      state.accordions[action.payload.key] = action.payload.value;
    },
    resetAccordions: (state) => {
      state.accordions = {};
    },
  },
});

export const { setAccordion, resetAccordions } = accordionsSlice.actions;

export default accordionsSlice.reducer;
