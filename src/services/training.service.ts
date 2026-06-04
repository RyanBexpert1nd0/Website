// Training Service for HSE SkillUp - Core training management
import { gql } from '@apollo/client'
import { fetchQuery } from './client'

// GraphQL Queries
export const GET_TRAINING_PROGRAMS = gql`
  query GetTrainingPrograms(
    $first: Int
    $after: String
    $category: String
    $institution: String
  ) {
    trainingPrograms(
      first: $first
      after: $after
      where: {
        categoryName: $category
        taxonomyName: $institution
      }
    ) {
      nodes {
        id
        title
        slug
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        programDetails {
          duration
          price
          earlyBirdPrice
          code
          institution
          available
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`

export const GET_TRAINING_BY_SLUG = gql`
  query GetTrainingBySlug($slug: ID!) {
    trainingProgram(id: $slug, idType: SLUG) {
      id
      title
      content
      excerpt
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      programDetails {
        duration
        price
        earlyBirdPrice
        code
        institution
        available
        syllabus {
          title
          description
        }
        requirements
        methodology
        brochure {
          mediaItemUrl
        }
      }
      schedules {
        nodes {
          id
          startDate
          endDate
          location {
            city
            venue
          }
          quota
          availableQuota
          status
          instructor {
            name
            title
          }
        }
      }
    }
  }
`

export const GET_UPCOMING_SCHEDULES = gql`
  query GetUpcomingSchedules($first: Int = 5) {
    schedules(
      first: $first
      where: {
        orderby: { field: START_DATE, order: ASC }
        status: AVAILABLE
        dateQuery: { after: { day: 1 } }
      }
    ) {
      nodes {
        id
        startDate
        endDate
        program {
          title
          slug
          programDetails {
            price
            duration
          }
        }
        location {
          city
          venue
        }
        quota
        availableQuota
        status
      }
    }
  }
`

// Types
export interface TrainingProgram {
  id: string
  title: string
  slug: string
  excerpt: string
  featuredImage?: {
    node: {
      sourceUrl: string
      altText: string
    }
  }
  programDetails: {
    duration: string
    price: number
    earlyBirdPrice?: number
    code: string
    institution: string
    available: boolean
    syllabus?: Array<{
      title: string
      description: string
    }>
    requirements?: string
    methodology?: string
    brochure?: {
      mediaItemUrl: string
    }
  }
}

export interface Schedule {
  id: string
  startDate: string
  endDate: string
  program: {
    title: string
    slug: string
    programDetails: {
      price: number
      duration: string
    }
  }
  location: {
    city: string
    venue: string
  }
  quota: number
  availableQuota: number
  status: 'AVAILABLE' | 'LIMITED' | 'FULL'
}

// Interfaces for query responses
interface TrainingProgramsResponse {
  trainingPrograms: {
    nodes: TrainingProgram[]
    pageInfo: {
      hasNextPage: boolean
      endCursor: string
    }
  }
}

interface TrainingBySlugResponse {
  trainingProgram: TrainingProgram & {
    content: string
    schedules: {
      nodes: Array<{
        id: string
        startDate: string
        endDate: string
        location: {
          city: string
          venue: string
        }
        quota: number
        availableQuota: number
        status: string
        instructor?: {
          name: string
          title: string
        }
      }>
    }
  }
}

interface UpcomingSchedulesResponse {
  schedules: {
    nodes: Schedule[]
  }
}

// Service Functions
export class TrainingService {
  static async getTrainingPrograms(options?: {
    first?: number
    after?: string
    category?: string
    institution?: string
  }) {
    const result = await fetchQuery<TrainingProgramsResponse, {
      first?: number
      after?: string
      category?: string
      institution?: string
    }>(GET_TRAINING_PROGRAMS, {
      first: options?.first || 12,
      after: options?.after,
      category: options?.category,
      institution: options?.institution,
    })
    return result.trainingPrograms
  }

  static async getTrainingBySlug(slug: string) {
    const result = await fetchQuery<TrainingBySlugResponse, { slug: string }>(GET_TRAINING_BY_SLUG, { slug })
    return result.trainingProgram
  }

  static async getUpcomingSchedules(limit?: number) {
    const result = await fetchQuery<UpcomingSchedulesResponse, { first?: number }>(GET_UPCOMING_SCHEDULES, {
      first: limit || 5
    })
    return result.schedules.nodes
  }

  static async getProgramCategories() {
    // This would query WordPress categories taxonomy
    // Implementation depends on WordPress schema
    return []
  }

  static async getInstitutions() {
    // This would query WordPress institution taxonomy
    return []
  }
}