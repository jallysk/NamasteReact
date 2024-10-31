 const root = ReactDOM.createRoot(document.getElementById("root"));
//            const heading = React.createElement("h1",{id:"heading"},"Namaste kemti achanti samaste");
//            console.log(root);
//            root.render(heading);

//<div parent></div>
//<div child></div>
//<h1></h1>
//<h2></h2>

const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"children"}, [

    React.createElement("h1",{id:"h1tag"},"I am H1"), React.createElement("h2",{id:"h2tag"},"I am H2")
]));
root.render(parent);
