import React from "react";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/Transaction/TransactionHistory";
import user from "./data/user.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import statisticalData from "./data/statistical-data.json";

const App = () => {
  return (
    <div>
      <h1>головна</h1>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <FriendList friends={friends} />,
      <TransactionHistory items={transactions} />;
    </div>
  );
};

export default App;
