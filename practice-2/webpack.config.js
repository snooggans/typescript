const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devServer: {
		static: {
			directory: path.join(__dirname, '/'),
		},
		compress: true,
		port: 9000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./app/pageTemplates/index/index.html",
			inject: true,
			chunks: ['index'],
			filename: 'index.html'
		}),
		new HtmlWebpackPlugin({
			template: "./app/pageTemplates/ticket/index.html",
			inject: true,
			chunks: ['ticket'],
			filename: 'ticket.html'
		})
	],

  entry: {
	  index : './app/index.ts',
	  tours : './app/services/modal/modalService.ts',
	  ticket: './app/pages/tickets/tickets.ts'
  },
	watch: true,
  module: {
    rules: [
	    {
		    test: /\.(png|jp?g|gif)$/i,
		    use: [
			    {
				    loader: 'file-loader',
				    options: {
					    publicPath: '/img/',
					    name: '[name].[ext]'
				    }
			    },
		    ]

	    },
	    {
	        test: /\.tsx?$/,
	        use: 'ts-loader',
	        exclude: /node_modules/,
	      },
	    {
		    test: /\.(scss|css)$/,
		    use: ['style-loader', 'css-loader', 'sass-loader'],
	    },
    ],
  },
  resolve: {
	  alias: {
		  '@rest': path.resolve(__dirname, 'app/services/rest/'),
		  '@services': path.resolve(__dirname, 'app/services/'),
		  '@assets': path.resolve(__dirname, 'app/assets/'),
	  },
	  extensions: ['.tsx', '.ts', '.js'],
	  modules: [path.resolve(__dirname, '../node_modules'), 'node_modules']
  },
  output: {
	  filename: '[name].js',
	  path: path.resolve(__dirname, 'dist/'),
	  clean: true,
  },
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	}
};
