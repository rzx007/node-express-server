$(function () {
	var hasData = false;
	var indexHasAjax = false;
	var hotHasAjax = false;
	//适配主流移动端表现
	// ratios.innerHTML = window.devicePixelRatio;
	if (2 <= window.devicePixelRatio <= 3) {
		$('html').css({
			"font-size": "10px"
		});
	} else {
		$('html').css({
			"font-size": "20px"
		});
	}
	//轮播
	function creatSlider() {
		var mySwiper = new Swiper('.swiper-container', {
			loop: true,
			autoplay: 2000,
			// 如果需要分页器
			pagination: {
				el: '.swiper-pagination'
			}
		})
	}
	//切换
	$('nav a').each(function (i) {
		$(this).click(function () {
			$('nav a').removeClass('active');
			$(this).addClass('active');
			$('.section').css("display", "none");
			$('.section').eq(i).css("display", "block");
			if (!hasData && $(this).attr('href') == "#toplist") {
				console.log(0)
				//api接口限制,导航切换时加载
				getRated(3, rating);
				getRated(4, rating);
				getRated(5, rating);
				getRated(6, rating);
				getRated(16, rating);
				getRated(17, rating);
				getRated(26, rating);
				getRated(27, rating);
				getRated(28, rating);
				getRated(32, rating);
				getRated(36, rating);
				hasData = true;
			}
		})
	})
	//数据调用
	var data1 = null;

	function getData(id, len, elem, callback1, callback2) {
		$.ajax({
			type: "get",
			url: "http://route.showapi.com/213-4?showapi_appid=49174&showapi_sign=67e1f36ea008490ea96ad4050258e20b&topid=" + id + "&",
			async: true,
			success: function (res) {
				data1 = res.showapi_res_body.pagebean.songlist;
				console.log(data1);
				callback1(data1, len, elem)
			},
			complete: function () {
				callback2();
			}
		});
	}
	getData(5, 3, $(".swiper-slide"), sliders, creatSlider);
	getData(27, 4, $(".radio ul"), newSong, function () {
		return false;
	});
	getData(26, 6, $(".hotList ul"), newSong, function () {
		return false;
	});
	//渲染轮播图
	function sliders(data, len, elem) {
		for (var i = 0; i < len; i++) {
			elem.eq(i).find('.slider').attr('src', data[i].albumpic_big);
			elem.eq(i).find('a').attr({
				data_songid: data[i].songid,
				data_songname: data[i].songname,
				data_singername: data[i].singername,
				data_songimg: data[i].albumpic_small,
				data_songurl: data[i].url
			});
		}
	}
})
//新歌推荐
function newSong(data, len, elem) {
	var result = '';
	for (var i = 0; i < len; i++) {
		result += "<li>";
		result += "<a class='toplay' href='play.html' data_type='0' data_songid=" + data[i].songid + " data_songname=" + data[i].songname + " data_singername=" + data[i].singername + " data_songimg=" + data[i].albumpic_small + " data_songurl=" + data[i].url + ">";
		result += "<img src='" + data[i].albumpic_big + "'/><span class='playBtn'></span></a><h3>" + data[i].songname + "</h3></li>"
	}
	elem.html(result);
}
//排行榜

function getRated(id, callback1) {
	$.ajax({
		type: "get",
		url: "http://route.showapi.com/213-4?showapi_appid=49174&showapi_sign=67e1f36ea008490ea96ad4050258e20b&topid=" + id + "&",
		async: true,
		success: function (res) {
			var data = res.showapi_res_body.pagebean.songlist;
			//				console.log(data);
			var chosed = chose(id);
			callback1(data, chosed, id)
		},
		complete: function () {
			hotHasAjax = true;
		}
	});
}
//渲染模板
function rating(data, classify, id) {
	var result = "";
	result += "<li><a class='top' href='list.html' data_type='0' data_topid=" + id + "><img src='" + data[0].albumpic_big + "'/><span></span></a>";
	result += "<div class='rateRight'>"
	result += "<div class='innerRight'>"
	result += "<h3>巅峰榜_" + classify + "</h3>"
	for (var i = 0; i < 3; i++) {
		result += "<p>" + i + ".<span class='text_name'>" + data[i].songname + "</span>-" + data[i].singername + "</p>"
	}
	result += "</div>"
	result += "</div></li>"
	$(".rating").prepend(result);
}
//排行榜分类
function chose(id) {
	switch (id) {
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
			break;
	}
}