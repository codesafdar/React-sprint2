import Heading from "./Heading";
const powerLifting="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80";
const zumba="https://images.unsplash.com/photo-1550259979-ed79b48d2a30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80";
const pilates="https://images.unsplash.com/photo-1558017487-06bf9f82613a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=770&q=80";
const powerLifting2="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80";
const yoga="https://images.unsplash.com/photo-1601568870191-8c417f7e0077?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80";
const Program=() =>{

    return (
<>

{/* <!-- Program Cards --> */}
<div className="">
                <div className="">
                    <h2 className="text-purple-800 text-4xl font-semibold">Choose A Program </h2>
                    <p className="text-gray-500 pt-2">Lorem ipsum dolor sit amet consectetur, fuga, doloribus?</p>
                </div>
                <div className="grid grid-cols-2 w-full rounded py-4 gap-8">
                    
                    {/* <!-- Story card --> */}
                    <div className="col-span-2 shadow-md">
                        <div className="w-full h-64 bg-center bg-cover rounded-t">
                            <img src={powerLifting} alt="No power"/>
                           
                        </div>
                        <div className="flex flex-col w-full md:flex-row">
                            <div
                                className="flex flex-row justify-around p-4 font-bold leading-none text-purple-100 uppercase bg-blue-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                                <div className="md:text-3xl">Jan</div>
                                <div className="md:text-6xl">13</div>
                                <div className="md:text-xl">7 pm</div>
                            </div>
                            <div className="p-4 font-normal text-gray-500 md:w-3/4">
                                <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800"> Powerlifting </h1>
                                <p className="leading-normal">The format fits within your calendar and adapts to your body
                                    type.</p>

                            </div>
                        </div>
                    </div>
                    {/* <!-- story card end -->
                    
                    <!-- Story card --> */}
                    <div className="md:col-span-1 col-span-2 shadow-md">
                        <div className="w-full h-64 bg-center bg-cover rounded-t">
                            <img src={zumba} alt="Zumba" />
                        </div>
                        <div className="flex flex-col w-full md:flex-row">
                            <div
                                className="flex flex-row justify-around p-4 font-bold leading-none text-purple-100 uppercase bg-blue-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                                <div className="md:text-3xl">Jan</div>
                                <div className="md:text-6xl">13</div>
                                <div className="md:text-xl">7 pm</div>
                            </div>
                            <div className="p-4 font-normal text-gray-500 md:w-3/4">
                                <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800"> Zumba
                                    Studio</h1>
                                <p className="leading-normal">The format fits within your calendar and adapts to your body
                                    type.</p>

                            </div>
                        </div>
                    </div>
                    {/* <!-- story card end -->

                    <!-- Story card --> */}
                    <div className="md:col-span-1 col-span-full shadow-md">
                        <div className="w-full h-64 bg-center bg-cover rounded-t">
                            <img src={pilates} alt="Pilates" />
                            
                        </div>
                        <div className="flex flex-col w-full md:flex-row">
                            <div className="flex flex-row justify-around p-4 font-bold leading-none text-purple-100 uppercase bg-blue-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                                <div className="md:text-3xl">Jan</div>
                                <div className="md:text-6xl">13</div>
                                <div className="md:text-xl">7 pm</div>
                            </div>
                            <div className="p-4 font-normal text-gray-500 md:w-3/4">
                                <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800"> Pilates
                                    Studio</h1>
                                <p className="leading-normal">The format fits within your calendar and adapts to your body
                                    type.</p>

                            </div>
                        </div>
                    </div>
                    {/* <!-- story card end -->
                    <!-- Story card --> */}
                    <div className="md:col-span-1 col-span-full shadow-md">
                        <div className="w-full h-64 bg-center bg-cover rounded-t">
                            <img src={powerLifting2} alt="Powerlifting 2" />
                            
                        </div>
                        <div className="flex flex-col w-full md:flex-row">
                            <div className="flex flex-row justify-around p-4 font-bold leading-none text-purple-100 uppercase bg-blue-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                                <div className="md:text-3xl">Jan</div>
                                <div className="md:text-6xl">13</div>
                                <div className="md:text-xl">7 pm</div>
                            </div>
                            <div className="p-4 font-normal text-gray-500 md:w-3/4">
                                <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800"> Powerlifting </h1>
                                <p className="leading-normal">The format fits within your calendar and adapts to your body
                                    type.</p>

                            </div>
                        </div>
                    </div>
                    {/* <!-- story card end -->
                    <!-- Story card --> */}
                    <div className="md:col-span-1 col-span-full shadow-md">
                        <div className="w-full h-64 bg-center bg-cover rounded-t">
                            <img src={yoga} alt="Its yoga" />

                        </div>
                        <div className="flex flex-col w-full md:flex-row">
                            <div
                                className="flex flex-row justify-around p-4 font-bold leading-none text-purple-100 uppercase bg-blue-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                                <div className="md:text-3xl">Jan</div>
                                <div className="md:text-6xl">13</div>
                                <div className="md:text-xl">7 pm</div>
                            </div>
                            <div className="p-4 font-normal text-gray-500 md:w-3/4">
                                <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800"> Yoga Studio </h1>
                                <p className="leading-normal">The format fits within your calendar and adapts to your body
                                    type.</p>

                            </div>
                        </div>
                    </div>
                    {/* <!-- story card end --> */}

                    
                </div>



         </div>
        {/* Footer */}
                       {/* <Heading /> */}
      </>  )
    }
    export default Program;