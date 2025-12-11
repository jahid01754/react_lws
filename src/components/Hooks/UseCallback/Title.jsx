import React from "react";

function Title() {
  console.log("rendering title...");

  return (
    <>
      <div>Title</div>
    </>
  );
}

export default React.memo(Title);
