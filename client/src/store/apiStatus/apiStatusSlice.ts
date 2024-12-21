import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// this redux state handles the error, success, or loading state of all the app.
// like that, we don't have to handle success, loading or error states on all the components
// that make API Calls
// this state will be readed by the App.tsx, 
// and SuccessComponent, ErrorComponent, LoadingComponent will be used as necesary.
interface ApiStatusState {
  errorMessage: string | null;
  successMessage: string | null;
  isLoading: boolean;
}

const initialState: ApiStatusState = {
  isLoading: false,
  errorMessage: null,
  successMessage: null,
};

const apiStatusSlice = createSlice({
  name: 'apiStatus',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setSuccess: (state, action: PayloadAction<string>) => {
      state.successMessage = action.payload;
      state.isLoading = false; 
    },
    setError: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
      state.isLoading = false;
    },
    clearMessages: (state) => {
      state.errorMessage = null;
      state.successMessage = null;
      state.isLoading = false; 
    },
  },
});

export const { setLoading, setSuccess, setError, clearMessages } = apiStatusSlice.actions;

export default apiStatusSlice.reducer;