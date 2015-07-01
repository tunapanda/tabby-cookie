jQuery(function($) {
	$(document).ready(function() {
		function getQueryStringParams() {
			var params = {};
			(function() {

				var match,
					pl = /\+/g, // Regex for replacing addition symbol with a space
					search = /([^&=]+)=?([^&]*)/g,
					decode = function(s) {
						return decodeURIComponent(s.replace(pl, " "));
					},
					query = window.location.search.substring(1).replace(/amp;/g, "");

				while (match = search.exec(query))
					params[decode(match[1])] = decode(match[2]);
			})();

			return params;
		}

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

		if (!getQueryStringParams().target) {
			$(".responsive-tabs__list__item").each(function(index, li) {
				if (getCookie("tabby-cookie")==$(li).text())
					li.click();
			});
		}
	});
});