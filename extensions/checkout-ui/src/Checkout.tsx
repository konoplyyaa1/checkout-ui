import {
	BlockStack,
	reactExtension,
	Text,
	useApi,
} from '@shopify/ui-extensions-react/checkout'

// 1. Choose an extension target
export default reactExtension('purchase.checkout.block.render', () => (
	<Extension />
))

function Extension() {
	// 2. Use the extension API to gather context from the checkout and shop
	const { shop } = useApi()

	// 3. Render a UI
	return (
		<BlockStack>
			<Text>Shop name: {shop.name}</Text>
		</BlockStack>
	)
}
