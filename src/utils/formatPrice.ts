/**
 * Formats a price string into a localized currency display with currency code.
 *
 * Uses the Intl.NumberFormat API to format prices with proper decimal places,
 * thousand separators, and currency-specific formatting rules. Always displays
 * the currency code (e.g., "USD") instead of currency symbols (e.g., "$").
 *
 * @param price - The price as a string (e.g., "29.99", "1234.56")
 * @param currencyCode - ISO 4217 currency code (e.g., "USD", "EUR", "GBP", "JPY")
 * @returns A formatted currency string with currency code prefix
 *
 * @example
 * // Basic usage
 * formatPrice("29.99", "USD") // → "USD 29.99"
 *
 * @example
 * // With thousand separators
 * formatPrice("1234.56", "EUR") // → "EUR 1,234.56"
 *
 * @example
 * // Currency-specific formatting (JPY has no decimals)
 * formatPrice("5000", "JPY") // → "JPY 5,000"
 *
 * @example
 * // Integer values get proper decimal formatting
 * formatPrice("100", "GBP") // → "GBP 100.00"
 */
export function formatPrice(price: string, currencyCode: string): string {
	const formattedPrice = new Intl.NumberFormat('de-CH', {
		style: 'currency',
		currency: currencyCode,
		currencyDisplay: 'code',
	}).format(parseFloat(price));
	return formattedPrice;
}
