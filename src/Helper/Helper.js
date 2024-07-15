export function dateFormat(date) {
    const newDate = new Date(date).toLocaleString("en-us", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
    return newDate;
}

export default function formatMoney(
    amount,
    locale = "en-US",
    currency = "EGP"
) {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
    })
        .format(amount)
        .split(".00");
}
