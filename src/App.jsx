const App = () => {

  const name = ["Annappa", "samith","Rahl"];
  const loggedIn = true
  return (
    <div>
      App
      <p>list of names</p>
      <ul>
        {name.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {loggedIn && <h1>Hello Member</h1>}
    </div>
  );
};

export default App;
