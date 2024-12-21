import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/index'; 
import { AppRoutes } from './routes';
import ErrorComponent  from './layout/error-component/ErrorComponent'
import LoadingComponent  from './layout/loading-component/LoadingComponent'
import SuccessComponent from './layout/success-component/SuccessComponent'

function App() {
  const { isLoading, errorMessage, successMessage } = useSelector((state: RootState) => state.apiStatus);

  return (
    <div className="App">
       {isLoading && <LoadingComponent />}
       
       {successMessage && <SuccessComponent successMessage={successMessage} />}
       
       
       {errorMessage && <ErrorComponent errorMessage={errorMessage} />}
       
       <AppRoutes /> 
    </div>
  );
}

export default App;