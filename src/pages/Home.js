import React from "react";
import Program from "./Program";
import Progress from "./Progress";
import Activity from "./Activity";
import Videos from "./Videos";
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Heading from "./Heading";
const Home=() =>{
    return(
        <>
      <Heading />

       
        {/* <!-- Content Container --> */}
        <div className="mx-4 space-y-12">


            {/* <!-- Featured Section  --> */}

            <div className="grid md:grid-cols-2 md:gap-4 space-y-4 md:space-y-0">

                <div
                    className="grid justify-center items-center align-middle space-y-2 rounded-md bg-pink-400 py-40 shadow-md">

                    <h2 className="text-4xl font-bold text-white text-center">Get Stronger!</h2>
                    <button
                        className="p-2 pl-5 pr-5 bg-purple-600 hover:bg-purple-400 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300">Learn
                        how to get lean in 60 days</button>


                </div>


                {/* <!-- Activities Section --> */}
           <Router>
                <div className="grid grid-cols-2 items-center justify-center gap-4 md:ml-0 ">
                    <div className="col-span-full mb-2">
                        <h2 className="text-gray-800 text-4xl pt-8 font-semibold">Ready To Start</h2>
                        <p className="text-gray-500 pt-2">Lorem ipsum dolor sit amet consectetur, fuga, doloribus?</p>
                    </div>
                    <Link to="/activity" className="shadow-md text-white text-center py-14 rounded-md bg-blue-400">Start Tracking</Link>
                    <Link to="/videos" className="shadow-md text-white text-center py-14 rounded-md bg-blue-500">Watch Latest
                        Videos</Link>
                    <Link to="/program" className="shadow-md text-white text-center py-14 rounded-md bg-purple-400">Choose A
                        Program</Link>
                    <Link to="/progress" className="shadow-md text-white text-center py-14 rounded-md bg-purple-500">Your Progress
                        </Link>
                </div>
                <Switch>
          <Route path="/activity">
            <Activity />
          </Route>
            
          <Route path="/program">
            <Program />
          </Route>
          <Route path="/videos">
            <Videos />
          </Route>

          <Route path="/progress">
            <Progress />
          </Route>

               </Switch>
             </Router>
            </div>
  
  </div>



        </>
    )
}

export default Home;