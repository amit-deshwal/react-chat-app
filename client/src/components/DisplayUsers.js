const DisplayUsers = ({ users }) => {
  return (
    <>
      {!(users.length === 0) ? (
        <div className="absolute top-3 xl:top-10 w-full font-medium leading-none mx-2">
          <div className="flex items-center justify-center text-white">
            <img src="https://img.icons8.com/bubbles/50/000000/group.png" className="h-10" alt="Online Users"/>
            <h2>Online Users :</h2>
            {users[0].map((user, i) => (
              <div key={i} className="ml-2">
                <div className="mr-2 font-bold">{user.name.charAt(0).toUpperCase() + user.name.slice(1)}</div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DisplayUsers;
