/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var aqiTable=document.getElementById('aqi-table');
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {

var cityName=document.getElementById('aqi-city-input').value;
var indexNum=document.getElementById('aqi-value-input').value;
var cityNameStr=/^[a-zA-Z\u4e00-\u9fa5]+$/;
var indexNUmStr=/^\d+$/;
var retrim=/(^\s*)|(\s*)|(\s*$)/g;
cityName=cityName.replace(retrim,"");
indexNum=indexNum.replace(retrim,"");
if(!cityNameStr.test(cityName))
{
	alert("请输入中英文字符");
	return;
}
if (!indexNUmStr.test(indexNum)) 
{
	alert("空气质量指数必须为整数");
	return;
}
aqiData[cityName]=indexNum;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {


var tableContent="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
for(var val in aqiData)
{
tableContent+="<tr><td>"+val+"</td><td>"+aqiData[val]+"</td><td><button>删除</button></td></tr>";
}

aqiTable.innerHTML=tableContent;

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.
  aqiTable.addEventListener('click',function(event){
  	var target=event.target;
  	if(target.tagName.toLowerCase()=='button')
  	{
  		aqiTable.deleteRow(target.parentNode.parentNode.rowIndex);
  	}
  },false);
  // renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  var addBtn=document.getElementById('add-btn');
  addBtn.onclick=addBtnHandle;

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  delBtnHandle();
}

init();

