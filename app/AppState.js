import { Money } from './models/Money.js'
import { VenderItems } from './models/VenderItems.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  venderItems = [
    {
      name: 'A&W',
      cost: 1.25
    },
    {
      name: 'Cola',
      cost: 2.25
    },
    {
      name: 'Mountain Dew',
      cost: 0.25
    },
  ]
  myMoney = 0.25
}

export const AppState = createObservableProxy(new ObservableAppState())