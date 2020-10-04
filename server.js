const express = require("express")
const bodyParser = require("body-parser")
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/bmi.html');
});

app.post('/', (req, res) => {
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    var BMI = calculateBMI(height, weight);
    res.send(`Your BMI is ${BMI} kg/m^2`)
})

var calculateBMI = (height, weight) => {
    var ans = weight / Math.pow(height, 2);
    return ans
}

app.listen(3000, () => {
    console.log("Server is Up")
})