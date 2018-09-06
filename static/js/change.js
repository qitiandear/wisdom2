function tadd(e) {
	$(e).addClass('active');
}

function pen(e) {
	$(e).children(".bi").show();
}

function closepen(e) {
	$(e).children(".bi").hide();
}
var wo = '';

function menuopen(class1) {
	$(".chiocebox").show();
	wo = $("." + class1 + "")
	return wo;
}

function menuclose() {
	$(".chiocebox").hide();
}

function getcont(w) {
	$(".menubox ul").children('li').removeClass('liiact');
	$(".menubox ul li").children('i').removeClass('iact');
	$(w).addClass('liiact');
	$(w).children("i").addClass('iact');

}

function ensure() {
	var p = $(".liiact").html();
	wo.html(p);
	$(".chiocebox").hide();
}

function rotate() {
	$(".fright li").eq(Math.floor(Math.random() * 7)).css({
		"transition": "transform 1s",
		"transform": "rotateX(360deg)"
	});
}

function opt(w) {
	var str = $(w).html();
	$(".link li").after("<li>" + str + "</li>")
}

function sact(w) {
	var w = $(w);
	w.children('i').css({
		'color': '#0068b7',
		'background': '#fff',
		'padding': '4px 10px',
		'border-radius': '50%'
	});
	w.children('.action').show();
}

function hact(w) {
	var w = $(w);
	w.children('i').css({
		'color': '#999',
		'background': '#fff',
		'padding': '0',
		'border-radius': '0'
	});
	w.children('.action').hide();
}

function secheck(w, class1) {
	var t = $(w).children('input').prop('checked');
	var obj = $("." + class1 + "");
	if (t) {
		obj.children('input').prop("checked", true);
	} else {
		obj.children('input').prop("checked", false);
	}
}

function sedown() {
	var h = $(".sebox").height();
	if (h == 30) {
		$(".sebox").height(70);
		$('.down').css('margin-top', '30px');
		$(".sebox i").attr('class', 'fa fa-angle-double-up down');
	} else {
		$(".sebox").height(30);
		$('.down').css('margin-top', '8px');
		$(".sebox i").attr('class', 'fa fa-angle-double-down down');
	}
}

function popclose(c1) {
	var c1 = $("." + c1 + "");
	c1.hide();
}

function popopen(c1) {
	var c1 = $("." + c1 + "");
	c1.show();
}

function query(k) {
	var c = $(k);
	c.addClass("nact").siblings().removeClass("nact");
}

function queryIndex() {
	$("#index").siblings().removeClass("nact");
}