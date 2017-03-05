module.exports = {
	// entry: './main.js',  // 单入口
	entry:{  // 多入口
		'bundle':'./main.js',
		'bundle1':'./main1.js'
	},
	output:{
		path:__dirname +'/dist',
		filename:'[name].js'
	}
}