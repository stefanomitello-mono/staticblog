import React from 'react'
import { Title } from 'react-head'



import myJson from '../../public/content/post/title01.json';
console.log("myJson", myJson);


import fs from 'fs';
fs.readFile('../../public/content/post/title01.json', 'utf8', (error: any, data: string) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log(JSON.parse(data));

})

let jsonData = require('../../public/content/post/title01.json');
console.log("jsonData", jsonData);

const About = () => (
    <div>
        <h1>About</h1>
    </div>
)
export default About