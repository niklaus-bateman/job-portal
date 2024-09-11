import { SupabaseClient, createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseClient = async(supabaseAccessToken0 => {
    const supabase = createClient(supabaseUrl, supabaseKey, {
        global: {
            headers: {
                Authorization: `Bearer ${supabaseAccessToken0}`
            }
        }
    });
    return supabase;
})
export default supabaseClient;
