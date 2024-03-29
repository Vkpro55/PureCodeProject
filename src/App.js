import React from 'react';
import "./assets/css/style.css"
import HomePage from "./pages/index"
import AppProvidersWrapper from './components/AppProvidersWrapper';
import Layout from "./components/layout/index"

function App() {
  return (
    <AppProvidersWrapper>
      <Layout>
        <HomePage />
      </Layout>
    </AppProvidersWrapper>
  );
}

export default App;
