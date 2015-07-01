jQuery(function($) {
	$(document).ready(function() {
		function setCookie(key, value) {
			var expires = new Date();
			expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
			document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
		}

		function getCookie(key) {
			var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
			return keyValue ? keyValue[2] : null;
		}

		$(".responsive-tabs__list__item").click(function() {
			setCookie("tabby-cookie",$(this).text());
		});

		$(".responsive-tabs__list__item").each(function(index, li) {
			if (getCookie("tabby-cookie")==$(li).text())
				li.click();
		});
	});
});