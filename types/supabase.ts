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
      leads: {
        Row: {
          id: string
          created_at: string
          updated_at: string

          // Contact Information
          partner1_name: string
          partner1_pronouns: string | null
          partner2_name: string
          partner2_pronouns: string | null
          email: string
          phone: string | null

          // Event Details
          wedding_date: string | null
          location: string | null
          event_type: string
          event_subtype: string | null
          session_tier: string | null
          guest_count: string | null

          // Vision & Style
          tradition: string | null
          tradition_other: string | null
          film_style: string | null

          // What They're Looking For
          deliverables: string[] | null
          budget_range: string | null

          // Story & Notes
          how_you_met: string | null
          additional_notes: string | null

          // Lead Source & Timeline
          how_did_you_hear: string | null
          booking_timeline: string | null

          // CRM Fields
          status: 'new' | 'contacted' | 'proposal_sent' | 'booked' | 'declined' | 'archived'
          priority: 'low' | 'medium' | 'high'
          assigned_to: string | null
          last_contacted_at: string | null
          next_follow_up_at: string | null
          estimated_value: number | null

          // Metadata
          source: string
          utm_source: string | null
          utm_medium: string | null
          utm_campaign: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          partner1_name: string
          partner1_pronouns?: string | null
          partner2_name: string
          partner2_pronouns?: string | null
          email: string
          phone?: string | null
          wedding_date?: string | null
          location?: string | null
          event_type: string
          event_subtype?: string | null
          session_tier?: string | null
          guest_count?: string | null
          tradition?: string | null
          tradition_other?: string | null
          film_style?: string | null
          deliverables?: string[] | null
          budget_range?: string | null
          how_you_met?: string | null
          additional_notes?: string | null
          how_did_you_hear?: string | null
          booking_timeline?: string | null
          status?: 'new' | 'contacted' | 'proposal_sent' | 'booked' | 'declined' | 'archived'
          priority?: 'low' | 'medium' | 'high'
          assigned_to?: string | null
          last_contacted_at?: string | null
          next_follow_up_at?: string | null
          estimated_value?: number | null
          source?: string
          utm_source?: string | null
          utm_medium?: string | null
          utm_campaign?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          partner1_name?: string
          partner1_pronouns?: string | null
          partner2_name?: string
          partner2_pronouns?: string | null
          email?: string
          phone?: string | null
          wedding_date?: string | null
          location?: string | null
          event_type?: string
          event_subtype?: string | null
          session_tier?: string | null
          guest_count?: string | null
          tradition?: string | null
          tradition_other?: string | null
          film_style?: string | null
          deliverables?: string[] | null
          budget_range?: string | null
          how_you_met?: string | null
          additional_notes?: string | null
          how_did_you_hear?: string | null
          booking_timeline?: string | null
          status?: 'new' | 'contacted' | 'proposal_sent' | 'booked' | 'declined' | 'archived'
          priority?: 'low' | 'medium' | 'high'
          assigned_to?: string | null
          last_contacted_at?: string | null
          next_follow_up_at?: string | null
          estimated_value?: number | null
          source?: string
          utm_source?: string | null
          utm_medium?: string | null
          utm_campaign?: string | null
        }
      }
      lead_notes: {
        Row: {
          id: string
          lead_id: string
          created_at: string
          created_by: string | null
          note: string
          note_type: 'general' | 'call' | 'email' | 'meeting' | 'task'
        }
        Insert: {
          id?: string
          lead_id: string
          created_at?: string
          created_by?: string | null
          note: string
          note_type?: 'general' | 'call' | 'email' | 'meeting' | 'task'
        }
        Update: {
          id?: string
          lead_id?: string
          created_at?: string
          created_by?: string | null
          note?: string
          note_type?: 'general' | 'call' | 'email' | 'meeting' | 'task'
        }
      }
      lead_activities: {
        Row: {
          id: string
          lead_id: string
          created_at: string
          activity_type: 'status_change' | 'email_sent' | 'email_received' | 'note_added' | 'proposal_sent' | 'payment_received'
          description: string
          metadata: Json | null
          created_by: string | null
        }
        Insert: {
          id?: string
          lead_id: string
          created_at?: string
          activity_type: 'status_change' | 'email_sent' | 'email_received' | 'note_added' | 'proposal_sent' | 'payment_received'
          description: string
          metadata?: Json | null
          created_by?: string | null
        }
        Update: {
          id?: string
          lead_id?: string
          created_at?: string
          activity_type?: 'status_change' | 'email_sent' | 'email_received' | 'note_added' | 'proposal_sent' | 'payment_received'
          description?: string
          metadata?: Json | null
          created_by?: string | null
        }
      }
      email_templates: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          name: string
          subject: string
          body_html: string
          body_text: string
          template_type: 'confirmation' | 'follow_up' | 'proposal' | 'booking_confirmation' | 'reminder' | 'custom'
          is_active: boolean
          variables: string[] | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          name: string
          subject: string
          body_html: string
          body_text: string
          template_type: 'confirmation' | 'follow_up' | 'proposal' | 'booking_confirmation' | 'reminder' | 'custom'
          is_active?: boolean
          variables?: string[] | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          name?: string
          subject?: string
          body_html?: string
          body_text?: string
          template_type?: 'confirmation' | 'follow_up' | 'proposal' | 'booking_confirmation' | 'reminder' | 'custom'
          is_active?: boolean
          variables?: string[] | null
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
