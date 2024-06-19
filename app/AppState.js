
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
      'https://media.istockphoto.com/id/471669985/photo/orange-drink-can-with-clipping-path.jpg?s=1024x1024&w=is&k=20&c=H5XtIxsNoMcL87PH-E-Vc0H1wWQOBTDgt_hem8QVQtA='
    ),
    new VenderItems(
      'Blue Drink',
      2.25,
      'text-primary',
      'https://media.istockphoto.com/id/176518144/photo/blue-drink-can-with-clipping-path.jpg?s=1024x1024&w=is&k=20&c=DFOLALE0ehi4baFxT7OP4xgfxRmy5ty_0Yh8vlhRcI8='
    ),
    new VenderItems(
      'Red Drink',
      0.25,
      'text-danger',
      'https://media.istockphoto.com/id/175113989/photo/red-drink-can-with-clipping-path.jpg?s=1024x1024&w=is&k=20&c=nz_R1RYAVWsJ0_Oen9h1mqcAFS4LsaV5ifgtJZdkQGA='
    )
  ]
  myMoney = 0.25
}

export const AppState = createObservableProxy(new ObservableAppState())