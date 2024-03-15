import {FooterDivider, TextInput, Label, Select, Datepicker} from "flowbite-react";

export default function Enroll() {
    return (
        <div className="container mx-auto bg-white rounded-lg p-8 my-8">
            <h1 className="uppercase text-center font-extrabold text-3xl pb-4">Enroll Form</h1>
            {/*Form Input*/}
            <div className="grid grid-cols-2 gap-12 w-full px-14 ">
                {/*Col1*/}
                <div>
                    <form className="grid grid-cols-1 gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="fullname1" value="Full name (en)" className="uppercase font-bold"/>
                                <span className="text-red-500">*</span>
                            </div>
                            <TextInput id="fullname1" type="email" placeholder="Hout Sovannarith" required/>
                        </div>
                        <div>
                            <div className="mb-2 block ">
                                <Label htmlFor="course" value="COURSE" className="font-bold"/>
                                <span className="text-red-500">*</span>
                            </div>
                            <Select id="course" required>
                                <option disabled selected>Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </Select>
                        </div>
                        <div>
                            <div className="mb-2 block ">
                                <Label htmlFor="course" value="COURSE" className="font-bold"/>
                                <span className="text-red-500">*</span>
                            </div>
                            <Datepicker
                                weekStart={1} // Monday
                            />
                        </div>
                    </form>
                </div>
                {/*Col2*/}
                <div>
                    <form className="grid grid-cols-1 gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email1" value="email" className="uppercase font-bold"/>
                                <span className="text-red-500">*</span>
                            </div>
                            <TextInput id="email1" type="email" placeholder="hout.sovannarith2000@gmail.com" required/>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="username3" value="Phone Number" className="uppercase font-bold"/>
                                <span className="text-red-500">*</span>
                            </div>
                            <TextInput id="username3" placeholder="95990910 (Telegram)" addon="+855" required/>
                        </div>
                        <div>
                            <div className="mb-2 block ">
                                <Label htmlFor="course" value="COURSE" className="font-bold"/>
                                <span className="text-red-500">*</span>
                            </div>
                            <Select id="course" required>
                                <option disabled selected>Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </Select>
                        </div>
                        <div>
                            <div className="mb-2 block ">
                                <Label htmlFor="course" value="COURSE" className="font-bold"/>
                                <span className="text-red-500">*</span>
                            </div>
                            <Select id="course" required>
                                <option disabled selected>Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </Select>
                        </div>
                    </form>
                </div>
            </div>
            {/*Line*/}
            <div className="w-[90%] mx-auto">
                <FooterDivider/>
            </div>
            {/*Course*/}
            <div className="px-14">
                <div className="max-w-md">
                    <div className="mb-2 block ">
                        <Label htmlFor="course" value="COURSE" className="font-bold"/>
                        <span className="text-red-500">*</span>
                    </div>
                    <Select id="course" required>
                        <option disabled selected>Select Course</option>
                        <option>Flutter Mobile Development</option>
                        <option>iOS Development</option>
                        <option>SQL & Data Modeling with PostgreSQL</option>
                        <option>Web Design</option>
                        <option>DevOps Engineering</option>
                        <option>C++ Programming</option>
                        <option>Docker</option>
                        <option>Data Analytics</option>
                        <option>Android Development</option>
                        <option>NEXT.js</option>
                        <option>Linux Administrator</option>
                        <option>Spring Framework</option>
                        <option>Blockchain Development</option>
                        <option>Java Programming</option>
                    </Select>
                </div>
                <div className="py-2 text-red-500 font-bold">
                    <h3>👉 Please filter available courses to select the class..!</h3>
                </div>
            </div>
            {/*Button*/}
            <div className="flex justify-end gap-4 m-8">
                <button
                    className="w-40 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded uppercase">
                    Cancel
                </button>
                <button type="submit"
                    className="w-40 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded uppercase">
                    Enroll Now
                </button>
            </div>
        </div>
    )
}