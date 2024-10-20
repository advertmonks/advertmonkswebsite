import * as React from "react";
import { Html, Button } from "@react-email/components";

export default function Query({ name, email, phone }) {
  return `<b>
      <h2>New Query Registered from ${name}</h2>
      <h3>Details</h3>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      </b>
    `;
}