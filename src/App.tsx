import React from 'react';
import Layout from './hoc/layout';
import BtnLoading from './components/shared/btnLoading';

function App() {
  return (
    <Layout description={'lorem'} keywords={'lorem'} title={'boiler'}>
      <p>the boiler plate</p>
      <BtnLoading />
    </Layout>
  );
}

export default App;
