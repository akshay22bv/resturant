import Image from "next/image";
import React from "react";
import bgImage from "../../assets/bgimages/book_table.jpg";

const Contact = () => {
  return (
    <div className="relative pt-16 min-h-screen">
      {/* form  */}
      <div className=" text-[#edd092] h-full z-10 flex flex-col  justify-center items-center">
        <div>
          <h1 className="text-2xl md:text-4xl">Book Your Table</h1>
        </div>

        <form className="flex sm:flex-row justify-between flex-col py-5 gap-5">
          {/* open div  */}
          <div className="bg-[#edd092] text-[#1a031d] m-auto p-4">
            <div className="border-[1px] p-5 border-dotted border-[#1a031d]">
              <h1 className="text-2xl">Open</h1>

              <p className="my-2">Monday - Friday</p>
              <div className="pl-5">
                <p>7am - 11am (Breakfast)</p>
                <p>11am - 10pm (Lunch/Dinner)</p>
              </div>

              <p className="my-2">Saturday - Sunday</p>
              <div className="pl-5">
                <p>8am - 1pm (Brunch)</p>
                <p>1pm - 9pm (Lunch/Dinner)</p>
              </div>
            </div>
          </div>

          {/* input div  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 ">
            <div className="">
              <p>First Name</p>
              <input
                className="bg-white border p-2 w-full rounded text-black"
                type="text"
                required
              />
            </div>
            <div>
              <p>Last Name</p>
              <input
                className="bg-white border p-2 w-full rounded text-black"
                type="text"
                required
              />
            </div>
            <div>
              <p>Date </p>
              <input
                className="bg-white border p-2 w-full rounded text-black"
                type="date"
                required
                placeholder="mm/dd/yyyy"
              />
            </div>
            <div>
              <p>Time </p>
              <input
                className="bg-white border p-2 w-full rounded text-black"
                type="time"
                required
              />
            </div>
            <div>
              <p>Party Size </p>
              <input
                className="bg-white border p-2 w-full rounded text-black"
                type="number"
                required
              />
            </div>
            <div>
              <p>Phone </p>
              <input
                className="bg-white border p-2 w-full rounded text-black"
                type="tel"
                pattern="[0-9]{10}"
                required
              />
            </div>
            <button className="bg-[#edd092] text-[#1a031d] rounded p-2">
              Send
            </button>
          </div>
        </form>
      </div>

      {/* background image  */}
      {/* <Image
        alt=""
        src={bgImage}
        className=" w-full -z-10 h-screen md:h-screen  object-cover brightness-50"
      /> */}
    </div>
  );
};

export default Contact;
