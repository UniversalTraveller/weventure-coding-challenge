const App = () => {
  return (
    <main>
      <h1>WEVENTURE React and Redux Coding Challenge</h1>

      <input type="text" placeholder="What needs to be accomplished today?" />

      <ul>
        <li className="done">
          <span>Get up at sunrise</span>
          <button>X</button>
        </li>
        <li className="done">
          <span>Eat a healthy breakfast</span>
          <button>X</button>
        </li>
        <li>
          <span>Drink plenty of water</span>
          <button>X</button>
        </li>
        <li>
          <span>Exercise</span>
          <button>X</button>
        </li>
        <li>
          <span>Have fun :)</span>
          <button>X</button>
        </li>
      </ul>

      <div className="footer">
        <button className="clearAll">Clear all</button>
      </div>
    </main>
  )
}

export default App
