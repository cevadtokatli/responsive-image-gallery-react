const pkg = require('./package');
const replace = require('rollup-plugin-replace');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const coffee = require('rollup-plugin-coffee-script');
const babel = require('rollup-plugin-babel');

const banner = `/*!
 *   Responsive Image Gallery React
 *   version: ${pkg.version}
 *    author: ${pkg.author.name} <${pkg.author.email}>
 *   website: ${pkg.author.url}
 *    github: ${pkg.repository.url}
 *   license: ${pkg.license}
 */`;

module.exports = {
    input: 'src/index.coffee',
    output: [
        {
            banner,
            file: 'dist/responsive-image-gallery.js',
            format: 'umd',
            name: 'ResponsiveImageGallery'
        },
        {
            banner,
            file: 'dist/responsive-image-gallery.common.js',
            format: 'cjs'
        },
        {
            banner,
            file: 'dist/responsive-image-gallery.esm.js',
            format: 'es'
        }
    ],
    input: './src/index.coffee',
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        nodeResolve({
            extensions: ['.js', '.coffee']
        }),
        commonjs({
            include: [
                'node_modules/**',
            ],
            namedExports: {
                'node_modules/react/index.js': ['Children', 'Component', 'PropTypes', 'createElement', 'cloneElement']
            }
        }),
        coffee(),
        babel({
            extensions: ['.js', '.coffee'],
            presets: [
                ['@babel/preset-env'],
                '@babel/preset-react'
            ]
        }),
    ]
};