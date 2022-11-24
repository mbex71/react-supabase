import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://wwwjxmyudoetfvcjfqaj.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3d2p4bXl1ZG9ldGZ2Y2pmcWFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkyODk4NjksImV4cCI6MTk4NDg2NTg2OX0.TyTWKX5aYUaoW9jMNKP5TQZ6KUsUpQ7_QMYYshNv0r8',{
    auth:{
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl:true
    }
})

export default supabase