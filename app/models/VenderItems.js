import { AppState } from "../AppState.js"

export class VenderItems {
    constructor(VenderItemName, VenderItemCost, VenderItemTextColor, VenderItemImg) {
        this.name = VenderItemName
        this.cost = VenderItemCost
        this.textColor = VenderItemTextColor
        this.img = VenderItemImg
    }

    get catalogHTMLTemplate() {
        return /*html*/ `
            <div class="col-12 col-md-4">
                <div class="card bg-black d-flex justify-content-between align-items-center m-2 text-light">
                    <img onclick="app.MoneyController.spendMoney('${this.name}')" class="img-thumbnail" src="${this.img}" alt="">
                    <p class="${this.textColor}">${this.name}</p>
                    <p>$${this.cost.toFixed(2)}</p>
            </div>
        </div>
        `
    }
}