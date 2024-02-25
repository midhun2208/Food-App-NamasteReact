# Food ordering App Namaste Food

-Header

- logo
- nav links

-Body

- RestContainer - Rest Card - image - starrating - cusines - delivry time
  Footer - Copyright - links - contact

\*/

# Two types of exports/Imports

-Defualt Export/ Import
export defaults Component
import Component from "path"

- Named Export/Import
  export const Component;
  import {Component} from "path"

- Named and Defualt exports can be done in the same Component

# React Hooks

- They are normal JS utility Function - they are prebuild
  Important Hooks
  useState() - Superpowerful State Variables in React
  Manintains state of your component
  const = [] = useState() - Whenever a state varible is updated the react re-renders the component

                  - Modify
                      useing the set function in the state Hook
      -useEffect()
        - It  is also  a utility function by react . The useEffect works only after the body is renderd
        - It takes two arguments one is Callback() arrow funtion
                                  2) is  a dependency array

# Why React is Fast

-React is fast because of the effecient use of the Virtual Dom Manipulation

- Virtual Dom
  - Is the Object representation of the real Actual DOM
- DIFF Algorithem
  - Finds out the difference bwt the new virtual dom and old virtual dom and update the DOM
- React Fiber
  - Is a technique that come up in React 16 that finds a new for findin the diff & updating the DOM
- Reconciliation
  - The algorithem React use to find the diff in one tree with the another to determine which part need to be changed

# Optional Channning

-setListOfRest(
//Optional Channing
json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
);

# Shimmer UI

is a UI that show in the loading tym of the page

# Conditional Rendering

when a component renders on a condition is called conditional rendereing\

# useEffect

When the useEffect is rendered

- if the useEffect doesnt have a dependency array the useEffect will render in the every render of the component
- if the useEFfect has When ever the component is intialy rendered the useEffect is called one in The intial Render
- if the dependency array has a "button state" when ever the button is triggerred then the useEffect is called rendered

# 2 Types of ROuting

- Server side Routing - where makes a network call and gives the UI refresing the whole page multipage is used

- Client Side Routing - NO network call is making to get the UI the coponents interchange

# createBrowserRouter,

- Outlet - used to replace between the component uses the "children" for the Outlet replace where we write the path and the element or to replace the outlet
- RouterProvider - where we write
  root.render(<RouterProvider router={appRouter} />);
- useRouteError - For error handling
- Dynamic route using

# useParams( ) - we can fetch the data from the url

# Components

- Class based Componets - Class based components are normal JavaScript class that have render() method which returns some JSX

  - props:
    By calling super(props), you ensure that the parent class's constructor is executed with the provided props
    Always use "this" keyword inthe class "this.props.name"

  - state in class component
    -By using 'this.state' in the consturctor and if we want to
    -use the state in classs
    bt using 'this.state.stateName' or we can destructure and use
    - Updateing a value in the class component the state name is count
      this.setState({
      count:this.state.count +1
      })

- Functional Based Componets - are JavaScript function that return some piece of JSX

# life Cycle of React

- Parent Constructor
- Parent Render
- Child Constructor
- Child Render
- Child componentDidMOunt
- Parent componentDidMount

componentDidMount is used for Api calls in the class Component
