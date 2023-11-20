const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

function App() {
  const isLight = true;
  const name = "Roman";
  const isGreeting = true;
  return (
    <>
      <ThemeButton isLightTheme={isLight} />
      <Greeting isGreeting={true} isName={name} />
      <Greeting isGreeting={false} isName="ivi" />
    </>
  );
}

function Greeting(props) {
  const { isName } = props;
  const { isGreeting } = props;
  return (
    <div>
      {isGreeting ? "hello" : "goodye"} {isName}
    </div>
  );
}

function ThemeButton(props) {
  const { isLightTheme } = props;

  const buttonStyle = {
    color: isLightTheme ? "blfck" : "white",
    backgroundColor: isLightTheme ? "white" : "black",
  };

  return (
    <button style={buttonStyle}>
      Switch to {isLightTheme ? "dark" : "light"}
    </button>
  );
}
