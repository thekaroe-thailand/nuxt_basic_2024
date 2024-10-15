export default function calculateVat(price: number, vat: number): number {
    if (price > 0) {
        return price * vat
    } else {
        return 0
    }
}