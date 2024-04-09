import Button from "./Button";

function FormSplitBill({ selsctedFriennd }) {
  return (
    <form className="form-split-bill">
      <h2> Split a bill with {selsctedFriennd.name}</h2>

      <label>💰 Bill Value</label>
      <input type="text" />

      <label>🚶 Your expense</label>
      <input type="text" />

      <label>🧑‍🤝‍🧑 {selsctedFriennd.name} expenses </label>
      <input type="text" disabled />

      <label> 🤑 Who is paying the Bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selsctedFriennd.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
