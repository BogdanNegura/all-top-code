import React from "react";

const Cv = () => {
  return (
    <div>
      <h1>Here will Be my CV Uploaded</h1>
      <form action="submit">
        <input type="text" name="name" /> Name  
        <input type="text" firstName="first-name" /> First Name 
        <input type="text" email="email" />
        <button>Download</button>
      </form>
    </div>
  );
};

export { Cv };
