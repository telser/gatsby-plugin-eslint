exports.onCreateWebpackConfig = ({ actions, getConfig, stage }, pluginOptions) => {
  const config = getConfig();

    if (stage === 'develop') {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: pluginOptions.test || /\.js$|\.jsx$/,
                        exclude: pluginOptions.exclude || /(node_modules|cache|public)/,
                        use: [
                            {
                                loader: 'eslint-loader'
                            }
                        ]
                    }
                ]
            }
        });
    }
};
