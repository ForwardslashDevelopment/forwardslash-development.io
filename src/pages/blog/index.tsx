import React from 'react';
import { graphql } from 'gatsby'
import Dump from '../../utils/Dump'
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import { useSiteMetadata } from '../../utils/Hooks/useSiteMetadata'
import BlogHero from 'components/Hero/BlogHero';



// const BlogPage: React.FC = () => {
export default ({ data }) => {
  return (
    <>
      <Layout>
        <SEO title="Blog" />
        <BlogHero />
        <div className="container text-center">
          <i className="fas fa-hard-hat text-7xl text-secondary-blue pt-4 pb-2"></i>
          <h1 className="text-2xl font-semibold">Blog under construction</h1>
          <p className="mt-3">
            Welcome! Pardon our dust while we develop this feature. The Forwardslash Development blog where we write, when
            we write about progressive web application development. The addition of a blog feature has been put to a task
            card and is waiting to be moved to the "in progress" column. Stay tuned!
        </p>
        </div>
        <Dump data={data} />
        {data.allMdx.nodes.map(({ excerpt, frontmatter }) => (
          <>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <p>{excerpt}</p>
          </>
        ))}
      </Layout>
    </>
  )
}
// };
// export default BlogPage;

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
        }
      }
    }
  }
`