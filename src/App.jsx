
// how to pass a normal js in to a component?

const title = "This is title";

const App = () => {
  return (
    <>
      <h1>How you doing?</h1>
      <h1>{title}</h1>
    </>
  );
};

// how to pass a react component into another component?

const ChildComponent = () => {
  return <h1>Its a child component</h1>;
};

const ParentComponent = () => {
  return (
    <>
      <h1>Its a parent component</h1>
      <ChildComponent />
    </>
  );
};

// how to pass a component into a react element?

const ReactComponent = () => {
  return <h1>This is a component that is passed into the react element</h1>;
};

const reactElement = (
  <>
    <h1>This is react element</h1>
    <ReactComponent />
  </>
);

export { App, ParentComponent, reactElement };
