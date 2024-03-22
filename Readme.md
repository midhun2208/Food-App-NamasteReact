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

- to quickly render the page and make the API call and fill the data to the rendered data and re render it
- Like useEffect in thefunctional Component

  when ever the multiple child component is being there the react optimize the code and
  after the parent render the both child constructor and the render will be called and after that only the
  componentDid Mount of the both child will be called
  <!--     
      - Parent Constructor
      - Parent Render
  
      - First Constructor
      - First Render
  
      - Second Constructor
      - Second Render

## Dom Is Updated

    - First componentDidMOunt
    - Second componentDidMOunt

    - Parent componentDidMount   -->

    there are 2 phases 1) Render Phase
                       2) Commite Phase
                       they the 1st all will be rendered and then only they commit the changes in the  dom thats why the
                       componentDidMount Came last  The React really Optimizes the code

# MOunting Phase

Constructor(dummy data)
render(dummy)
Calls the componentDidMount and calls the api and fetchsit

# Updating

after the api call the setState is called and the states are set with values
when the render happens in the render phase they reconcilation process will happen
and the Dom finds the diff and Updates the dom
then calls the componentDidUpdate

# Unmounting

after the component is fully changed to the next before the component is been changes the componentWillUnmount is called

# Optimizing the app

Chunking - making the code into different bundlers to optimize the app and to load in a diiferent js file
Dynamic binding - binding Dynamically
CodeSplitting
Lazy loading - loading the component bubler when on it demands in the loading it helps in the production of the large scale to optimize and get efficent in loading the compoenets
Demand Loading - Loading only when it is needed

# Higher Order Components

One component that takes a compoenent and enhance the compoenet and returns the enhanced component

# Controlled And UnControlled Components

When the component have its own state then the Component is called UnControlled Component

when the parent component have the state management of the Child component then it is called a controlled Component(child)

# State Lifting

when there is parent and a child component the parent component is controlling the satet of the child the state is being lifted

# props drilling

when the parent passes a data to a child and after that next child needs the data we have pass next props to get the data in the next child
this is known as the props drilling concept . If it is a big application we can't pass the props like this it will be so hard
to resoluve this problem the Ract has ReactContext .

# React Context

it is like a global space we can acces the data anywhere in the Component by using useContext(Context_name)
we Can create by using createContext({})
they are in functional components
IN Class Based Components
we USes the Component Name and the Consumer key and a callBack funtion in it and returns a jsx like

<!-- <UserConetxt.Consumer>{(data)=><>{data.loggInUser}</>} -->

in the COntext there is a provider with that we cann update the value in the Context
<UserContext.Provider value={loggIn:data>

<!-- Wrap the conents that the COntext want to change in it and -->

</UserContext.Provider>

# React-Redux

1. We want to install the libarary @redux/toolkil and react-redux
   npm i @reduxjs/toolkit , npm i react-redux 2) Build Our store using the configureStore ({}) 3) then we will provide it by using the <Provider store={appStore}></Provider>

   4. we will create a slice
      create using createSlice from @redux/toolkit
      and will give it
      name:
      intialState{
      items:[]
      },
      then we will gove reducers
      reducer:{
      addItem : (state,action)=>{
      state.items.push(action.payload)
      },
      remove item:......,
      clearCart:.......
      }
      export actions , export reducers

5) then we will import the reducer to the store
   then we will make the cart reducer to the store reducer
6) If we want to diaplay or take the data from the redux item we uses the Subscription by the useSelector hook by const
   cart = useSelector((store)=>store.cart.items)
7) If we want to pass the data we uses the useDispatch hook and giving the action.payload in it

# Ep- 13

# Types of testing(developer can do)

-unit testing
-integration-testin
-End-to-End testing

2. # Setting up testing
   -Install the testing libaray npm i -D @testing-library/react
   -Install the jests that the react testing libaray uses it
   because of using bable we have to install the package that says
   Using bables
   -npm install --save-dev babel-jest @babel/core @babel/preset-env
   -Configure babel using the file name babel.config.js
   -Configure parcel config file to disable defualt babe transpilation
   -Jest Configuration --- npx jest --init
   -Install jsdom (npm install --save-dev jest-environment-jsdom)

 # creating files for tests
    1)__tests__ =>dunder we uses 
    2) sum.test.js => in that we have to use test("Comments",()=>{callback    with the funtion and the assertion if needed})
