import React, { useEffect, useState } from "react";

const Info = ({ children, state, time, refresh }) => {
  const [timing, setTiming] = useState(false);

  useEffect(() => {
    setTiming(state);
    setTimeout(() => {
      setTiming(false);
    }, [time]);
  }, [state, time, refresh]);

  return (
    <div>
      {timing ? (
        <div className="ring-2 ring-red-800 rounded-md absolute  top-0 w-[50%]  bg-red-200 p-9">
          {children}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Info;
