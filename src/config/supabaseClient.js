import { createClient } from '@supabase/supabase-js';

// Get these strings from your Supabase Dashboard under Settings (gear icon) > API
const supabaseUrl = "https://lsbjmsiwrbqglkxgabkj.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzYmptc2l3cmJxZ2xreGdhYmtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMwOTAwNzIsImV4cCI6MjA5ODY2NjA3Mn0.KZAPuqXHn1EdsJuUCf3hcucURbpm1nNRTOcmLIXMCJY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);