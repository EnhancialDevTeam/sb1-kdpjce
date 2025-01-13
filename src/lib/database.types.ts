export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      authors: {
        Row: {
          id: string
          name: string
          avatar: string | null
          bio: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          name: string
          avatar?: string | null
          bio?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          avatar?: string | null
          bio?: string | null
          created_at?: string | null
        }
      }
      posts: {
        Row: {
          id: string
          title: string
          slug: string
          excerpt: string | null
          content: string | null
          featured_image: string | null
          category: string | null
          published_at: string | null
          created_at: string | null
          updated_at: string | null
          author_id: string | null
          status: 'draft' | 'published' | 'archived'
        }
        Insert: {
          id?: string
          title: string
          slug: string
          excerpt?: string | null
          content?: string | null
          featured_image?: string | null
          category?: string | null
          published_at?: string | null
          created_at?: string | null
          updated_at?: string | null
          author_id?: string | null
          status?: 'draft' | 'published' | 'archived'
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          excerpt?: string | null
          content?: string | null
          featured_image?: string | null
          category?: string | null
          published_at?: string | null
          created_at?: string | null
          updated_at?: string | null
          author_id?: string | null
          status?: 'draft' | 'published' | 'archived'
        }
      }
      post_tags: {
        Row: {
          post_id: string
          tag_id: string
          created_at: string | null
        }
        Insert: {
          post_id: string
          tag_id: string
          created_at?: string | null
        }
        Update: {
          post_id?: string
          tag_id?: string
          created_at?: string | null
        }
      }
      tags: {
        Row: {
          id: string
          name: string
          created_at: string | null
        }
        Insert: {
          id?: string
          name: string
          created_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          created_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}