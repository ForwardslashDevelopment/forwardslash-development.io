import React from 'react';
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import { useSiteMetadata } from '../../utils/Hooks/useSiteMetadata'
import BlogHero from 'components/Hero/BlogHero';
import { fieldSubscriptionItems } from 'final-form';

const IndexWrapper = styled.main``
const PostWrapper = styled.div``

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
          <p className="mt-3 pb-4">
            Welcome! Pardon our dust while we develop this feature. The Forwardslash Development blog where we write, when
            we write about progressive web application development. The addition of a blog feature has been put to a task
            card and is waiting to be moved to the "in progress" column. Stay tuned!
        </p>
        </div>
        <IndexWrapper className="container text-center" >
          {data.allMdx.nodes.map(({ id, fields, excerpt, frontmatter }) => (
            <PostWrapper key={id}>
              <Link to={fields.slug}>
                <h1>{frontmatter.title}</h1>
                <p>{frontmatter.date}</p>
                <p>{excerpt}</p>
              </Link>
            </PostWrapper>
          ))}
        </IndexWrapper>
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
          date(formatString: "YYYY MMMM Do")
        }
        fields {
          slug
        }
      }
    }
  }
`