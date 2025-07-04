import React from "react";
import avatar from "../../public/avatar.jpeg";

export default function Profile() {
  return (
    <div className="profile">
      <img src={avatar} alt="Avatar" className="profile-img" />
      <h1>IACarvalho</h1>
      <p>Apenas mais um gordo gamer que gosta de conversar 🕹️</p>
    </div>
  );
}
