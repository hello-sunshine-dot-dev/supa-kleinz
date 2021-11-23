import { supabase } from 'lib/initSupabase';
import create from 'zustand';

//create zustand store
const useStore = create((set) => ({
  //set initial state
  session: supabase.auth.session(),
  isAuthenticating: false,
  setSession: (session) => set({ session }),
}));

supabase.auth.onAuthStateChange(async (_, session) => {
  useStore.setState({ session });
});

export const useIsAuthenticated = () => useStore((state) => !!state.session);

const sessionSelector = (state) => state.session;

export const useUser = () => {
  const session = useStore(sessionSelector);
  return session?.user;
};
