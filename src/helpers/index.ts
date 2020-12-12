export function onlyNumbers(text = '') {
    const withComma = text.replace(',', '.');
    const onlyDigits = withComma.replace(/\D/g, '');
    const parsedText = Number(onlyDigits);

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
    const withDot = amount.replace(',', '.');
    const onlyDigits = onlyNumbers(withDot);
    const parsedCurrency = Number(onlyDigits.toFixed(2));

    console.log('bla');

    return parsedCurrency;
}
