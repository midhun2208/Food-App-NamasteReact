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
  -useState() - Superpowerful State Variables in React
  Manintains state of your component
  const = [] = useState() - Whenever a state varible is updated the component re-renders its self

                  - Modify
                      useing the set function in the state Hook
      -useEffect()

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
