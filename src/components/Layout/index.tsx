import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';

import 'assets/styles/global.css';
import { LayoutWrapper, MainWrapper } from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/fontawesome/css/all.min.css';
import '../../assets/styles/styles.css';

interface Props {
  children: React.ReactNode;
}

/**
 * Layout component
 *
 * @param {Props} props
 */

const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);


  return (
    <div>
      <LayoutWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <MainWrapper>{children}</MainWrapper>
        <Footer />
      </LayoutWrapper>
    </div>
  );
};

export default Layout;
