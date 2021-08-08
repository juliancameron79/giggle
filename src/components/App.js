import React from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contacts = [
    {
      id: "1",
      name: "julian",
      email: "julian@gmail.com",
    },
    {
      id: "2",
      name: "leon",
      email: "leon@gmail.com",
    },
  ];
  return (
    <div className="ui container">
      <Header></Header>
      <AddContact></AddContact>
      <ContactList contacts={contacts}></ContactList>
    </div>
  );
}

export default App;
