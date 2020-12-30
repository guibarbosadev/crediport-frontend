export function onlyNumbers(text = '') {
    const withDot = text.replace(',', '.');
    const onlyDigits = withDot.replace(/\D/g, '');
    const parsedText = Number(Number(onlyDigits).toFixed(2));

    return parsedText;
}

export function currencyMask(amount: string | number) {
    const parsedAmount = onlyNumbers(amount.toString());
    const withZerosLeft = parsedAmount.toString().padStart(3, '0');
    const beforeFractionDigitsIndex = withZerosLeft.length - 2;
    const fractionDigits = withZerosLeft.slice(beforeFractionDigitsIndex);
    const beforeFractionDigits = withZerosLeft.slice(
        0,
        beforeFractionDigitsIndex
    );
    const withDot = `${beforeFractionDigits}.${fractionDigits}`;
    const formattedAmount = withDot.toString().replace('.', ',');

    return formattedAmount;
}

export function parseCurrency(amount: string) {
    const onlyDigits = onlyNumbers(amount);
    const parsedCurrency = Number(onlyDigits.toFixed(2));

    return parsedCurrency;
}
