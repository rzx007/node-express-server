$(function() {
	//存储数据
	function saveSession($this) {
		var songid = $this.attr('data_songid');
		var songname = $this.attr('data_songname');
		var singname = $this.attr('data_singername');
		var songimg = $this.attr('data_songimg');
		var songurl = $this.attr('data_songurl');
		sessionStorage.setItem('songname', songname);
		sessionStorage.setItem('singname', singname);
		sessionStorage.setItem('songimg', songimg);
		sessionStorage.setItem('songid', songid);
		sessionStorage.setItem('songurl', songurl);
	}
	$(".swiper-slide").find('a').click(function() {
		var $this = $(this);
		saveSession($this);
	})
	$('body').on('click','.toplay',function(){
		var $this = $(this);
		saveSession($this);
	})
	$('body').on('click','.top',function(){
		var topid = $(this).attr("data_topid");
		sessionStorage.setItem('topid', topid);
	})
})