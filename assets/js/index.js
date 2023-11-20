const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

function App() {
  return (
    <>
      <Header /> <main title="Hello">Hello React</main>
      <UserInfo />
      <GoodNews />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Page title</h1>
    </header>
  );
}

function UserInfo() {
  const user = {
    name: "Ivo",
    age: 23,
    imgSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  };

  const userNameStyle = {
    color: user.age >= 18 ? "blue" : "green",
    backgroundColor: "yellow",
  };

  return (
    <article className="userCard">
      <h2 style={userNameStyle}>{user.name}</h2>
      <img src={user.imgSrc} alt={user.name} />
    </article>
  );
}

function GoodNews() {
  const news = { title: "Some news", body: "Something hapenned", isGood: true };

  const bodyColor = {
    backgroundColor: news.isGood ? "green" : "red",
  };
  return (
    <article className="newsInfo" style={bodyColor}>
      <h2>{news.title}</h2>
      <p>{news.body}</p>
    </article>
  );
}

function Footer() {
  return (
    <footer>
      <p>F&Q</p>
      <p>About US</p>
      <p>Home</p>
    </footer>
  );
}
