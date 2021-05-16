const InfoBar = ({ room }) => {
  return (
    <div className="flex justify-between border-b-4 border-indigo-500 w-full p-2">
      <div className="flex items-center">
        <img
          className="h-8 mr-3"
          src="https://img.icons8.com/color/48/000000/green-tea.png"
          alt="Room Icon"
        />
        <h3>Room name - <span className="uppercase">{room}</span></h3>
      </div>
      <div className="">
        <a href="/">
          <img
            className="h-8"
            src="https://img.icons8.com/windows/32/000000/macos-close.png"
            alt="Close Icon"
          />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
