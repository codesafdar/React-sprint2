const Progress=() =>{
    return(
        <>
 <div>
                <div className="grid space-y-4 ">

                    <div className="">
                        <h2 className="text-gray-800 text-4xl font-semibold">Your Progress </h2>
                        <p className="text-gray-500 pt-2">Lorem ipsum dolor sit amet consectetur, fuga, doloribus?</p>
                    </div>


                    <div className="">
                        <div className="grid grid-cols-3 justify-around w-full font-bold text-gray-100">
                            <button
                                className="font-bold rounded-l-lg bg-purple-600 border-0 hover:bg-purple-400 p-2">TODAY</button>
                            <button className="font-bold bg-blue-400 border-0 hover:bg-purple-400">TOMORROW</button>
                            <button className="font-bold rounded-r-lg bg-blue-400 border-0 hover:bg-purple-400">THIS 
                                WEEK</button>
                            
                        </div>
                    </div>

                </div>




                {/* <!-- Activity Listing --> */}
                <div class="mt-3 space-y-2">


                    {/* <!-- Actvity Listing Card --> */}
                    <div className="shadow-lg rounded-xl p-4 relative overflow-hidden ">
                        <a href="#" className="w-full h-full block">
                            <div className="w-full">
                                <p className="text-pink-500 text-md font-bold ">
                                    75% Squats
                                </p>
                                <p className="text-blue-300 text-sm mb-2">
                                    Lorem ipsum dolor sit amet adipisicing elit....
                                </p>
                            </div>
                            <div className="w-full h-2 bg-blue-100 rounded-full">
                                <div className="w-2/3 h-full text-center text-xs text-white bg-pink-400 rounded-full">
                                </div>
                            </div>

                        </a>
                        <label className="inline-flex items-center mt-3">
                            <input type="checkbox" className="form-checkbox text-blue-300" checked/><span
                                className="ml-2 text-purple-300">Mark as completed</span>
                        </label>

                    </div>
                    {/* <!-- End Actvity Listing Card -->

                    <!-- Actvity Listing Card --> */}

                    <div className="shadow-lg rounded-xl p-4 relative overflow-hidden ">
                        <a href="#" className="w-full h-full block">
                            <div className="w-full">
                                <p className="text-blue-400 text-md font-bold ">
                                    75% Jumping Jacks
                                </p>
                                <p className="text-purple-300 text-sm mb-2">
                                    Lorem ipsum dolor sit amet adipisicing elit....
                                </p>
                            </div>
                            <div className="w-full h-2 bg-blue-100 rounded-full">
                                <div className="w-2/3 h-full text-center text-xs text-white bg-blue-300 rounded-full">
                                </div>
                            </div>

                        </a>
                        <label className="inline-flex items-center mt-3">
                            <input type="checkbox" className="form-checkbox text-blue-300"/><span
                                className="ml-2 text-purple-300">Mark as completed</span>
                        </label>

                    </div>
                    {/* <!-- End Actvity Listing Card -->

                    <!-- Actvity Listing Card --> */}
                    <div className="shadow-lg rounded-xl p-4 relative overflow-hidden">
                        <a href="#" className="w-full h-full block">
                            <div className="w-full">
                                <p className="text-purple-400 text-md font-bold ">
                                    75% Running
                                </p>
                                <p className="text-blue-300 text-sm mb-2">
                                    Lorem ipsum dolor sit amet adipisicing elit....
                                </p>
                            </div>
                            <div className="w-full h-2 bg-blue-100 rounded-full">
                                <div className="w-2/3 h-full text-center text-xs text-white bg-purple-300 rounded-full">
                                </div>
                            </div>

                        </a>
                        <label className="inline-flex items-center mt-3">
                            <input type="checkbox" className="form-checkbox text-blue-300"/><span
                                className="ml-2 text-purple-300">Mark as completed</span>
                        </label>

                    </div>
                    {/* <!-- End Actvity Listing Card --> */}




                </div>
            </div>
        </>
    )
}
export default Progress;