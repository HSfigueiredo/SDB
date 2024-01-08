const { app } = require('./server');

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Online on http://localhost:${PORT}`);
})