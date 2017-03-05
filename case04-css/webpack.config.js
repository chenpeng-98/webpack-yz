module.exports ={
	entry:'./main.js',
	output:{
		filename:'bundle.js'
	},
	module:{
		loaders:[{
			test:/\.css$/,
			loaders:["style","css"]
			// loader:"style!css"  // loader[无s],和上边数组形式作用相同
		}]
	}
}