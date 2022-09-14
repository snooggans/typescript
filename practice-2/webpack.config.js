const path = require('path');

module.exports = {
  entry: {
	  index : './app/index.ts',
	  tours : './app/services/modal/modalService.ts',
	  ticket: './app/pages/tickets/tickets.ts'
  },
	watch: true,
  module: {
    rules: [
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
	  },
	  extensions: ['.tsx', '.ts', '.js'],
	  modules: [path.resolve(__dirname, '../node_modules'), 'node_modules']
  },
  output: {
	  filename: '[name].js',
	  path: path.resolve(__dirname, 'dist/'),
	  clean: true,
  },
};
