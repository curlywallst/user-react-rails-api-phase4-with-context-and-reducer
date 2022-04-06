import React, { useState, useEffect } from 'react';

// function useCommands() {
//     const [commands, setCommands] = useState([])

//     useEffect(() => {
//         console.log("inside custom hook")

//         fetch('/commands')
//         .then(r => r.json())
//         .then(data => {
//             console.log(data)
//             setCommands(data)
//         })
//     }, []);

//     return {
//         commands: commands
//     }
//   }
  
//   export default useCommands