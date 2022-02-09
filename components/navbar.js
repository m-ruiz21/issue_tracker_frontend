import Image from 'next/image'

const NavBar = () => {
    return (
        <>
            <nav className="bg-slate-900">
                <div className="container">
                    <div className='flex justify-start items-center'>
                        <div className="pt-2 pb-0.5 px-2">
                            <Image src="/logo.png" alt="capital one logo" width="60" height="65" />
                        </div>
                    </div>                    
                </div>
            </nav>
        </>
    );
}

export default NavBar