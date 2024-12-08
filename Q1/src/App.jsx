import { useState } from "react";

/**
 * The App component serves as the parent component.
 * It manages the state to toggle between View and Edit modes.
 */
function App() {
  const [isEditMode, setIsEditMode] = useState(false);

  // User data to be passed as props
  const [userData, setUserData] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com",
    bio: "Web Developer",
  });

  function handleChange(e) {
    e.prventDefault();
    let data = e.target;
    const updatedData = {
      name: data.name.value,
      email: data.email.value,
      bio: data.email.value,
    };
    setUserData(updatedData);
    setIsEditMode(false);
  }

  return (
    <div>
      <button onClick={() => setIsEditMode(!isEditMode)}>
        {isEditMode ? "View Profile" : "Edit Profile"}
      </button>
      {isEditMode ? (
        <EditProfile user={userData} onSubmit={handleChange} />
      ) : (
        <UserProfile user={userData} />
      )}
    </div>
  );
}

/**
 * UserProfile component renders the user's information in View Mode.
 */
function UserProfile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
}

/**
 * EditProfile component provides input fields to edit the user's details.
 * The fields are pre-populated with existing data using defaultValue.
 */
function EditProfile({ user, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" defaultValue={user.name} />
      <input type="email" name="email" defaultValue={user.email} />
      <textarea name="bio" defaultValue={user.bio}></textarea>
      <button>Save</button>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
