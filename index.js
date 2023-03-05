const express = require('express');
const userRouter = require('./routes/user-routes');
const postRouter = require('./routes/post-routes');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use('/api', userRouter);
app.use('/api', postRouter)

// app.get('/', (req, res) => {
//     res.send('Hello to new project')
// });


app.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`)
});
