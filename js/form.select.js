/**
 * 涓嬫媺鎿嶄綔
**/
;(function($){
	$.phpok_form_select = {

		/**
		 * 涓嬫媺鑿滃崟鍙樺寲鍚庢墽琛岀殑JS
		 * @鍙傛暟 groupid 閫夐」缁処D
		 * @鍙傛暟 identifier 鍙橀噺鏍囪瘑
		 * @鍙傛暟 val 閫変腑鐨勫€�
		**/
		change:function(groupid,identifier,val,type)
		{
			var ext = "group_id="+groupid+"&identifier="+identifier;
			if(val){
				ext += "&val="+$.str.encode(val);
			}
			var url = api_url('opt','index',ext);
			if(type && type == 'cate'){
				url = api_url('opt','cate',ext);
			}
			$.phpok.ajax(url,function(data){
				$("#"+identifier+"_html").html(data);
			})
		}
	}
})(jQuery);