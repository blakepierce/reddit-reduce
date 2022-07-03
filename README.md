# Reddit.reduce()
 
## Project Description
Reddit.reduce() is a web application which interfaces with Reddit's API to display a stripped down, read-only version of Reddit in a clean, distraction free environment. This project began as an answer to a prompt from Codecademy's Full-Stack developer track to create a web app using React and Redux to interact with Reddit's API in a read only format. As someone who doesn't use social media or sites like Reddit, I thought I'd try to make a version of Reddit that was more appealing to me. The goal was to git rid of all the distracting, competitive, addicting components and deliver only what is beneficial to the reader. Because of this, the app does not contain upvotes or downvotes, author names, or ads and limits the returned results to prevent mindless scrolling. The name, Reddit.reduce(), plays on the .reduce() method in JavaScript. Hopefully this app provides a better Reddit experience for you, as it has for me!
 
## Technology
This app was built in React and uses Redux for state management. Currently, the store only utilizes one slice, area, to render all the content. The slice has two main sections - posts and data. The data section contains general data about the area including the current title, subreddit name, and search term. The posts section contains an array of post objects. Each post object returns the data from Reddit's API relating to a post as well as additional fields pertaining to the posts' coments. The web app uses `fetch` to retrieve data from Reddit's API and various actions to update the store with that data. 

Reddit.reduce() was developed locally using node.js. Tailwind is used for all styling. ReactMarkdown is used to display markdown text.
 
## License
MIT License
 
Copyright (c) 2022 Blake Pierce
 
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
 
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
