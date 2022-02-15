function TASK ({data}) {
    return(
    <>
    <div className='relative space-y-4 pt-4'>
        {data?.map((task) => (
            <>
            <div className="pb-14 pl-4 pt-2 pr-6 bg-slate-700 rounded-lg">
                <h1 className='text-white'>{task?.name}</h1>
                <p className='pt-2 text-white'>{task?.points}</p>
            </div>
            </>
        ))}
    </div>
    </>
    );
}

export default TASK;