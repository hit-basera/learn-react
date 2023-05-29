/***
 * 
 * <div id="parent">
 *  <div id="child">
 *    <h1>I'm H1 Tag</h1>
 *    <h2>I'm H2 Tag</h2>
 *  </div>
 *  <div id="child2">
 *    <h1>I'm H1 Tag</h1>
 *    <h2>I'm H2 Tag</h2>
 *  </div>
 * </div>
 * ReactElement(Object) ==> HTML(Browser understands)
 */
// const heading = React.createElement("h1",{id: "heading",xyz:"abc"},"Hello world from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement("div",{id: "parent"},
    [
        React.createElement("div",{id: "child"},[
            React.createElement("h1",{},"I'm a H1 Tag."),
            React.createElement("h2",{},"I'm a H2 tag.")
        ]),
        React.createElement("div",{id: "child2"},[
            React.createElement("h1",{},"I'm a H1 Tag."),
            React.createElement("h2",{},"I'm a H2 tag.")
        ])
    ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
    