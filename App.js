// const heading = React.createElement("h1", {id :"heading"}, "Hello World from React");
let e = React.createElement;
const parent = e("div", 
{id :"parent"}, [e("div", {id:"child"}, [e("h1", "", "I am an h1"), e("h2", "", "I am an h2")]), e("div", {id:"child2"}, [e("h1", "", "I am an h1"), e("h2", "", "I am an h2")] )]
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);