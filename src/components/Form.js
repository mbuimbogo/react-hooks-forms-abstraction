import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  });

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    // use `checked` property of checkboxes instead of `value`
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }
  // function handleFirstNameChange(event){
  //   setFormData({
  //     ...formData, firstName:event.target.value,
  //   });
    /*setFormData({
  // formData is an object, so we need to copy all the key/value pairs
  ...formData,
  // we want to overwrite the lastName/Name first key with a new value
  lastName: event.target.value,
});*/
  // }
  return(
    <form onSubmit={handleSubmit}>
      <input
  type="text"
  name="firstName"
  value={formData.firstName}
  // onChange={handleFirstNameChange}
  onChange={handleChange}
/>
<input
  type="text"
  // type='checkbox'
  name="lastName"
  value={formData.lastName}
  // onChange={handleLastNameChange}
  onChange= {handleChange}
/>

<input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
      {/* <input type = "text" onChange={handleFirstNameChange} value="formData.firstName">
      </input>
      <input type = "text" onChange={handleLastNameChange} value="formData.lastName">
      </input> */}

      <button type="submit"> Submit</button>
    </form>
  );
    }
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");

  // function handleFirstNameChange(event) {
  //   setFirstName(event.target.value);
  // }

  // function handleLastNameChange(event) {
  //   setLastName(event.target.value);
  // }

  // return (
  //   <form>
  //     <input type="text" onChange={handleFirstNameChange} value={firstName} />
  //     <input type="text" onChange={handleLastNameChange} value={lastName} />
  //     <button type="submit">Submit</button>
  //   </form>
  // );
    // }

export default Form;
