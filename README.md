# [Live link](https://akash-ttt-assignment.netlify.app/)
# Code overview 
![image](https://github.com/akashmishra98/Terribly-Tiny-Tales-Assignment/assets/83551583/1e0fae31-8411-482c-a8c4-c27f526c6185)

Here , Basically imported  React library plus the Graph component is imported from the Graph.js file. This component is used to render a bar graph of the top 20 most frequently occurring words in the text file.The CSVLink component is imported from the react-csv library. This component is used to generate a CSV file of the top 20 most frequently occurring words when the "Export" button is clicked.The CallApi() function is defined to make an API call to fetch the data from the text file at the URL "https://www.terriblytinytales.com/test.txt".

![image](https://github.com/akashmishra98/Terribly-Tiny-Tales-Assignment/assets/83551583/de41c67b-e715-40d7-ac6c-9e6628f0aac9)

Here, the received data is split into an array of strings using the newline character as a delimiter. The ?. operator is used to check if the data variable is not undefined or null before performing the split operation.Here, the formateData array is iterated over using the forEach method. Each element of the formateData array (a string) is split into an array of words using a space character as the delimiter.
 Then, a check is performed to see if the last character of the word is a period, question mark, comma, or space character. If it is, then the last character is removed using the slice method to create a new string (str) without the punctuation mark at the end. At the end of this section, hasharray object will contain the frequency count of all the words present in the data.
 
 ![image](https://github.com/akashmishra98/Terribly-Tiny-Tales-Assignment/assets/83551583/fdc77cdf-b042-4186-8676-6b84b537fa64)
 
headers is an array of objects which is used to define the header row for the CSV file that will be exported later in the code.The button element inside the contentLink div has an onClick event listener which calls the CallApi function when clicked.The second button element inside the contentLink div is wrapped by a CSVLink component which exports the data in the final array as a CSV file with the headers defined in the headers array when clicked.The Graph component is rendered with the final prop if the final array has at least one element, otherwise nothing is rendered.

# Graph component

![image](https://github.com/akashmishra98/Terribly-Tiny-Tales-Assignment/assets/83551583/290f5fd8-fbb1-4bf6-a27d-20771306fd61)

This is a React component that renders a histogram using the recharts library.
The Graph component takes a prop called final, which is an array of objects containing the words and their corresponding frequencies.
Inside the component, the ResponsiveContainer component is used to make the histogram responsive.The BarChart component is used to render the histogram with a width of 550 and a height of 550.The XAxis component specifies the data key for the X-axis, which is the "word" property of the objects in the final array.The YAxis component specifies the data key for the Y-axis, which is the "value" property of the objects in the final array.
The Tooltip component is used to show the values of the bars when the user hovers over them.
The Bar component is used to render the bars with a fill color. The data key for the bars is also "value", which corresponds to the frequency of each word.Finally, the Graph component returns the div element that contains the histogram along with a title "histogram".

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
