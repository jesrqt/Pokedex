# About Pokédex
Pokédex, as the name suggests, is an pokédex app. It is built with HTML, CSS, and JavaScript with the React framework. Upon landing the page, users can see the first 20 pokémons. Users can also click on the pokémons to see their information, such as their names, types, evolutions, game indices (versions of pokémon in which they appear), and base stats. Users can also load more pokémons by clicking on the next page. In total, they can browse 380 pokémons, from the first to the third generations.

If you want to use the app in action, here is a deployed app with Netlify: https://genuine-treacle-21c99c.netlify.app/
You can also visit my Portfolio website: https://jessieinit.com/

![Pokédex, an app where you can browse Pokémons](/public/images/Pokedex_Image.png)

## Motivation of the project
I am currently learning HTML, CSS, JavaScript, and React to become a front-end developer. Through this project, I attempted to learn the following:

* Gain hands-on experiences developing a React app from planning, designing, to developing
* Familiarize myself with React JSX syntax
* Learn how to set up states using hooks, especially useState() and useEffect()
* Learn how to pass states using props and use them throughout components
* Learn how to lift props up through components
* Gain experiences on fetch API with async and await syntax
* Gracefully handle potential errors from API with try and catch syntax
* Effectively update states with json objects returned from the API calls

## How does Pokédex work?

1. Open the website (https://genuine-treacle-21c99c.netlify.app/) or run the website on your local machine (http://localhost:3000).
2. Notice that the first 20 pokémons are automatically fetched from PokeAPI (https://pokeapi.co/) and rendered at the left side of the website.
3. Click on one of the pokémons to see its information, such as its name, type, evolutions, game indices (versions of pokémon in which it appears), and base stats.
4. Click on "Next" button to go to the next page with another 20 pokémons.
5. Click on "Previous" button to go back to the previous page with previous 20 pokémons.

## Technologies used for Pokédex

The technologies used for the app are the following:

* React built with function components
* React hooks including useState(), useEffect(), and useCallback()
* Fetch API to send GET requests to PokeAPI (https://pokeapi.co/)
* Better readability with async and await syntax
* Error handling with try and catch statements

![Example code using React hooks and fetch API](/public/images/Example_Code.png)

## How to install and run Pokédex

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Download the repository and run:

### `npm install`

and 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.



