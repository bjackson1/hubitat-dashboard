module.exports = api => {
	api.cache(true)

	const presets = [
		[
			'@babel/preset-env',
			{
				useBuiltIns: 'usage',
				corejs: 3,
			},
		],
		'@babel/preset-react',
	]

	return {
		presets,
	}
}
