import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://fugctjypzvpulhgzrffo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1Z2N0anlwenZwdWxoZ3pyZmZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5MTY2NDAsImV4cCI6MjA2NjQ5MjY0MH0.sU7kPZyXW6JaOPr4NW0bMDIT_fMx8j_9pWyeTeyLgLg'
export const supabase = createClient(supabaseUrl, supabaseKey)