// TODO 1:
// Create a React element using React.createElement()
// Tag name: h1
// Text: Welcome to React

  const element= React.createElement("h1","Welcome to my web page");
    const root = ReactDom.createRoot(document.getElementById("root"));
    root.render(element);
