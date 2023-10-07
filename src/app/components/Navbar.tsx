import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from '@/components/ui/button'
import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
  LogoutLink
} from '@kinde-oss/kinde-auth-nextjs/server'
import { ArrowRight } from 'lucide-react'
// import UserAccountNav from './UserAccountNav'
// import MobileNav from './MobileNav'

const Navbar = () => {
  const { getUser } = getKindeServerSession()
  const user = getUser()

  return (
    <nav className='sticky h-20 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-20 items-center justify-between border-b border-zinc-200'>
          <Link
            href='/'
            className='flex z-40 text-3xl font-bold'>
            <span>Swift </span>
          </Link>

          {/* <MobileNav isAuth={!!user} /> */}

          <div className='hidden items-center space-x-4 sm:flex'>
            {!user ? (
              <>
                <Link
                  href='/pricing'
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}>
                  Pricing
                </Link>
                
                <LoginLink
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}>
                  Sign in
                </LoginLink>

                <RegisterLink
                  className={buttonVariants({
                    size: 'sm',
                  })}>
                  Get started 
                </RegisterLink>
              </>
            ) : (
              <>
                <Link
                  href='/pricing'
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}>
                  Pricing
                </Link>

                <Link
                  href='/dashboard'
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}>
                  Dashboard
                </Link>

  
                <LogoutLink className="text-red-600 text-sm">
                    Logout
                </LogoutLink>
                

              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar