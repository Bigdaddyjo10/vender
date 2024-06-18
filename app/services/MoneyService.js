import { AppState } from "../AppState.js"

class MoneyService {


    addMoney() {
        AppState.myMoney++
        console.log(AppState.myMoney);
    }

    spendMoney() {
        AppState.myMoney--
        console.log(AppState.myMoney);
    }
}
export const moneyService = new MoneyService()