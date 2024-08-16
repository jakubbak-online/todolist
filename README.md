# React To Do list app
## Contents
My to-do list app made in React

TBA: all the CSS
---
<details open>
<summary>My notes</summary>

- What is React?
    - React is JavaScript framework
    - It's used to make SPAs
    - Created by Facebook

- Packages are managed by npm

- React applications are created by ```npx create-react-app [appname]```

- Dependencies are installed by ```npm i```

- React works by creating, and manipulating virtual DOM before manipulating browser's DOM

- React apps are made out of components

- Component is a piece of UI that has its own logic and appearance

- React components are JS functions that return markup
    ```JavaScript
    function MyButton() {
        return(
            <button>I'm a button</button>
        );
    }
    ```
- Components can be nested into other components
    ```JavaScript
    export default function MyApp() {
        return (
            <div>
            <h1>Welcome to my app</h1>
            <MyButton />
            </div>
        );
    }
    ```
- Components start with capital letters - that's how they are diffrentiated from HTML tags

- ```export default``` keywords specify the main component in the file

- This syntax is called *JSX* - it's stricter than HTML. You have to close tags like ```<br />```

- Component also cannot return multiple JSX tags - you *have to* wrap them into one shared parent - like ```<div> </div>``` or ```<> </>``` wrapper

- To add CSS styling to a component you can use className: ```<div className="article"> </div>```\
...and then write CSS in separate file

- JSX lets you put markup into JavaScript - curly braces let you "escape" into JS, enabling you to embed variables from code and display them to the user.
    ```
    return (
        <h1>
            {user.name}
        </h1>
    );
    ```
- When you want to re-render component use state

</details>

<details>
<summary>Sources</summary>

- https://www.w3schools.com/REACT/DEFAULT.ASP
- https://react.dev/learn
- https://javascript.info/import-export
</details>
