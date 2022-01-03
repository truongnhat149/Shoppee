class Product {
    constructor (photo, name, priceOld, priceCurrent, saleOffPercent, saleOffLabel) {
        this.photo          = photo; 
        this.name           = name;
        this.priceOld       = priceOld;
        this.priceCurrent   = priceCurrent;
        // this.starGold       = starGold;
        this.saleOffPercent = saleOffPercent;
        this.saleOffLabel   = saleOffLabel
    }
}

let Products = [
    new Product("D:\CODEGYM\CASESTUDY\Shoppee\assets\img\img product\ghe-massage.png", 'Ghe massage', 30000000, 50000000, '10%', 'GIẢM'),
    new Product("D:\CODEGYM\CASESTUDY\Shoppee\assets\img\img product\ghe-massage.png", 'Ghe massage', 30000000, 50000000, '10%', 'GIẢM'),
    new Product("D:\CODEGYM\CASESTUDY\Shoppee\assets\img\img product\ghe-massage.png", 'Ghe massage', 30000000, 50000000, '10%', 'GIẢM'),

]


let divProduct = document.querySelector('.home-product-item');
Products.forEach(function (product, index) {
    divProduct.innerHTML += `
                            <tr id="">
                            <td class=""> </td>
                            
                            `

}
)

