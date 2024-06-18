import { Money } from './models/Money.js'
import { VenderItems } from './models/VenderItems.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  venderItems = [
    new VenderItems(
      'A&W',
      '2.25'
    ),
    new VenderItems(
      'Coca-Cola',
      '1.25'
    ),
    new VenderItems(
      'Mountain Dew',
      '3.25'
    )
  ]

  myMoney = 0
}

export const AppState = createObservableProxy(new ObservableAppState())