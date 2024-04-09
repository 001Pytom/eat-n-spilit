import React from "react";
import Friend from "./Friend";
function FriendsList({ friends, onSelection, selsctedFriennd }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selsctedFriennd={selsctedFriennd}
        />
      ))}
    </ul>
  );
}

export default FriendsList;
