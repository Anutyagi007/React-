const root = ReactDOM.createRoot(document.getElementById("root"))
// console.log(root)
// const heading=React.createElement(
//     "h1",
//     {id:"heading",
//     xyz:"abc"}
//     ,"Hello world"
//     )

const parent = React.createElement(
    "div",
    { id: "Parent" },
    [React.createElement(
        "div",
        { id: "Child1" },
        [
            React.createElement("h1", {}, "Heading 1"),
            React.createElement("h1", {}, "Heading 2"),

        ]
    ),
    React.createElement(
        "div",
        { id: "Child2" },
        [
            React.createElement("h1", {}, "Heading 1"),
            React.createElement("h1", {}, "Heading 2"),

        ]
    )]
)
root.render(parent)