import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SocialGramm | Auth',
  description: 'Generated by create next app',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className='w-full h-screen justify-center items-center flex'>
        {children}  
      </div>
    </>
  )
}
