//		console.log(sessionStorage.getItem('songurl'))
		$(function() { //适配主流移动端表现
			if(window.devicePixelRatio == 2 || window.devicePixelRatio == 3) {
				$('html').css({
					"font-size": "10px"
				});
			} else {
				$('html').css({
					"font-size": "20px"
				});
			}
			//获取播放总时长
			$('audio')[0].addEventListener("canplay", function() {
				this.play();
				$('#playBtn').removeClass('changeBtn');
				var times = Math.floor(this.duration);
//				alert(times);
				var mins = parseInt(times / 60);
				var sec = times % 60;
				$('.totaltime').html(mins + ":" + sec)
			})
			//获取播放时间
			$('audio')[0].ontimeupdate = function() {
				var times = this.duration;
				var nowtime = this.currentTime;
				var  Nowpercents= (1-nowtime/times)*100;
				$('.progress__playing').css('right',Nowpercents+"%");
				var mins = 0;
				var sec = 0;
				if(nowtime % 60 < 10) {
					sec = "0" + parseInt(nowtime % 60);
				} else {
					sec = parseInt(nowtime % 60)
				}
				if(nowtime / 60 < 10) {
					mins = "0" + parseInt(nowtime / 60);
				} else {
					mins = parseInt(nowtime / 60);
				}
				$('.nowtime').html(mins + ":" + sec)
			}
			$('audio').attr('src', sessionStorage.getItem('songurl'));
			$('.blur').css("background-image", "url(" + sessionStorage.getItem('songimg') + ")");
			$('.thumil img').attr('src', sessionStorage.getItem('songimg'));
			$('.singer h3').html(sessionStorage.getItem('songname'));
			$('.singer p').html(sessionStorage.getItem('singname'));
			$('#playBtn').click(function() {
				if($('audio').get(0).paused) {
					$('audio').get(0).play();
					$(this).removeClass('changeBtn');
				} else {
					console.log(1)
					$('audio').get(0).pause();
					$(this).addClass('changeBtn');
				}
			})
			//播放列表控制
			$(".operate--left").click(function() {
				$('.actionsheet').toggleClass('show');
				$('.controls').css('display', 'none');
				$('.main').addClass('mainwrap-up');
			})
			$('.closed').click(function() {
				$('.actionsheet').removeClass('show');
				$('.controls').css('display', 'block');
				$('.main').removeClass('mainwrap-up');
			})
			//获取歌曲列表
			function renderList() {

			}
			//加载歌词
			function lyric() {
				var id = sessionStorage.getItem('songid');
				$.ajax({
					type: "get",
					url: "http://route.showapi.com/213-2?showapi_appid=49174&showapi_sign=67e1f36ea008490ea96ad4050258e20b&musicid=" + id + "&",
					async: true,
					success: function(res) {
						var result = '';
						//						console.log(res.showapi_res_body.lyric_txt);
						var lyArr = $.trim(res.showapi_res_body.lyric_txt).split('    ');
//						console.log(lyArr)
						for(var i = 0; i < lyArr.length; i++) {
							result += "<p>" + lyArr[i] + "</p>"
						}
						$("#lyric_list").html(result);
					}
				});
			}
			lyric();
		})