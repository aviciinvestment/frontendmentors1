const Error = ({ children }) => {
  return (
    <p
      data-user="stick"
      className="ring-red-800 ring-1 bg-red-200 rounded-md text-xs p-2 m-2"
    >
      {children}
    </p>
  );
};

export default Error;
