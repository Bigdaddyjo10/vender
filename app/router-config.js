
import { MoneyController } from "./controllers/MoneyController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [MoneyController],
    view: /*html*/`
    `
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])