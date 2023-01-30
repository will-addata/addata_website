

/***************************************************
prettyPhoto
***************************************************/

jQuery(document).ready(function () {
    jQuery("a[rel^='prettyPhoto']").prettyPhoto({ 
	animation_speed: 'normal', 
	theme: 'light_square', 
	slideshow: 3000, 
	autoplay_slideshow: false, 
	social_tools: false 
	});

    var topMain=$("#about-section").height()+50;        //是头部的高度加头部与nav导航之间的距离
    var nav=$("#main-nav");
    $(window).scroll(function(){
        if ($(window).scrollTop()>topMain){     //如果滚动条顶部的距离大于topMain则就nav导航就添加类.nav_scroll，否则就移除
            nav.removeClass("hidden-desktop");
        }
        else
        {
            nav.addClass("hidden-desktop");
        }
    });

});

/***************************************************
responsive menu
***************************************************/

jQuery(function (jQuery) {
    jQuery("#main-nav").append("<select/>");
    jQuery("<option />", {
        "selected": "selected",
        "value": "",
        "text": "Choose section"
    }).appendTo("#main-nav select");
    //new dropdown menu
    jQuery("#main-nav a").each(function () {
        var el = jQuery(this);
        var perfix = '';
        switch (el.parents().length) {
            case (11):
                perfix = '-';
                break;
            case (13):
                perfix = '--';
                break;
            default:
                perfix = '';
                break;

        }
        jQuery("<option />", {
            "value": el.attr("href"),
            "text": perfix + el.text()
        }).appendTo("#main-nav select");
    });

    jQuery('#main-nav select').change(function () {

        window.location.href = this.value;

    });
});



