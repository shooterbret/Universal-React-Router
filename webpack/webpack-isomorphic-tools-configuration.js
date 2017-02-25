/**
 * Created by shooterbret on 2/23/2017.
 */
//import Webpack_isomorphic_tools_plugin from 'webpack-isomorphic-tools/plugin';
let WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
module.exports =
{
    assets:
    {
        style_modules:
        {
            extensions: ['less', 'scss'],

                // which `module`s to parse CSS style class name maps from:
                filter: function(module, regex, options, log)
        {

            // In production mode there's no Webpack "style-loader",
            // so `module.name`s of the `module`s created by Webpack "css-loader"
            // (those which contain CSS text)
            // will be simply equal to the correct asset path
            return regex.test(module.name)
        },

            // How to correctly transform `module.name`s
            // into correct asset paths
            path: function(module, options, log)
            {

                // in production mode there's no Webpack "style-loader",
                // so `module.name`s will be equal to correct asset paths
                return module.name
            },

            // How to extract these Webpack `module`s' javascript `source` code.
            // Basically takes `module.source` and modifies its `module.exports` a little.
            parser: function(module, options, log)
            {
                if (options.development)
                {
                    // In development mode it adds an extra `_style` entry
                    // to the CSS style class name map, containing the CSS text
                    return WebpackIsomorphicToolsPlugin.css_modules_loader_parser(module, options, log);
                }

                // In production mode there's Webpack Extract Text Plugin
                // which extracts all CSS text away, so there's
                // only CSS style class name map left.
                return module.source
            }
        }
    }
}
