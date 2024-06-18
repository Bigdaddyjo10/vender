import { Money } from "../models/Money.js";
import { moneyService } from "../services/MoneyService.js";

export class MoneyController {
    constructor() {
    }

    addMoney() {

        moneyService.addMoney()
    }
    spendMoney(nameItem) {
        moneyService.spendMoney(nameItem)
    }
}