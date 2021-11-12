import Layout from 'components/Layout';
import { Auth } from '@supabase/ui';
import { supabase } from '../lib/initSupabase';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import '../styles/globals.css';
import { useState } from 'react';
import Authorization from 'components/Authorization';

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Auth.UserContextProvider supabaseClient={supabase}>
          <Authorization>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Authorization>
        </Auth.UserContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
