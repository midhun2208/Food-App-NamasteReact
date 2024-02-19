# Food ordering App Namaste Food


-Header
  - logo
  - nav links

-Body
  - RestContainer
    - Rest Card
      - image
      - starrating
      - cusines
      - delivry time
Footer
    - Copyright
    - links
    - contact

*/

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
                    const = [] = useState()

                - Modify
                    useing the set function in the state Hook 
    -useEffect()