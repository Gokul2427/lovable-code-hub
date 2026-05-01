export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      customers: {
        Row: {
          address: string | null
          code: string
          converted_from_lead: boolean | null
          created_at: string
          driving_license_number: string | null
          email: string | null
          full_name: string
          id: string
          id_proof_number: string | null
          id_proof_type: string | null
          is_active: boolean | null
          lead_id: string | null
          notes: string | null
          phone: string
          updated_at: string
          user_id: string
        }
        Insert: {
          address?: string | null
          code: string
          converted_from_lead?: boolean | null
          created_at?: string
          driving_license_number?: string | null
          email?: string | null
          full_name: string
          id?: string
          id_proof_number?: string | null
          id_proof_type?: string | null
          is_active?: boolean | null
          lead_id?: string | null
          notes?: string | null
          phone: string
          updated_at?: string
          user_id: string
        }
        Update: {
          address?: string | null
          code?: string
          converted_from_lead?: boolean | null
          created_at?: string
          driving_license_number?: string | null
          email?: string | null
          full_name?: string
          id?: string
          id_proof_number?: string | null
          id_proof_type?: string | null
          is_active?: boolean | null
          lead_id?: string | null
          notes?: string | null
          phone?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "customers_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      dealer_testimonials: {
        Row: {
          created_at: string
          customer_name: string
          id: string
          is_verified: boolean | null
          rating: number
          review: string | null
          sale_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          customer_name: string
          id?: string
          is_verified?: boolean | null
          rating: number
          review?: string | null
          sale_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          customer_name?: string
          id?: string
          is_verified?: boolean | null
          rating?: number
          review?: string | null
          sale_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "dealer_testimonials_sale_id_fkey"
            columns: ["sale_id"]
            isOneToOne: false
            referencedRelation: "sales"
            referencedColumns: ["id"]
          },
        ]
      }
      documents: {
        Row: {
          created_at: string
          document_name: string
          document_type: Database["public"]["Enums"]["document_type"]
          document_url: string
          expiry_date: string | null
          id: string
          notes: string | null
          reference_id: string
          reference_type: string
          status: Database["public"]["Enums"]["document_status"]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          document_name: string
          document_type: Database["public"]["Enums"]["document_type"]
          document_url: string
          expiry_date?: string | null
          id?: string
          notes?: string | null
          reference_id: string
          reference_type: string
          status?: Database["public"]["Enums"]["document_status"]
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          document_name?: string
          document_type?: Database["public"]["Enums"]["document_type"]
          document_url?: string
          expiry_date?: string | null
          id?: string
          notes?: string | null
          reference_id?: string
          reference_type?: string
          status?: Database["public"]["Enums"]["document_status"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      emi_documents: {
        Row: {
          bucket_name: string
          created_at: string | null
          document_name: string
          document_type: string | null
          document_url: string
          id: string
          reference_id: string
          reference_type: string
          uploaded_by: string | null
          user_id: string
        }
        Insert: {
          bucket_name?: string
          created_at?: string | null
          document_name: string
          document_type?: string | null
          document_url: string
          id?: string
          reference_id: string
          reference_type: string
          uploaded_by?: string | null
          user_id: string
        }
        Update: {
          bucket_name?: string
          created_at?: string | null
          document_name?: string
          document_type?: string | null
          document_url?: string
          id?: string
          reference_id?: string
          reference_type?: string
          uploaded_by?: string | null
          user_id?: string
        }
        Relationships: []
      }
      emi_schedules: {
        Row: {
          amount_paid: number | null
          created_at: string
          due_date: string
          emi_amount: number
          emi_number: number
          id: string
          interest_component: number | null
          interest_paid: number | null
          notes: string | null
          paid_date: string | null
          principal_component: number | null
          principal_paid: number | null
          sale_id: string
          status: Database["public"]["Enums"]["emi_status"]
          updated_at: string
          user_id: string
        }
        Insert: {
          amount_paid?: number | null
          created_at?: string
          due_date: string
          emi_amount: number
          emi_number: number
          id?: string
          interest_component?: number | null
          interest_paid?: number | null
          notes?: string | null
          paid_date?: string | null
          principal_component?: number | null
          principal_paid?: number | null
          sale_id: string
          status?: Database["public"]["Enums"]["emi_status"]
          updated_at?: string
          user_id: string
        }
        Update: {
          amount_paid?: number | null
          created_at?: string
          due_date?: string
          emi_amount?: number
          emi_number?: number
          id?: string
          interest_component?: number | null
          interest_paid?: number | null
          notes?: string | null
          paid_date?: string | null
          principal_component?: number | null
          principal_paid?: number | null
          sale_id?: string
          status?: Database["public"]["Enums"]["emi_status"]
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "emi_schedules_sale_id_fkey"
            columns: ["sale_id"]
            isOneToOne: false
            referencedRelation: "sales"
            referencedColumns: ["id"]
          },
        ]
      }
      expenses: {
        Row: {
          amount: number
          category: string
          created_at: string
          description: string
          expense_date: string
          expense_number: string
          id: string
          notes: string | null
          payment_mode: Database["public"]["Enums"]["payment_mode"]
          updated_at: string
          user_id: string
          vehicle_id: string | null
        }
        Insert: {
          amount: number
          category: string
          created_at?: string
          description: string
          expense_date?: string
          expense_number: string
          id?: string
          notes?: string | null
          payment_mode?: Database["public"]["Enums"]["payment_mode"]
          updated_at?: string
          user_id: string
          vehicle_id?: string | null
        }
        Update: {
          amount?: number
          category?: string
          created_at?: string
          description?: string
          expense_date?: string
          expense_number?: string
          id?: string
          notes?: string | null
          payment_mode?: Database["public"]["Enums"]["payment_mode"]
          updated_at?: string
          user_id?: string
          vehicle_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "expenses_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          assigned_to: string | null
          budget_max: number | null
          budget_min: number | null
          city: string | null
          converted_from_lead: boolean | null
          created_at: string
          customer_name: string
          email: string | null
          follow_up_date: string | null
          id: string
          last_contact_date: string | null
          last_viewed_at: string | null
          lead_number: string
          lead_type: string | null
          notes: string | null
          phone: string
          priority: string
          source: string
          status: string
          updated_at: string
          user_id: string
          vehicle_interest: string | null
        }
        Insert: {
          assigned_to?: string | null
          budget_max?: number | null
          budget_min?: number | null
          city?: string | null
          converted_from_lead?: boolean | null
          created_at?: string
          customer_name: string
          email?: string | null
          follow_up_date?: string | null
          id?: string
          last_contact_date?: string | null
          last_viewed_at?: string | null
          lead_number: string
          lead_type?: string | null
          notes?: string | null
          phone: string
          priority?: string
          source?: string
          status?: string
          updated_at?: string
          user_id: string
          vehicle_interest?: string | null
        }
        Update: {
          assigned_to?: string | null
          budget_max?: number | null
          budget_min?: number | null
          city?: string | null
          converted_from_lead?: boolean | null
          created_at?: string
          customer_name?: string
          email?: string | null
          follow_up_date?: string | null
          id?: string
          last_contact_date?: string | null
          last_viewed_at?: string | null
          lead_number?: string
          lead_type?: string | null
          notes?: string | null
          phone?: string
          priority?: string
          source?: string
          status?: string
          updated_at?: string
          user_id?: string
          vehicle_interest?: string | null
        }
        Relationships: []
      }
      marketplace_admins: {
        Row: {
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      marketplace_moderation: {
        Row: {
          action: string
          badge_value: string | null
          created_at: string
          id: string
          notes: string | null
          performed_by: string | null
          target_id: string | null
          target_type: string
        }
        Insert: {
          action: string
          badge_value?: string | null
          created_at?: string
          id?: string
          notes?: string | null
          performed_by?: string | null
          target_id?: string | null
          target_type: string
        }
        Update: {
          action?: string
          badge_value?: string | null
          created_at?: string
          id?: string
          notes?: string | null
          performed_by?: string | null
          target_id?: string | null
          target_type?: string
        }
        Relationships: []
      }
      marketplace_settings: {
        Row: {
          id: string
          setting_key: string
          setting_value: string | null
          updated_at: string
        }
        Insert: {
          id?: string
          setting_key: string
          setting_value?: string | null
          updated_at?: string
        }
        Update: {
          id?: string
          setting_key?: string
          setting_value?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      payments: {
        Row: {
          amount: number
          created_at: string
          customer_id: string | null
          description: string | null
          effective_date: string | null
          id: string
          interest_amount: number | null
          payment_date: string
          payment_mode: Database["public"]["Enums"]["payment_mode"]
          payment_number: string
          payment_purpose: string | null
          payment_type: string
          principal_amount: number | null
          profit_amount: number | null
          reference_id: string | null
          reference_type: string | null
          user_id: string
          vendor_id: string | null
        }
        Insert: {
          amount: number
          created_at?: string
          customer_id?: string | null
          description?: string | null
          effective_date?: string | null
          id?: string
          interest_amount?: number | null
          payment_date?: string
          payment_mode?: Database["public"]["Enums"]["payment_mode"]
          payment_number: string
          payment_purpose?: string | null
          payment_type: string
          principal_amount?: number | null
          profit_amount?: number | null
          reference_id?: string | null
          reference_type?: string | null
          user_id: string
          vendor_id?: string | null
        }
        Update: {
          amount?: number
          created_at?: string
          customer_id?: string | null
          description?: string | null
          effective_date?: string | null
          id?: string
          interest_amount?: number | null
          payment_date?: string
          payment_mode?: Database["public"]["Enums"]["payment_mode"]
          payment_number?: string
          payment_purpose?: string | null
          payment_type?: string
          principal_amount?: number | null
          profit_amount?: number | null
          reference_id?: string | null
          reference_type?: string | null
          user_id?: string
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      public_page_events: {
        Row: {
          created_at: string
          event_type: string
          id: string
          metadata: Json | null
          public_page_id: string | null
          session_id: string | null
          user_id: string | null
          vehicle_id: string | null
        }
        Insert: {
          created_at?: string
          event_type: string
          id?: string
          metadata?: Json | null
          public_page_id?: string | null
          session_id?: string | null
          user_id?: string | null
          vehicle_id?: string | null
        }
        Update: {
          created_at?: string
          event_type?: string
          id?: string
          metadata?: Json | null
          public_page_id?: string | null
          session_id?: string | null
          user_id?: string | null
          vehicle_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_page_events_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      sales: {
        Row: {
          amount_paid: number | null
          annual_interest_rate: number | null
          balance_amount: number | null
          created_at: string
          customer_id: string | null
          discount: number | null
          down_payment: number | null
          emi_configured: boolean | null
          emi_tenure_months: number | null
          id: string
          is_emi: boolean | null
          notes: string | null
          payment_mode: Database["public"]["Enums"]["payment_mode"] | null
          sale_date: string
          sale_number: string
          selling_price: number
          status: string
          tax_amount: number | null
          total_amount: number
          updated_at: string
          user_id: string
          vehicle_id: string | null
        }
        Insert: {
          amount_paid?: number | null
          annual_interest_rate?: number | null
          balance_amount?: number | null
          created_at?: string
          customer_id?: string | null
          discount?: number | null
          down_payment?: number | null
          emi_configured?: boolean | null
          emi_tenure_months?: number | null
          id?: string
          is_emi?: boolean | null
          notes?: string | null
          payment_mode?: Database["public"]["Enums"]["payment_mode"] | null
          sale_date?: string
          sale_number: string
          selling_price?: number
          status?: string
          tax_amount?: number | null
          total_amount?: number
          updated_at?: string
          user_id: string
          vehicle_id?: string | null
        }
        Update: {
          amount_paid?: number | null
          annual_interest_rate?: number | null
          balance_amount?: number | null
          created_at?: string
          customer_id?: string | null
          discount?: number | null
          down_payment?: number | null
          emi_configured?: boolean | null
          emi_tenure_months?: number | null
          id?: string
          is_emi?: boolean | null
          notes?: string | null
          payment_mode?: Database["public"]["Enums"]["payment_mode"] | null
          sale_date?: string
          sale_number?: string
          selling_price?: number
          status?: string
          tax_amount?: number | null
          total_amount?: number
          updated_at?: string
          user_id?: string
          vehicle_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sales_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      service_packages: {
        Row: {
          created_at: string
          description: string | null
          duration_hours: number | null
          id: string
          is_active: boolean | null
          name: string
          price: number
          services_included: string[] | null
          updated_at: string
          user_id: string
          vehicle_types: string[] | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          duration_hours?: number | null
          id?: string
          is_active?: boolean | null
          name: string
          price?: number
          services_included?: string[] | null
          updated_at?: string
          user_id: string
          vehicle_types?: string[] | null
        }
        Update: {
          created_at?: string
          description?: string | null
          duration_hours?: number | null
          id?: string
          is_active?: boolean | null
          name?: string
          price?: number
          services_included?: string[] | null
          updated_at?: string
          user_id?: string
          vehicle_types?: string[] | null
        }
        Relationships: []
      }
      service_records: {
        Row: {
          cost: number | null
          created_at: string
          customer_name: string | null
          customer_phone: string | null
          end_date: string | null
          id: string
          labor_cost: number | null
          next_service_date: string | null
          notes: string | null
          package_id: string | null
          parts_cost: number | null
          service_date: string | null
          service_number: string
          service_type: string | null
          services_done: string[] | null
          start_date: string | null
          status: string | null
          total_cost: number | null
          updated_at: string
          user_id: string
          vehicle_name: string | null
          vehicle_number: string | null
        }
        Insert: {
          cost?: number | null
          created_at?: string
          customer_name?: string | null
          customer_phone?: string | null
          end_date?: string | null
          id?: string
          labor_cost?: number | null
          next_service_date?: string | null
          notes?: string | null
          package_id?: string | null
          parts_cost?: number | null
          service_date?: string | null
          service_number: string
          service_type?: string | null
          services_done?: string[] | null
          start_date?: string | null
          status?: string | null
          total_cost?: number | null
          updated_at?: string
          user_id: string
          vehicle_name?: string | null
          vehicle_number?: string | null
        }
        Update: {
          cost?: number | null
          created_at?: string
          customer_name?: string | null
          customer_phone?: string | null
          end_date?: string | null
          id?: string
          labor_cost?: number | null
          next_service_date?: string | null
          notes?: string | null
          package_id?: string | null
          parts_cost?: number | null
          service_date?: string | null
          service_number?: string
          service_type?: string | null
          services_done?: string[] | null
          start_date?: string | null
          status?: string | null
          total_cost?: number | null
          updated_at?: string
          user_id?: string
          vehicle_name?: string | null
          vehicle_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "service_records_package_id_fkey"
            columns: ["package_id"]
            isOneToOne: false
            referencedRelation: "service_packages"
            referencedColumns: ["id"]
          },
        ]
      }
      settings: {
        Row: {
          catalogue_template: string | null
          created_at: string
          currency: string | null
          dealer_address: string | null
          dealer_email: string | null
          dealer_gst: string | null
          dealer_name: string | null
          dealer_phone: string | null
          enable_auto_lead_popup: boolean | null
          id: string
          invoice_prefix: string | null
          marketplace_enabled: boolean | null
          public_page_enabled: boolean | null
          public_page_id: string | null
          public_page_theme: string | null
          purchase_prefix: string | null
          sale_prefix: string | null
          shop_logo_url: string | null
          show_vehicle_page_enquiries: boolean | null
          show_vehicle_page_views: boolean | null
          tax_rate: number | null
          updated_at: string
          user_id: string
          whatsapp_number: string | null
        }
        Insert: {
          catalogue_template?: string | null
          created_at?: string
          currency?: string | null
          dealer_address?: string | null
          dealer_email?: string | null
          dealer_gst?: string | null
          dealer_name?: string | null
          dealer_phone?: string | null
          enable_auto_lead_popup?: boolean | null
          id?: string
          invoice_prefix?: string | null
          marketplace_enabled?: boolean | null
          public_page_enabled?: boolean | null
          public_page_id?: string | null
          public_page_theme?: string | null
          purchase_prefix?: string | null
          sale_prefix?: string | null
          shop_logo_url?: string | null
          show_vehicle_page_enquiries?: boolean | null
          show_vehicle_page_views?: boolean | null
          tax_rate?: number | null
          updated_at?: string
          user_id: string
          whatsapp_number?: string | null
        }
        Update: {
          catalogue_template?: string | null
          created_at?: string
          currency?: string | null
          dealer_address?: string | null
          dealer_email?: string | null
          dealer_gst?: string | null
          dealer_name?: string | null
          dealer_phone?: string | null
          enable_auto_lead_popup?: boolean | null
          id?: string
          invoice_prefix?: string | null
          marketplace_enabled?: boolean | null
          public_page_enabled?: boolean | null
          public_page_id?: string | null
          public_page_theme?: string | null
          purchase_prefix?: string | null
          sale_prefix?: string | null
          shop_logo_url?: string | null
          show_vehicle_page_enquiries?: boolean | null
          show_vehicle_page_views?: boolean | null
          tax_rate?: number | null
          updated_at?: string
          user_id?: string
          whatsapp_number?: string | null
        }
        Relationships: []
      }
      sticky_notes: {
        Row: {
          color: string | null
          content: string | null
          created_at: string
          id: string
          title: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          color?: string | null
          content?: string | null
          created_at?: string
          id?: string
          title?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          color?: string | null
          content?: string | null
          created_at?: string
          id?: string
          title?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      support_tickets: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          phone: string | null
          status: string
          subject: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          phone?: string | null
          status?: string
          subject?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string | null
          status?: string
          subject?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      vehicle_images: {
        Row: {
          created_at: string
          display_order: number | null
          id: string
          image_url: string
          is_primary: boolean | null
          user_id: string
          vehicle_id: string
        }
        Insert: {
          created_at?: string
          display_order?: number | null
          id?: string
          image_url: string
          is_primary?: boolean | null
          user_id: string
          vehicle_id: string
        }
        Update: {
          created_at?: string
          display_order?: number | null
          id?: string
          image_url?: string
          is_primary?: boolean | null
          user_id?: string
          vehicle_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vehicle_images_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      vehicle_inspections: {
        Row: {
          checklist: Json | null
          created_at: string
          electrical_score: number | null
          exterior_score: number | null
          id: string
          inspection_date: string | null
          inspector_id: string | null
          interior_score: number | null
          is_certified: boolean | null
          mechanical_score: number | null
          notes: string | null
          overall_score: number | null
          tyres_score: number | null
          updated_at: string
          user_id: string
          vehicle_id: string
        }
        Insert: {
          checklist?: Json | null
          created_at?: string
          electrical_score?: number | null
          exterior_score?: number | null
          id?: string
          inspection_date?: string | null
          inspector_id?: string | null
          interior_score?: number | null
          is_certified?: boolean | null
          mechanical_score?: number | null
          notes?: string | null
          overall_score?: number | null
          tyres_score?: number | null
          updated_at?: string
          user_id: string
          vehicle_id: string
        }
        Update: {
          checklist?: Json | null
          created_at?: string
          electrical_score?: number | null
          exterior_score?: number | null
          id?: string
          inspection_date?: string | null
          inspector_id?: string | null
          interior_score?: number | null
          is_certified?: boolean | null
          mechanical_score?: number | null
          notes?: string | null
          overall_score?: number | null
          tyres_score?: number | null
          updated_at?: string
          user_id?: string
          vehicle_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vehicle_inspections_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      vehicle_purchases: {
        Row: {
          amount_paid: number
          balance_amount: number
          created_at: string
          id: string
          notes: string | null
          payment_mode: Database["public"]["Enums"]["payment_mode"] | null
          purchase_date: string
          purchase_number: string
          purchase_price: number
          updated_at: string
          user_id: string
          vehicle_id: string | null
          vendor_id: string | null
        }
        Insert: {
          amount_paid?: number
          balance_amount?: number
          created_at?: string
          id?: string
          notes?: string | null
          payment_mode?: Database["public"]["Enums"]["payment_mode"] | null
          purchase_date?: string
          purchase_number: string
          purchase_price?: number
          updated_at?: string
          user_id: string
          vehicle_id?: string | null
          vendor_id?: string | null
        }
        Update: {
          amount_paid?: number
          balance_amount?: number
          created_at?: string
          id?: string
          notes?: string | null
          payment_mode?: Database["public"]["Enums"]["payment_mode"] | null
          purchase_date?: string
          purchase_number?: string
          purchase_price?: number
          updated_at?: string
          user_id?: string
          vehicle_id?: string | null
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vehicle_purchases_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vehicle_purchases_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      vehicles: {
        Row: {
          battery_health: string | null
          boot_space: number | null
          brand: string
          chassis_number: string | null
          code: string
          color: string | null
          condition: string | null
          created_at: string
          engine_number: string | null
          fitness_expiry: string | null
          fuel_type: string | null
          hypothecation: string | null
          id: string
          image_badge_color: string | null
          image_badge_text: string | null
          insurance_expiry: string | null
          is_public: boolean | null
          last_service_date: string | null
          manufacturing_year: number | null
          marketplace_status: string | null
          mileage: number | null
          model: string
          next_service_due: string | null
          notes: string | null
          number_of_owners: number | null
          odometer_reading: number | null
          permit_expiry: string | null
          public_description: string | null
          public_features: string[] | null
          public_highlights: string[] | null
          public_page_id: string | null
          puc_expiry: string | null
          purchase_date: string | null
          purchase_price: number | null
          purchase_status: string | null
          registration_number: string | null
          registration_year: number | null
          road_tax_expiry: string | null
          seating_capacity: number | null
          selling_price: number | null
          service_history: string | null
          show_chassis_number: boolean | null
          show_engine_number: boolean | null
          status: string
          strikeout_price: number | null
          transmission: string | null
          tyre_condition: string | null
          updated_at: string
          user_id: string
          variant: string | null
          vehicle_type: string | null
          vendor_id: string | null
        }
        Insert: {
          battery_health?: string | null
          boot_space?: number | null
          brand: string
          chassis_number?: string | null
          code: string
          color?: string | null
          condition?: string | null
          created_at?: string
          engine_number?: string | null
          fitness_expiry?: string | null
          fuel_type?: string | null
          hypothecation?: string | null
          id?: string
          image_badge_color?: string | null
          image_badge_text?: string | null
          insurance_expiry?: string | null
          is_public?: boolean | null
          last_service_date?: string | null
          manufacturing_year?: number | null
          marketplace_status?: string | null
          mileage?: number | null
          model: string
          next_service_due?: string | null
          notes?: string | null
          number_of_owners?: number | null
          odometer_reading?: number | null
          permit_expiry?: string | null
          public_description?: string | null
          public_features?: string[] | null
          public_highlights?: string[] | null
          public_page_id?: string | null
          puc_expiry?: string | null
          purchase_date?: string | null
          purchase_price?: number | null
          purchase_status?: string | null
          registration_number?: string | null
          registration_year?: number | null
          road_tax_expiry?: string | null
          seating_capacity?: number | null
          selling_price?: number | null
          service_history?: string | null
          show_chassis_number?: boolean | null
          show_engine_number?: boolean | null
          status?: string
          strikeout_price?: number | null
          transmission?: string | null
          tyre_condition?: string | null
          updated_at?: string
          user_id: string
          variant?: string | null
          vehicle_type?: string | null
          vendor_id?: string | null
        }
        Update: {
          battery_health?: string | null
          boot_space?: number | null
          brand?: string
          chassis_number?: string | null
          code?: string
          color?: string | null
          condition?: string | null
          created_at?: string
          engine_number?: string | null
          fitness_expiry?: string | null
          fuel_type?: string | null
          hypothecation?: string | null
          id?: string
          image_badge_color?: string | null
          image_badge_text?: string | null
          insurance_expiry?: string | null
          is_public?: boolean | null
          last_service_date?: string | null
          manufacturing_year?: number | null
          marketplace_status?: string | null
          mileage?: number | null
          model?: string
          next_service_due?: string | null
          notes?: string | null
          number_of_owners?: number | null
          odometer_reading?: number | null
          permit_expiry?: string | null
          public_description?: string | null
          public_features?: string[] | null
          public_highlights?: string[] | null
          public_page_id?: string | null
          puc_expiry?: string | null
          purchase_date?: string | null
          purchase_price?: number | null
          purchase_status?: string | null
          registration_number?: string | null
          registration_year?: number | null
          road_tax_expiry?: string | null
          seating_capacity?: number | null
          selling_price?: number | null
          service_history?: string | null
          show_chassis_number?: boolean | null
          show_engine_number?: boolean | null
          status?: string
          strikeout_price?: number | null
          transmission?: string | null
          tyre_condition?: string | null
          updated_at?: string
          user_id?: string
          variant?: string | null
          vehicle_type?: string | null
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vehicles_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      vendors: {
        Row: {
          address: string | null
          bank_account_number: string | null
          bank_ifsc: string | null
          bank_name: string | null
          code: string
          contact_person: string | null
          converted_from_lead: boolean | null
          created_at: string
          email: string | null
          gst_number: string | null
          id: string
          is_active: boolean | null
          lead_id: string | null
          name: string
          notes: string | null
          phone: string | null
          updated_at: string
          user_id: string
          vendor_type: string | null
        }
        Insert: {
          address?: string | null
          bank_account_number?: string | null
          bank_ifsc?: string | null
          bank_name?: string | null
          code: string
          contact_person?: string | null
          converted_from_lead?: boolean | null
          created_at?: string
          email?: string | null
          gst_number?: string | null
          id?: string
          is_active?: boolean | null
          lead_id?: string | null
          name: string
          notes?: string | null
          phone?: string | null
          updated_at?: string
          user_id: string
          vendor_type?: string | null
        }
        Update: {
          address?: string | null
          bank_account_number?: string | null
          bank_ifsc?: string | null
          bank_name?: string | null
          code?: string
          contact_person?: string | null
          converted_from_lead?: boolean | null
          created_at?: string
          email?: string | null
          gst_number?: string | null
          id?: string
          is_active?: boolean | null
          lead_id?: string | null
          name?: string
          notes?: string | null
          phone?: string | null
          updated_at?: string
          user_id?: string
          vendor_type?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_marketplace_admin: { Args: { _user_id: string }; Returns: boolean }
    }
    Enums: {
      app_role: "admin" | "moderator" | "dealer" | "viewer"
      document_status: "active" | "expired" | "expiring_soon" | "pending"
      document_type:
        | "rc"
        | "insurance"
        | "puc"
        | "fitness"
        | "permit"
        | "road_tax"
        | "invoice"
        | "agreement"
        | "id_proof"
        | "address_proof"
        | "emi_document"
        | "other"
      emi_status:
        | "pending"
        | "paid"
        | "partial"
        | "overdue"
        | "waived"
        | "partially_paid"
      payment_mode:
        | "cash"
        | "cheque"
        | "bank_transfer"
        | "upi"
        | "card"
        | "finance"
        | "other"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "dealer", "viewer"],
      document_status: ["active", "expired", "expiring_soon", "pending"],
      document_type: [
        "rc",
        "insurance",
        "puc",
        "fitness",
        "permit",
        "road_tax",
        "invoice",
        "agreement",
        "id_proof",
        "address_proof",
        "emi_document",
        "other",
      ],
      emi_status: [
        "pending",
        "paid",
        "partial",
        "overdue",
        "waived",
        "partially_paid",
      ],
      payment_mode: [
        "cash",
        "cheque",
        "bank_transfer",
        "upi",
        "card",
        "finance",
        "other",
      ],
    },
  },
} as const
