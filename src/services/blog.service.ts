import { gql } from '@apollo/client'
import { fetchQuery } from './client'

export type BlogPost = {
  title: string
  slug: string
  excerpt: string
  date: string
  content?: string
  categories?: {
    nodes: Array<{ name: string; slug: string }>
  }
  featuredImage?: {
    node?: {
      sourceUrl: string
      altText: string
    }
  }
}

const GET_BLOG_POSTS = gql`
  query GetBlogPosts($first: Int = 10) {
    posts(first: $first) {
      nodes {
        title
        slug
        excerpt
        date
        categories {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`

const GET_BLOG_POST_BY_SLUG = gql`
  query GetBlogPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      slug
      excerpt
      content
      date
      categories {
        nodes {
          name
          slug
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`

export class BlogService {
  static async getBlogPosts(limit = 10) {
    const result = await fetchQuery<{ posts: { nodes: BlogPost[] } }, { first: number }>(GET_BLOG_POSTS, {
      first: limit,
    })
    return result.posts.nodes
  }

  static async getBlogPostBySlug(slug: string) {
    const result = await fetchQuery<{ post: BlogPost | null }, { slug: string }>(GET_BLOG_POST_BY_SLUG, {
      slug,
    })
    return result.post
  }
}
