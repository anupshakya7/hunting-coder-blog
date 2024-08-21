import React from "react";

const Dummy = () => {
  return (
    <>
      <style jsx global>
        {`
          .dummy {
            background: yellow;
            padding: 10px;
            color: black;
          }
        `}
      </style>
      <div className="dummy">Hello this is Dummy</div>;
    </>
  );
};

export default Dummy;
