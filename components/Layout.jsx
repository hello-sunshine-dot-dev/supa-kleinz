import { useRouter } from 'next/router';
import Heart from './Heart';
import { Navbar, Footer } from './Navigation';

export default function Layout({ children, ignore = ['/signin'] }) {
  const router = useRouter();

  if (ignore.some((x) => x === router.pathname)) {
    return children;
  }

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      {/* <Heart /> */}
      <main className="bg-fuchsia-100 flex-1">{children}</main>
      <Footer />
    </div>
  );
}
