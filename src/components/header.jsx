import React, { useState, useEffect } from 'react'
import { Button } from '../components/ui/button'
import { Link, useSearchParams } from 'react-router-dom'
import logo from '../assets/logo.png'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import { BriefcaseBusiness, Heart, PenBox } from 'lucide-react'

const Header = () => {

    const [showSignIn, setShowSignIn] = useState(false);
    const [search, setSearch] = useSearchParams();
    const { user } = useUser();

    useEffect(() => {
        if (search.get("sign-in")) {
            setShowSignIn(true);
        }
    }, [search]);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setShowSignIn(false);
        }
    }


    return (
        <>
            {showSignIn && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50' onClick={handleOverlayClick}>
                    <SignIn
                        signUpForceRedirectUrl='/onboarding'
                        fallbackRedirectUrl='/onboarding'
                    />
                </div>
            )}

            <nav className='flex p-4 justify-between items-center'>
                <Link to="/">
                    <img src={logo} alt="Logo" className="h-10 w-30" />
                </Link>

                <div className='flex gap-8'>
                    <SignedOut>
                        <Button variant="outline" onClick={() => setShowSignIn(true)}>
                            Login
                        </Button>
                    </SignedOut>
                    <SignedIn>
                        {user?.unsafeMetadata?.role === 'recruiter' && (
                            <Link to='/post-job'>
                                <Button variant="destructive" className='rounded-full'>
                                    <PenBox size={20} className='mr-2' />
                                    Post a Job
                                </Button>
                            </Link>
                        )}
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-10 h-10"
                                }
                            }}>
                            <UserButton.MenuItems>
                                <UserButton.Link
                                    label='My Jobs'
                                    labelIcon={<BriefcaseBusiness size={15} />}
                                    href='/my-jobs'
                                />
                                <UserButton.Link
                                    label='Saved Jobs'
                                    labelIcon={<Heart size={15} />}
                                    href='/saved-jobs'
                                />
                            </UserButton.MenuItems>

                        </UserButton>
                    </SignedIn>
                </div>
            </nav>

        </>

    )
}

export default Header;