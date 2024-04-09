import React, { useState } from "react";
import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAdFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSpliBill";
import initialFriends from "./components/InitialFriends";
function App() {
  const [freinds, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selsctedFriennd, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  function handleAddFriend(friend) {
    setFriends((friends) => [...freinds, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={freinds}
          onSelection={handleSelection}
          selsctedFriennd={selsctedFriennd}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "close" : "Add Friend"}
        </Button>
      </div>
      {selsctedFriennd && <FormSplitBill selsctedFriennd={selsctedFriennd} />}
    </div>
  );
}

export default App;
