import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage: React.FC = () => (
  <Layout>
    <Seo title="Home" />
    <h1>About Page</h1>

    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  </Layout>
);

export default AboutPage;
