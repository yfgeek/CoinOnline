let data = require('./selection.json');
let arr = [];
data.icons.forEach((item)=>{
	arr.push(
	{
		'cuy' : item.icon.tags[0],
		'color' :item.icon.attrs[0].fill,
	})
});
console.log(arr)

