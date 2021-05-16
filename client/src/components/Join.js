import { useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="flex flex-col md:flex-row h-screen justify-center items-center">
      <div className="flex flex-col mb-10 -mt-10 sm:mr-0 lg:ml-40 lg:order-last">
        <div>
          <h2 className="text-white text-2xl md:text-5xl text-center mx-4 font-medium"> Welcome to Textelo</h2>
        </div>
        <div>
          <span className="text-gray-300 text-sm inline-block text-center w-full">
            *ask your friends to enter same room name while joining*
          </span>
        </div>
      </div>
      <div className="flex flex-col rounded-md justify-center items-center shadow-lg md:p-8 bg-white ">
        <h2 className="my-10 md:mb-10  text-indigo-600 leading-10 text-3xl font-medium md:font-bold flex items-center">
          <img
            src="https://img.icons8.com/nolan/64/bbm-messenger.png"
            className="h-10 mr-2" 
            alt="Icon"
          />
          Textelo
        </h2>
        <div className="flex flex-col justify-center items-center">
          <div className="flex bg-gray-100 w-10/12 rounded-md py-2 px-3 items-center md:w-full">
            <img
              className="h-6 w-6"
              src="https://img.icons8.com/fluent/48/000000/name.png"
              alt="user-icon"
            />
            <input
              className="bg-gray-100 focus:outline-none text-center w-9/12"
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder="Enter name"
            />
          </div>
          <div className="flex bg-gray-100 w-10/12 mt-4 rounded-md py-2 px-3 items-center md:w-full">
            <img
              className="h-6 w-6"
              src="https://img.icons8.com/color/48/000000/filled-chat.png"
              alt="room-icon"
            />
            <input
              className="bg-gray-100 focus:outline-none text-center w-9/12"
              onChange={(event) => setRoom(event.target.value)}
              type="text"
              placeholder="Enter room name"
            />
          </div>
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          className="my-8 p-2 rounded-md w-11/12 bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-300 text-center"
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className=" text-white uppercase">Join</button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
