import { Money } from "../models/Money.js";
import { moneyService } from "../services/MoneyService.js";

export class MoneyController {
    constructor() {
    }

    addMoney() {
        console.log('Adding Money');
        moneyService.addMoney()
    }
    spendMoney() {
        moneyService.spendMoney()
    }
}