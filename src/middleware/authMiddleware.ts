import { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

export async function requireAuth(): Promise<User> {
  const { data: { session }, error } = await supabase.auth.getSession();
  
  if (error || !session?.user) {
    throw new Error('Authentication required');
  }
  
  return session.user;
}

export async function checkRole(user: User, requiredRole: string): Promise<boolean> {
  const { data, error } = await supabase
    .from('user_roles')
    .select('role')
    .eq('user_id', user.id)
    .single();

  if (error || !data) {
    return false;
  }

  return data.role === requiredRole;
}