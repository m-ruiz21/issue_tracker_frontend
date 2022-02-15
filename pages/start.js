import NavBar from 'components/navbar'
import useSWR from 'swr'
import Image from 'next/image'
import { DragDropContext } from 'react-beautiful-dnd';
import TASK from 'components/task';
import ERROR_SCREEN from 'components/error_screen';
import LOADING_SCREEN from 'components/loading_screen';

const url = 'http://127.0.0.1:8000'

const fetcher = (...args) => fetch(url + args).then(res => res.json())

function start() {
    const {data, error} = useSWR('/api/tickets', fetcher)   
    
    if (error) return <ERROR_SCREEN/>
    if (!data) return <LOADING_SCREEN/>
    
    return (
        <>
            <NavBar/>
            <div>
                <h1 className='text-white pl-10 pt-10 font-semibold text-3xl'>Howdy!</h1>       
            </div>
            <div className='p-10 grid grid-cols-4 space-x-8'>
                {/* Todo Column */}
                <div className='w-5/6'> 
                    <div className=" w-1/6 bg-red-800 rounded-md"><h1 className='py-1 flex justify-center items-center text-white text-sm'>To-Do</h1></div>
                    <TASK data = {data?.TODO}/>
                </div>
                {/* Next Column */}
                <div className='w-5/6'> 
                    <div className=" w-1/6 bg-orange-800 rounded-md"><h1 className='py-1 flex justify-center items-center text-white text-sm'>Next</h1></div>
                    <TASK data = {data?.NEXT}/>
                </div>
                {/* Doing Column */}
                <div className='w-5/6'> 
                    <div className=" w-1/6 bg-yellow-800 rounded-md"><h1 className='py-1 flex justify-center items-center text-white text-sm'>Doing</h1></div>
                    <TASK data = {data?.DOING}/>
                </div>
                {/* Done Columns */}
                <div className='w-5/6'> 
                    <div className=" w-1/6 bg-green-800 rounded-md"><h1 className='py-1 flex justify-center items-center text-white text-sm'>Done</h1></div>
                    <TASK data = {data?.DONE}/>
                </div>
            </div>
        </>
    );
}

export default start
