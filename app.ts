import { WBProduct, Constants } from 'wb-private-api'

// const articles = [138593051]
const articles = [138593051, 94340317, 94340606, 138590435, 138607462, 94339119, 94339244]

const warehouseIds = new Set(
    Constants.WAREHOUSES
        .filter((val) => val.displayName.includes("Казань"))
        .map(val => val.id)
)
// console.log(warehouseIds);

const getKazanSizes = async (product: WBProduct) => {
    await product.getDetailsData()

    const sizes = product._rawResponse?.details?.sizes || []
    if (sizes.length == 0) {
        return
    }

    let response = new Map();
    response["Art"] = product.id

    for (let i = 0; i < sizes.length; i++) {
        let cnt = 0
        for (let j = 0; j < sizes[i].stocks.length; j++) {
            let stock = sizes[i].stocks[j]
            if (warehouseIds.has(stock.wh)) {
                cnt += stock.qty
            }
        }

        const colname = sizes[i].name 

        response[colname] = cnt
    }

    return response
}

articles.forEach(async (article) => {
    const product = new WBProduct(article)

    console.log(JSON.stringify(await getKazanSizes(product)))
})
