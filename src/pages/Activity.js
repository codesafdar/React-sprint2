
const Activity=() =>{
return (
<>

<div class="grid space-y-4 ">

<div class="">
    <h2 class="text-gray-800 text-4xl font-semibold">Add/Edit Actvity </h2>
    <p class="text-gray-500 pt-2">Lorem ipsum dolor sit amet consectetur, fuga, doloribus?</p>
</div>

<div class="">
    <div class="rounded-md bg-blue-200 pb-4">
        <div class="px-4 pt-8 space-y-4">
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email" v-model="form.email" type="email" required autofocus
                placeholder="Location" />
            <select
                class="shadow border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline">
                <option value="none">Select Activity Type</option>
                <option value="squats">Squats</option>
                <option value="jacks">Jumping Jacks</option>
                <option value="running">Running</option>
                <option value="jogging">Jogging</option>

            </select>

            <div class="grid grid-cols-4 text-center items-center">
                <label class="col-span-1 bg-blue-400 p-2 rounded-l-md shadow" for="startDate">Date</label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline col-span-3"
                    name="date" type="date" id="startDate" />
            </div>

            <div class="grid grid-cols-4 text-center items-center">
                <label class="col-span-1 bg-blue-400 p-2 rounded-l-md shadow" for="">Repeat</label>
                <select
                    class="shadow border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline col-span-3">
                    <option value="none" selected>Never</option>
                    <option value="squats">Every Day</option>
                    <option value="jacks">Thrice A Week</option>
                    <option value="running">Twice A Week</option>
                    <option value="jogging">Once A Week</option>

                </select>
            </div>

            <div class="grid grid-cols-4 text-center items-center">
                <label class="col-span-1  bg-blue-400 p-2 rounded-l-md shadow" for="">Duration </label>
                <input
                    class="shadow border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline col-span-3"
                    type="number" id="quantity" name="quantity" min="1" max="60" />
            </div>

            <div class="grid grid-cols-2 gap-2">
                <button
                    class="p-3 pl-5 pr-5 bg-blue-400 text-gray-100 hover:bg-purple-400 text-sm font-bold rounded-lg focus:border-4 border-blue-300">SAVE</button>
                <button
                    class="p-2 pl-5 pr-5 bg-pink-400 text-gray-100 hover:bg-purple-400 text-sm font-bold rounded-lg focus:border-4 border-blue-300">DELETE</button>

            </div>



        </div>



    </div>
</div>

</div>
</>)
}
export default Activity;