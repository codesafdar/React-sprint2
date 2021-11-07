const Heading=()=>{
    return (<>
    <header className="shadow-md md:mx-4 ">
    <div className="mb-8 md:mb-12 py-4 mx-4">
        <nav className="flex items-center justify-between md:justify-around px-2 h-12">
            <a className="font-extrabold text-3xl text-purple-900" href="#">GET<span
                    className="text-blue-600">FIT</span><span class="text-pink-500">NOW</span></a>
            <div className="flex flex-col space-y-1 items-end cursor-pointer">
                <span className="w-9 h-1 bg-pink-500 rounded-full block"></span>
                <span className="w-8 h-1 bg-blue-600 rounded-full block"></span>
                <span className="w-10 h-1 bg-purple-700 rounded-full block"></span>
            </div>


        </nav>
    </div>
</header>
</>)
}
export default Heading;