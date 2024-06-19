
import { VenderItems } from './models/VenderItems.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  venderItems = [
    new VenderItems(
      'Orange Drink',
      1.25,
      'text-warning',
      'https://media.istockphoto.com/id/951951548/vector/aluminum-can-mockup-vector-illustration.jpg?s=612x612&w=0&k=20&c=SGrSzernA5YglnfJaVMwkrZYbWpEiby1ItVzv1YZXME='
    ),
    new VenderItems(
      'Blue Drink',
      2.25,
      'text-primary',
      'https://media.istockphoto.com/id/947674080/vector/aluminum-can-mockup-vector-illustration.jpg?s=612x612&w=0&k=20&c=kQvuUzr8IMaRMpCnXslLE8oMmSwgtP1wGrMY78YKKmI='
    ),
    new VenderItems(
      'Red Drink',
      0.25,
      'text-danger',
      'https://media.istockphoto.com/id/952095350/vector/aluminum-can-mockup-vector-illustration.jpg?s=612x612&w=0&k=20&c=1oQa5j6VJCilQNVY-F0WZnFWjvMF91XYxqe4XVOYP-g='
    ),
    new VenderItems(
      'Green Drink',
      4.25,
      'text-success',
      'https://media.istockphoto.com/id/951604202/vector/aluminum-can-mockup-vector-illustration.jpg?s=612x612&w=0&k=20&c=l6DLDf_fXmmrUbcRINUHZ1_jbDVs6g0ETi5DGYeFHN4='
    ),
    new VenderItems(
      'White Drink',
      0.50,
      'text-light',
      'https://media.istockphoto.com/id/945123880/vector/aluminum-can-mockup-vector-illustration.jpg?s=612x612&w=0&k=20&c=dao3tXtIw6BypaxvToocI2eCewWdv-WBYb9el70vgbE='
    ),
    new VenderItems(
      "Black Drink",
      10.00,
      'text-black',
      'https://media.istockphoto.com/id/952995002/vector/aluminum-can-mockup-vector-illustration.jpg?s=612x612&w=0&k=20&c=3iXePz5XKstm4B769gMLuEJavGxNx7Rl2_7wt0YQWSc='
    )
  ]
  myMoney = 0.25
}

export const AppState = createObservableProxy(new ObservableAppState())