import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://example.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? 'public-anon-key';

// Shared Supabase client for future CRUD modules in blog/projects/admin.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
