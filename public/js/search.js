$(function() {
	$('#song').focus(function() {
		$('#cancel').css("display", 'block');
	})
	$('#cancel').click(function() {
		$('#song').val("");
		$(this).css("display", "none")
		$('#list').empty();
		randerHistory();
	})
	//获取音乐列表
	function ajaxData(songs) {
		$.ajax({
			type: "get",
			url: "http://route.showapi.com/213-1?showapi_appid=49174&showapi_sign=67e1f36ea008490ea96ad4050258e20b&keyword=" + songs + "&page=1&",
			async: true,
			success: function(res) {
				if(res.showapi_res_code == 0) {
					var datas = res.showapi_res_body.pagebean;
					var data = datas.contentlist;
					sum = data.length;
					//					console.log(data);
					var results = render(data, sum);
					$('#list').html(results);
				}
			}
		});
	}
	//获取类表
	function render(data, sum) {
		var result = '';
		for(var i = 0; i < sum; i++) {
			if(!data[i].albumpic_small) {
				data[i].albumpic_small = data[0].albumpic_small;
			}
			result += "<li>"
			result += "<a class='toplay' href='play.html'data_type='1' data_songid=" + data[i].songid + " data_songname=" + data[i].songname + " data_singername=" + data[i].singername + " data_songimg=" + data[i].albumpic_small + " data_songurl=" + data[i].m4a + ">"
			result += "<img src='" + data[i].albumpic_small + "'/><div><h3>" + data[i].songname + "</h3><p>" + data[i].singername + "</p></div></a></li>"
		}
		return result;
	}
	//点击enter键,查询
	$("#song").keyup(function(event) {
		var val = $('#song').val();
		if(!val) {
			return false;
		}
		var e = event || window.event;
		if(e.keyCode == 13) {
			ajaxData(encodeURIComponent(val));
			saveHistory(val);
		} else {
			ajaxData(encodeURIComponent(val));
		}
	});
	//点击记录，搜索
	$('#list').on('click', '.history', function(e) {
		val = $(this).text();
		$('#song').val(val);
		ajaxData(encodeURIComponent(val));
	})
	//存储历史记录
	var historyArr = [];
	function saveHistory(val) {
		if(!localStorage.getItem('his')) {
			historyArr.push(val)
			localStorage.setItem('his', historyArr);
		} else {
			var isAlreadyHave = false;
			for(var i = 0; i < historyArr.length; i++) {
				if(historyArr[i] === val) {
					isAlreadyHave = true;
				}
			}
			if(!isAlreadyHave) {
				historyArr.push(val);
				localStorage.setItem('his', historyArr);
			}
		}
		console.log(localStorage.getItem('his'));
	}
	//渲染然历史记录
	function randerHistory() {
		if(localStorage.getItem('his')) {
			var historyStr = localStorage.getItem('his');
			historyArr = historyStr.split(",");
			var historyres = '';
			for(var i = 0; i < historyArr.length; i++) {
				historyres += "<li class='history'><span class='aa'></span><span>" + historyArr[i] + "</span><i class='cleanThis'  data_id = "+i+"></i></li>"
			}
			historyres += "<p id='cleanAll'>清楚全部记录</p>"
			$('#list').html(historyres);
		} else {
			$('#list').html("<p id='notice'>历史记录为空</p>");
		}
	}
	randerHistory();
	//清除一条记录
	function cleaThis(){
		$('#list').on('click','.cleanThis',function(e){
		window.event? window.event.cancelBubble = true : e.stopPropagation();
//		alert($(this).attr('data_id'));
		$(this).parent().remove();
		var id =$(this).attr('data_id');
		var historyStr = localStorage.getItem('his');
		var hisArr = historyStr.split(",");
		hisArr.splice(id,1);
		localStorage.setItem('his', hisArr);
		return false;
		})
	}
	 cleaThis();
	 //清除所有
	 function cleanAll(){
	 	$('#list').on('click','#cleanAll',function(){
	 		localStorage.setItem('his','');
	 		randerHistory();
	 	})
	 }
	 cleanAll();
})