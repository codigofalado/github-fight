import React, { FC } from 'react';

import Home from '~/components/sections/Home';
import Layout from '~/Layout';

const IndexPage: FC = () => (
  <Layout title="Home">
    <Home />
  </Layout>
);

export default IndexPage;
