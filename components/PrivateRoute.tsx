"use client"
import { ReactNode, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useToken } from '@/utils/store';
// import { redirect } from 'next/navigation';

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { token } = useToken();
  const pathname = usePathname();
  const router = useRouter()

  useEffect(() => {
    if (!token ) {
        router.push("sign-up")
    }

  }, [token, pathname]);

  // Render the children only if the user is authenticated
  return token ? <>{children}</> : null;
};

export default PrivateRoute;
