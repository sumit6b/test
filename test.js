(function(){

	var v = "1.7.1";
	if (window.jQuery === undefined || window.jQuery.fn.jquery < v){
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v +"/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && ( !this.readyState || this.readyState == "loaded" || this.readyState == "complete" ) ){
				done = true;
				initMyBookmarklet();
			}
		}
		document.getElementsByTagName("head")[0].appendChild(script)
	} else {
		initMyBookmarklet();
	}

	function initMyBookmarklet(){
		var url = window.location.href;
		$('head').append('<link href="http://localhost:8000'+'/static/css/modal.css" rel="stylesheet" type="text/css" />');
		$('head').append('<link href="http://localhost:8000'+'/static/css/link_banner_model.css" rel="stylesheet" type="text/css" />');


		html = '\
			<div class="fixed-model link" style="display:none;">\
		<div class="model-content">\
			<div class="mod-title">\
				Personalize your link\
			</div>\
			<div class="model-close-btn"></div>\
			<div class="model-inner-content">\
				<div class="mo-inp" style="padding-top: 20px;"><span style="text-transform: uppercase;font-size: 12px;">Edit Text</span> <input type="text" id = "model-input-txt" class=""/ style="margin-left:9px;"><button class="affbtncutm lnbmd" id="codecreate-btn" style="position:relative;left: 4px;">CREATE</button></div>\

				<div id="prev-blk">\
					<div class="lil-title" style="padding: 10px 0px;">\
						Preview\
					</div>\
					<div id="previt">\
					</div>\
				</div>\
				<span class="copyBoxWrpr">\
					<div class="code-box">\
					<div class="lil-title" style="position:relative;margin: 4px 0px;">\
						Paste this code to create your link<div id="copy-btn-lnk" class="affbtncutmMod copyBoxBtn" style="position:relative;left: 324px;top: -5px;">Copy code</div>\
						<div class="copyBoxSuccess" style="display:none;top: -4px;right: 91px;">Copied To Clipboard</div>\
					</div>\
						
						<textarea class="model-code lnkmc copyBox" style="overflow: hidden;" readonly>\
						</textarea>\
					</div>\
				</span>\
				


			</div>\
		</div>\
	</div>\
	<div class="fixed-model banner" style="display:none;">\
		<div class="model-content">\
			<div class="mod-title">\
				Customize your banner\
			</div>\
			<div class="model-close-btn"> </div>\
			<div class="model-inner-content" id="ban-options">\
				<iframe id="banner-preview"  width="120" height="245" scrolling="no" frameborder="0"></iframe>\
				<table style="font-size: 13px;margin-top: 15px;position: relative;top: 5px;margin-bottom: 10px;">\
					<tbody>\
						<tr>\
							<td style="width:100px"><input type="checkbox" value="price" id="price-ban"> Price</td>\
							<td style="width: 208px;">Link Color<input type="text" value="333" class="ban-opin" id="link-color" maxlength="7"></td>\
						</tr>\
						<tr>\
							<td  style="width:100px"><input type="checkbox" value="border" id="border-ban"> Border</td>\
							<td style="width: 208px;">Background Color<input type="text" value="fff" class="ban-opin" id="border-ban" maxlength="7"></td>\
						</tr>\
							<td></td>\
							<td style="width: 208px;">Text Color<input type="text" value="blue" class="ban-opin" id="text-color" maxlength="7"></td>\
						</tr>\
					</tbody>\
				</table>\
				
				<span class="copyBoxWrpr">\
					<div class="lil-title" id="code-meta" style="position: relative;border-top: 1px solid #DEDEDE;padding-top: 20px;margin-bottom: 6px;">\
						Place this code into your website :\
						<div class="copyBoxSuccess" style="display:none;right: 95px;top: 16px;">Copied To Clipboard</div>\
						<div id="copy-btn-Bnr" class="affbtncutmMod copyBoxBtn" style="position: relative;left: 197px;top: -5px;">Copy code</div>\
					</div>\
					<textarea class="model-code bnmc copyBox" id="baner-code" readonly></textarea>\
				</span>\

			</div>\
			<div class="bottomNote">NOTE: Ad blocking agents (eg: Ad block plus) must be disabled to view this banner.</div>\
		</div>\
	</div>\
		'

		$('body').append(html);
	}

})();
