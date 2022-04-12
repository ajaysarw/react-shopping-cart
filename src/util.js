export default function formatCurrency(num) {
    let nm = Number(num.toFixed(1)).toLocaleString();
    return "$" + nm + " ";
}
