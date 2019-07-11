$(function() {
	//适配主流移动端表现
	if(window.devicePixelRatio == 2 || window.devicePixelRatio == 3) {
		$('html').css({
			"font-size": "10px"
		});
	} else {
		$('html').css({
			"font-size": "20px"
		});
	}
	console.log(sessionStorage.getItem('topid'))
	//数据调用
	function getData(id, elem, callback1) {
		$.ajax({
			type: "get",
			url: "http://route.showapi.com/213-4?showapi_appid=49174&showapi_sign=67e1f36ea008490ea96ad4050258e20b&topid=" + id + "&",
			async: true,
			beforeSend: function() {
				$(".ratedList").html('正在努力加载中...')
			},
			success: function(res) {
				var data1 = res.showapi_res_body.pagebean.songlist;
				console.log(res);
				var ids = parseInt(id)
				var chosed = chose(ids);
				console.log(chosed)
				$('.ablums_right h3').html("巅峰榜--"+chosed);
				$('.ablums_left img').attr('src', data1[0].albumpic_small);
				$('.songnum').html("共" + res.showapi_res_body.pagebean.total_song_num + "首");
				$('.coverImg img').attr('src', data1[0].albumpic_small);
				$('.updata').html(res.showapi_res_body.pagebean.update_time + "更新");
				len = data1.length;
				callback1(data1, len, elem)
			}
		});
	}
	//新歌推荐
	function newSong(data, len, elem) {
		var result = '';
		for(var i = 0; i < len; i++) {
			result += "<li>";
			result += "<a class='toplay' href='play.html' data_songid=" + data[i].songid + " data_songname=" + data[i].songname + " data_singername=" + data[i].singername + " data_songimg=" + data[i].albumpic_small + " data_songurl=" + data[i].url + ">";
			result += "<div class='list_order'>" + (i + 1) + "</div><div class='list_song'><h3 class='songname'>" + data[i].songname + "</h3><p class='singname'>" + data[i].singername + "</p></div></a></li>"
		}
		elem.html(result);
	}
	getData(sessionStorage.getItem('topid'), $(".ratedList"), newSong);
	//排行榜分类
	function chose(id) {
		switch(id) {
			case 3:
				return "欧美"
				break;
			case 4:
				return "流行榜"
				break;
			case 5:
				return "内地"
				break;
			case 6:
				return "港台"
				break;
			case 16:
				return "韩国"
				break;
			case 17:
				return "日本"
				break;
			case 26:
				return "热歌"
				break;
			case 27:
				return "新歌"
				break;
			case 28:
				return "网络歌曲"
				break;
			case 32:
				return "音乐人"
				break;
			case 36:
				return "K歌金曲"
				break;
			default:
				return ""
				break;
		}
	}
})