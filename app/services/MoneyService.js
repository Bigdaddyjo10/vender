import { AppState } from "../AppState.js"

class MoneyService {

    addMoney() {
        AppState.myMoney += 0.25
        const moneyId = document.getElementById('myMoneyId')
        moneyId.innerText = AppState.myMoney
        console.log(AppState.myMoney);
    }

    spendMoney(nameItem) {
        const itemName = AppState.venderItems.find((item) => item.name == nameItem)
        if (AppState.myMoney < itemName.cost) {
            return
        }
        AppState.myMoney -= itemName.cost
        const moneyId = document.getElementById('myMoneyId')
        moneyId.innerText = AppState.myMoney
        console.log('The items names is ' + itemName.name);
        console.log('your money is ' + AppState.myMoney);
    }
}
export const moneyService = new MoneyService()