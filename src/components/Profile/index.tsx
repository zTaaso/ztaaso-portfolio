import React from "react"

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  return (
    <div className="Profile-wrapper">
      <h1>Thiago Afonso</h1>
      <h2>Mobile Developer</h2>
      <p>Member of Foo Company, I am responsible for the mobile development</p>
    </div>
  )
}

export default Profile
