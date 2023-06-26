let qrt = prompt("Quantity : ")
let total = 0

for(let i = 1; i <= qrt; i++){
    let item_price = prompt("ราคาสินค้าชิ้นที่ : " + i)
    total = total + parseInt(item_price)
    document.getElementById("pricelist").innerHTML += "รายการสินค้าชิ้นที่ " + i + " : " + item_price + "บาท" + "<br>" 
}
document.getElementById("totalprice").innerHTML = "ราคารวมทั้งหมด " + total + " บาท"
