import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
export default function Button() {
  return (
    <div>
      <Link to="signUp">
        <button className="btn">Sign Up</button>
      </Link>
    </div>
  );
}
