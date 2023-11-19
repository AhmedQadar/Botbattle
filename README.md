# BOT COLLECTION ;
            
        1-
            Import React and Hooks:

        2-
            Imported necessary modules from the "react" library for building React components.
            Declare BotCollection component:

        3-
            Declared a functional component named "BotCollection."
            Initialize State:

        4-
            Utilized the useState hook to initialize state variables:
            bots: Represents the bot data.
            selectedClass: Keeps track of the currently selected bot class.
            classes: Stores the available bot classes.
            Data Fetching with useEffect:

        5-
            Used the useEffect hook to execute a side effect when the component mounts.
            Sent a GET request to 'http://localhost:3001/bots' to fetch bot data.
            Updated the state variables bots and classes with the fetched data.
            Handle Class Change:

        6-
            Implemented the handleClassChange function to respond to changes in the selected class.
            Updated the selectedClass state.
            Filtered and updated the displayed bots based on the selected class.
            Handle Add to MyArmy:

        8-
            Created the handleAddToMyArmy function to respond to the addition of a bot to "MyArmy."
            Sent a POST request to 'http://localhost:3002/selectedBots' with the selected bot data.
            Updated the UI by marking the added bot and logging the addition.
            Handle Remove from BotCollection:

        9-
            Implemented handleRemoveFromBotCollection to handle removing a bot from the collection.
            Sent a DELETE request to http://localhost:3001/bots/${id} for the specified bot.
            Updated the UI by removing the bot from the displayed collection.
            Render JSX:

        10-
            Returned JSX code for rendering the BotCollection component.
            Included bot cards, a class filter dropdown, and buttons for adding/removing bots.
            Export Component:

            Exported the BotCollection component to make it available for use in other parts of the application.



# MY ARMY ;
        
        1-
            Import necessary modules from the "react" library for building React components and using hooks.
            Declare MyArmy Component:

        2-
            Declare a functional component named "MyArmy."
            Initialize State with useState:

        3-
            Use the useState hook to create the selectedBots state variable, initialized as an empty array.
            Fetch Data with useEffect:

        4-
            Utilize the useEffect hook to execute code after the component mounts.
            Fetch data from 'http://localhost:3002/selectedBots' using the fetch API.
            Convert the response to JSON and update the selectedBots state with the fetched data.
            Handle Remove from MyArmy:

        5-
            Define a function named handleRemoveFromMyArmy to handle the removal of a bot from "MyArmy."
            Log the removal action to the console.
            Send a DELETE request to 'http://localhost:3002/selectedBots/${id}' to remove the specified bot.
            If the request is successful, update the state to exclude the removed bot.
            Log any errors that occur during the removal process.
            Render JSX:

        6-
           Return JSX code to render the MyArmy component.
            Display the bot cards with details and a button for removing each bot from "MyArmy."
            Export Component:

            Export the MyArmy component for use in other parts of the application.


# NAVBAR ;

            Import Modules:

            Import React and Link from 'react-router-dom.'
            Declare Component:

            Declare a functional component named "NavBar."
            Render JSX:

            Return JSX code for rendering the NavBar component.
            Navbar Structure:

            Define the structure of the navbar using Bootstrap classes with a dark background.
            Container Element:

            Use a container-fluid element for the navbar content.
            Navbar Brand:

            Create a brand link using the Link component.
            Navbar Toggler Button:

            Add a button for toggling the navbar on smaller screens.
            Navbar Navigation Links:

            Include navigation links using the Link component for "BotCollection" and "MyArmy."
            Search Form:

            Add a search form with an input field and a search button.
            Export Component:

            Export the NavBar component for use in other parts of the application.




# APP ;

            Import CSS and React Modules:

            Import the stylesheet ('./App.css') and necessary modules (BrowserRouter, Route, Routes) from 'react-router-dom.'
            Import Components:

            Import the BotCollection, NavBar, and MyArmy components from their respective files.
            Declare App Component:

            Declare the functional component named "App."
            Render JSX:

            Return JSX code for rendering the App component.
            App Structure:

            Create a div with the class "App" to contain the entire application.
            Router Setup:

            Use BrowserRouter as the router container for the application.
            Navbar Component:

            Include the NavBar component to provide navigation links.
            Routing Configuration:

            Use the Routes component to define routes for different components.
            Set up a route for the "BotCollection" component with the path "/" and another for "MyArmy" with the path "/myArmy."
            Route Rendering:

            Use the Route component to specify which component to render for each route.
            Export Component:

            Export the App component for use in other parts of the application.





    


