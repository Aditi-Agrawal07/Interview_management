
export const SignUp = () => {
    return (
        <>
            <div className="container-fluid w-full h-screen  flex justify-center items-center">
                <div className="container mx-auto bg-white h-96 w-1/2 p-4 rounded-md shadow-xl" >
                    <div className="text-center font-bold text-2xl pt-5">Registration Form</div>
                    <form>
                        <div className="flex justify-center mt-5">
                            <input className="outline-none w-1/2 mb-4 p-2 border" type="text" placeholder="name" />
                        </div>
                        <div className="flex justify-center">
                            <input className="outline-none  w-1/2 p-2 mb-4 border" type="email" placeholder="email" />
                        </div>
                        <div className="flex justify-center">
                            <select className="mb-4 outline-none w-1/2 p-2 border text-gray-500" id="class" name="class">
                                <option value="" disabled selected>Class</option>
                                <option value="1st year">1st Year</option>
                                <option value="2nd year">2nd Year</option>
                                <option value="3rd year">3rd Year</option>
                                <option value="1st year diploma">1st Year Diploma</option>
                                <option value="2nd year diploma">2nd Year Diploma</option>
                            </select>
                        </div>
                        <div className="flex justify-center">
                            <select className="mb-4 outline-none w-1/2 p-2 border text-gray-500" id="leve;" name="level">
                                <option value="" disabled selected>Level</option>
                                <option value="1A">1A</option>
                                <option value="1B">1B</option>
                                <option value="1C">1C</option>
                                <option value="2A">2A</option>
                                <option value="2B">2B</option>
                                <option value="2B">2C</option>
                            </select>
                        </div>
                        <div className="text-center">
                            <button className="p-1 bg-blue-500 rounded-md px-3" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
