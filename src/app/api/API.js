const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.get("https://www.bungie.net//common/destiny2_content/json/en/DestinyAchievementDefinition-d963d715-738b-4b8e-a8c7-6db728a9a8a1.json", (req, res)=>{
    console.log(res.json())
})



app.listen(3000, ()=>{
    console.log('listening on port 3000')
})