import Express from 'express';
import User_Cards from './Router/User-Cars'
const App  = Express()
App.use(Express.json())
App.use('/t',User_Cards)

App.listen(3000,() : void => {
    console.log('run server.');
})