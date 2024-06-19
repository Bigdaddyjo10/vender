import { AppState } from "../AppState.js"

export class VenderItems {
    constructor(VenderItemName, VenderItemCost, VenderItemImg) {
        this.name = VenderItemName
        this.cost = VenderItemCost
        this.img = VenderItemImg
    }

    get catalogHTMLTemplate() {
        return /*html*/ `
            <div class="col-12 col-md-4">
                <div class="card bg-black d-flex justify-content-between align-items-center m-2 text-light">
                    <img class="img-thumbnail" src="${this.img}" alt="">
                    <p>${this.name}</p>
                    <p>$${this.cost}</p>
                    <button onclick="app.MoneyController.spendMoney(${this.name})">153</button>
            </div>
        </div>
        `
    }
}