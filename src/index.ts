import express, {Express, Request, Response} from 'express';

const app: Express = express()
const port = 4001

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})
