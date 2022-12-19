const express = require('express')

const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Hello World! I am studying IT')
})

app.get('/about', (req, res) => {
    res.send('ITを勉強してる')
  })
  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

