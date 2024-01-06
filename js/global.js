/**
 * 鍏叡椤甸潰JS鎵ц锛岄渶瑕佸姞宸� artdialog.css
**/
/**
 * 鎵撳瓧鐗规晥
**/
function daziji(dazijiDiv, dazijiTime) {
    var text1 = $(dazijiDiv).text(),
        text2 = text1,
        lentext = text2.length,
        textArray = text2.split("");
    $(dazijiDiv).empty();
    for (i = 0; i < text2.length; i++) {
        $(dazijiDiv).append('<span style="display:none">' + textArray[i] + '</span>');
    }
    dazijiShow(dazijiDiv, lentext, dazijiTime);
}
var dazijiN = 0;

function dazijiShow(d, e, f) {
    $(d).children("span").eq(dazijiN).show().css({
        color: '#' + Math.floor(Math.random() * 16777215).toString(16)
    });
    if (dazijiN < e) {
        dazijiN++;
        setTimeout("dazijiShow('" + d + "'," + e + "," + f + ")", f)
    } else {
        dazijiN = 0;
        setTimeout("dazijiShow('" + d + "'," + e + "," + f + ")", f);
    };

}
function top_search()
{
	var title = $("#top-keywords").val();
	if(!title){
		$.dialog.alert('璇疯緭鍏ヨ鎼滅储鐨勫叧閿瓧');
		return false;
	}
	return true;
}

// 閫€鍑�
function logout(t)
{
	var q = confirm("鎮ㄥソ锛屻€�"+t+"銆戯紝纭畾瑕侀€€鍑哄悧锛�");
	if(q == '0')
	{
		return false;
	}
	$.phpok.go(get_url('logout'));
}



;(function($){

	/**
	 * 鍠勫＋鐩稿叧鎿嶄綔
	**/
	$.user = {
		login: function(title){
			if(!title || title == 'undefined'){
				title = p_lang('鍠勫＋鐧诲綍');
			}
			var email = $("#email").val();
			var mobile = $("#mobile").val();
			var url = get_url('login','open');
			if(email){
				url += "&email="+$.str.encode(email);
			}
			if(mobile){
				url += "&mobile="+$.str.encode(mobile);
			}
			$.dialog.open(url,{
				'title':title,
				'lock':true,
				'width':'300px',
				'height':'180px',
				'ok':function(){
					var iframe = this.iframe.contentWindow;
					if (!iframe.document.body) {
						alert('iframe杩樻病鍔犺浇瀹屾瘯鍛�');
						return false;
					};
					iframe.save();
					return false;
				},
				'okVal':p_lang('鍠勫＋鐧诲綍'),
				'cancel':true
			});
		},
		register:function()
		{
			//
		},
		logout: function(title){
			$.dialog.confirm('鎮ㄥソ锛�<span class="red">'+title+'</span>锛屾偍纭畾瑕侀€€鍑哄悧锛�',function(){
				$.phpok.go(get_url('logout'));
			});
		}
	};

	/**
	 * 璇勮鐩稿叧鎿嶄綔
	**/
	$.comment = {
		post:function()
		{
			$("#comment-post").ajaxSubmit({
				'url':api_url('comment','save'),
				'type':'post',
				'dataType':'json',
				'success':function(rs){
					if(rs.status){
						$.dialog.alert('鎰熻阿鎮ㄦ彁浜ょ殑璇勮',function(){
							$.phpok.reload();
						},'succeed');
						return true;
					}
					$.dialog.alert(rs.info);
					return false;
				}
			});
			return false;
		}
	};

	/**
	 * 鍦板潃钖勫鍒犳敼绠＄悊
	**/
	$.address = {
		add:function()
		{
			var width = '500px',height = '500px';
			if($(window).width()<1024){
				width = '90%';
				height = '90%';
			}
			var url = get_url('usercp','address_setting');
			$.dialog.open(url,{
				'title':p_lang('娣诲姞鏂板湴鍧€'),
				'lock':true,
				'width':width,
				'height':height,
				'ok':function(){
					var iframe = this.iframe.contentWindow;
					if (!iframe.document.body) {
						alert('iframe杩樻病鍔犺浇瀹屾瘯鍛�');
						return false;
					};
					iframe.$.address.save();
					return false;
				},
				'okVal':p_lang('鎻愪氦淇濆瓨'),
				'cancel':true
			})
		},

		edit:function(id)
		{
			var width = '500px',height = '500px';
			if($(window).width()<1024){
				width = '90%';
				height = '90%';
			}
			var url = get_url('usercp','address_setting','id='+id);
			$.dialog.open(url,{
				'title':p_lang('缂栬緫鍦板潃 {id}',"#"+id),
				'lock':true,
				'width':width,
				'height':height,
				'ok':function(){
					var iframe = this.iframe.contentWindow;
					if (!iframe.document.body) {
						alert('iframe杩樻病鍔犺浇瀹屾瘯鍛�');
						return false;
					};
					iframe.$.address.save(id);
					return false;
				},
				'okVal':'淇濆瓨鏁版嵁',
				'cancel':true
			});
		},

		save:function(id)
		{
			var url = api_url('address','save');
			var tip = p_lang('鍦板潃淇℃伅娣诲姞鎴愬姛');
			if(id && id != 'undefined'){
				tip = p_lang('鍦板潃淇℃伅淇敼鎴愬姛');
				url += "&id="+id;
			}
			$("#setsubmit").ajaxSubmit({
				'url':url,
				'type':'post',
				'dataType':'json',
				'success':function(rs){
					if(rs.status){
						$.dialog.tips(tip,function(){
							top.$.phpok.reload();
						}).lock();
						return true;
					}
					$.dialog.alert(rs.info);
					return false;
				}
			});
			return false;
		},

		del:function(id)
		{
			$.dialog.confirm(p_lang('纭畾瑕佸垹闄よ繖涓湴鍧€鍚楋紵鍦板潃ID #{id}',id),function(){
				var url = api_url('address','delete','id='+id);
				$.phpok.json(url,function(rs){
					if(!rs.status){
						$.dialog.alert(rs.info,true,'error');
						return false;
					}
					$.dialog.tips(p_lang('鍦板潃鍒犻櫎鎴愬姛'),function(){
						$.phpok.reload();
					}).lock().time(1);
					return false;
				})
			});
		},
		set_default:function(id)
		{
			$.dialog.confirm(p_lang('纭畾瑕佽缃繖涓湴鍧€涓洪粯璁ゅ湴鍧€鍚楋紵鍦板潃ID {id}',"#"+id),function(){
				var url = api_url('address','default','id='+id);
				$.phpok.json(url,function(rs){
					if(!rs.status){
						$.dialog.alert(rs.info);
						return false;
					}
					$.dialog.tips(p_lang('宸茶缃簡榛樿鍦板潃'),function(){
						$.phpok.reload();
					}).lock().time(1);
				})
			});
		},
		address_select:function(id)
		{
			//
		}
	}
})(jQuery);


$(document).ready(function(){
    //杩斿洖椤堕儴
    if ($("meta[name=toTop]").attr("content") == "true") {
    	$("<div id='toTop' class='toTop'></div>").appendTo('body');
    	$("#toTop").css({
    		width: '45px',
    		height: '55px',
    		bottom: '49px',
    		right: '2px',
    		position: 'fixed',
    		cursor: 'pointer',
    		zIndex: '999999'
    	});
    	if ($(this).scrollTop() == 0) {
    		$("#toTop").hide();
    	}
    	$(window).scroll(function(event) {
    		if ($(this).scrollTop() == 0) {
    			$("#toTop").hide();
    		}
    		if ($(this).scrollTop() != 0) {
    			$("#toTop").show();
    		}
    	});
    	$("#toTop").click(function(event) {
    		$("html,body").animate({
    			scrollTop: "0px"
    		}, 666)
    	});
    }

  
	if($("#comment-post").length > 0){
	    //鎻愪氦璇勮
	    $("#comment-post").submit(function(){
			$.comment.post();
			return false;
		});
		$(document).keypress(function(e){
			if(e.ctrlKey && e.which == 13 || e.which == 10) {
				$.comment.post();
				return false;
			}
		});
	}
});