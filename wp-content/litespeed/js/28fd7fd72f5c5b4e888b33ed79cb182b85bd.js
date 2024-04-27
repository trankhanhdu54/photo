(function($){"use strict";$(document).ready(function(){var homeSlider=new Swiper('.slider-container',{grabCursor:!0,direction:'horizontal',loop:!0,pagination:{el:'.swiper-pagination',type:'fraction',},navigation:{nextEl:'.swiper-mt-button-next',prevEl:'.swiper-mt-button-prev',},effect:'fade',fadeEffect:{crossFade:!0},speed:1000,autoplay:{delay:6000,disableOnInteraction:!1,},});var gallerySliderv1=new Swiper('.gallery-slider-v1',{grabCursor:!0,direction:'horizontal',loop:!0,navigation:{nextEl:'.swiper-mt-button-next',prevEl:'.swiper-mt-button-prev',},slidesPerView:"auto",centeredSlides:!0,spaceBetween:10,loopAdditionalSlides:2,breakpoints:{768:{spaceBetween:10,},1024:{spaceBetween:10,},1500:{spaceBetween:30,},},effect:'slide',speed:1000,autoplay:{delay:6000,disableOnInteraction:!1,},});var portoSlider=new Swiper('.portfolio-slider-holder',{grabCursor:!0,direction:'horizontal',loop:!0,navigation:{nextEl:'.swiper-mt-button-next',prevEl:'.swiper-mt-button-prev',},slidesPerView:1,spaceBetween:10,loopAdditionalSlides:2,breakpoints:{350:{slidesPerView:1,spaceBetween:10,},1024:{slidesPerView:2,spaceBetween:10,},1500:{slidesPerView:3,spaceBetween:30,},},effect:'slide',speed:1000,autoplay:{delay:6000,disableOnInteraction:!1,},});var galleryThumb=new Swiper(".gallery-slider-thumb-v2",{loop:!0,spaceBetween:5,slidesPerView:10,freeMode:!0,watchSlidesProgress:!0,breakpoints:{320:{slidesPerView:3,spaceBetween:3},767:{slidesPerView:5,spaceBetween:3},1024:{slidesPerView:10,spaceBetween:5}},});var galleryv2Swiper=new Swiper('.gallery-slider-v2',{direction:'horizontal',loop:!0,slidesPerView:1,autoHeight:!0,navigation:{nextEl:'.swiper-mt-button-next',prevEl:'.swiper-mt-button-prev',},effect:'fade',fadeEffect:{crossFade:!0},speed:1000,autoplay:{delay:6000,disableOnInteraction:!1,},thumbs:{swiper:galleryThumb,},})});$('.nav-button').on('click',function(e){e.preventDefault();$('.mobile-menu-holder, .menu-mask').addClass('is-active');$('body').addClass('has-active-menu')});$('.exit-mobile, .menu-mask').on('click',function(e){e.preventDefault();$('.mobile-menu-holder, .menu-mask').removeClass('is-active');$('body').removeClass('has-active-menu')});$('.menu-mobile > li.menu-item-has-children > a').on('click',function(e){e.preventDefault();e.stopPropagation();if($(this).parent().hasClass('menu-open'))
$(this).parent().removeClass('menu-open');else{$(this).parent().addClass('menu-open')}});$(".menu-nav li").on('mouseenter mouseleave',function(e){if($('ul',this).length){var elm=$('.sub-menu',this);var off=elm.offset();var l=off.left;var w=elm.width();var docW=$(window).width();var isEntirelyVisible=(l+w<=docW);if(!isEntirelyVisible){$(this).addClass('edge')}else{$(this).removeClass('edge')}}});$(window).on('load',function(){var blogItems=$('.layout-masonry');var portfolioItems=$('.portfolio-layout-masonry');var portfolioItems2=$('.portfolio-layout-masonry2');var portfolioItems4=$('.grid-v4-masonry');blogItems.isotope({itemSelector:'.blog-item-masonry',layoutMode:'masonry',});portfolioItems.isotope({itemSelector:'.item-portfolio',layoutMode:'masonry',});portfolioItems2.isotope({itemSelector:'.grid-item-style',layoutMode:'fitRows',});portfolioItems4.isotope({itemSelector:'.grid-item-v4',percentPosition:!0,layoutMode:'masonry',masonry:{columnWidth:'.grid-item-v4-init'}});if($('.portfolio-filter a').length){$('.portfolio-filter a').on('click',function(){$('.portfolio-filter .current').removeClass('current');$(this).addClass('current');var selector=$(this).attr('data-filter');portfolioItems.isotope({filter:selector});portfolioItems2.isotope({filter:selector});return!1})}});$('.item-metro-holder').on('mousemove',function(e){var relX=e.pageX-$(this).offset().left;var relY=e.pageY-$(this).offset().top;$(this).children('.metro-text-holder').addClass('visible');$(this).children('.metro-text-holder').css({'left':relX,'top':relY})}).mouseleave(function(){$(this).children('.metro-text-holder').removeClass('visible')});$('.portfolio-hover-text-item').on('mousemove',function(e){var relX=e.pageX-$(this).offset().left;var relY=e.pageY-$(this).offset().top;$(this).addClass('visible');$(this).children('.hover-text-item-image').css({'left':relX,'top':relY})}).mouseleave(function(){$(this).removeClass('visible')});if($('.portfolio-hover-text-item-v2').length>0){$('.portfolio-hover-text-item-v2').on('mouseover',function(e){var index=$(this).index();if(!$(this).hasClass('visible')){$('.portfolio-hover-text-item-v2').removeClass('visible');$(this).addClass('visible')}
if(!$('.hover-text-item-image-v2').eq(index).hasClass('visible')){$('.hover-text-item-image-v2').removeClass('visible');$('.hover-text-item-image-v2').eq(index).addClass('visible')}})}
if($('.gallery-post a').length){$('.gallery-post a').simpleLightbox({heightRatio:1,widthRatio:0.8})}
if($('.blocks-gallery-item a').length){$('.blocks-gallery-item a').simpleLightbox({heightRatio:1,widthRatio:0.8})}
$(".scrollup").hide();$(window).on('scroll',function(){if($(this).scrollTop()>400){$('.scrollup').fadeIn()}else{$('.scrollup').fadeOut()}});$("a.scrolltop[href^='#']").on('click',function(e){e.preventDefault();var hash=this.hash;$('html, body').stop().animate({scrollTop:0},1000,'easeOutExpo')})})(jQuery)
;