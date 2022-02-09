import Link from 'next/link';

const Main_Body = () => {
    return (
        <>
            <card className= "card container mx-auto flex flex-col h-full w-1/2 items-center">
                <h1 className= "text-white font-medium text-6xl text-center pt-10 pb-5">Issue Tracking Doesn’t</h1>
                <h1 className= "text-white font-medium text-6xl text-center">Have to Be a Nightmare</h1>
                <p className= "text-white text-xl pt-8 text-center w-2/3">Dealing With Bugs Is Hard Enough, Reliably Record Incoming Cases From Start To Finish</p>
                <div className="py-14">
                    <Link href='/start'>
                        <button className="bg-red-800 text-white hover:bg-transparent hover:text-red-800 
                        hover:border-2 hover:border-red-800 text-lg font-semibold py-3 px-12 rounded-xl">
                            Try Now
                        </button>
                    </Link>
                </div>
            </card>
        </>
    );
}

export default Main_Body