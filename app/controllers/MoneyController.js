import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";
import { moneyService } from "../services/MoneyService.js";

export class MoneyController {
    constructor() {
        this.drawVenderItems()

    }
    drawVenderItems() {
        const venderItems = AppState.venderItems
        let innerHTMLString = ''
        venderItems.forEach((venderItem) => innerHTMLString += venderItem.catalogHTMLTemplate)
        const venderView = document.getElementById('venderView')
        venderView.innerHTML = innerHTMLString
    }

    addMoney() {
        moneyService.addMoney()
    }


    spendMoney(nameItem) {
        moneyService.spendMoney(nameItem)
    }
}