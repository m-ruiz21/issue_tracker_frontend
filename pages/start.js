import NavBar from 'components/navbar'
import useSWR from 'swr'

const url = 'http://127.0.0.1:8000'

const fetcher = (...args) => fetch(url + args).then(res => res.json())
const Child = ({ doSomething, value }) => (
    <div onClick={() => doSomething(value)}>Click Me</div>
);

const STATUS = ({status}) => {
    if (status == "TODO") {
        return (
            <div className=" w-1/4 bg-red-800 rounded-md"><h1 className='flex justify-center items-center text-white text-sm'>To-Do</h1></div>
        )
    }
    if (status == "NEXT") {
        return (
            <div className=" w-1/4 bg-orange-800 rounded-md"><h1 className='flex justify-center items-center text-white text-sm'>Next</h1></div>
        )
    }
    if (status == "DOING") {
        return (
            <div className=" w-1/4 bg-yellow-800 rounded-md"><h1 className='flex justify-center items-center text-white text-sm'>Doing</h1></div>
        )
    }
    if (status == "DONE") {
        return (
            <div className=" w-1/4 bg-green-800 rounded-md"><h1 className='flex justify-center items-center text-white text-sm'>Done</h1></div>
        )
    }

}

function start() {
    const {data, error} = useSWR('/api/tickets', fetcher)   
    
    if (error) return 'An error has occured'
    if (!data) return 'Loading'

    const statuses = ["TODO", "NEXT", "DOING", "DONE"];
    return (
        <>
            <NavBar/>
            <h1 className='text-white pl-10 pt-10 font-semibold text-3xl'>Howdy!</h1>
            <div className='flex justify-center items-center'>
                <div className='p-10 grid grid-cols-4 space-x-8'>
                    {statuses.map((status) => (
                        <>
                        <div className='w-3/4'>
                            <STATUS status={status}/>
                            <div className='space-y-4 pt-4'>
                                {data.map((ticket) => (
                                    ticket?.status == status
                                    ? <div className="pb-8 pl-4 pt-2 pr-6 bg-slate-700 rounded-lg"><h1 className='text-white'>{ticket?.name}</h1></div>
                                    : null
                                ))}
                            </div>
                        </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}

export default start