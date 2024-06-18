export class VenderItems {
    constructor(VenderItemName, VenderItemCost, VenderItemImg) {
        this.name = VenderItemName
        this.cost = VenderItemCost
        this.img = VenderItemImg
    }
    get catalogHTMLTemplate() {
        return `
        <div class="col-12 col-md-4">
            <div class="card-body bg-black d-flex justify-content-between align-items-center m-2 text-light">
                <p>A&W</p>
                <p>$1.25</p>
                <button onclick="app.MoneyController.spendMoney('A&W')">123</button>
            </div>
        </div>
        `
    }
}