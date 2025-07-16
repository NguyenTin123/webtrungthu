// JavaScript Document

$(document).ready(function () {
  var h = $(window).height();
  var w = $(window).width();
  if (w > 750) {
    $('.wrapper, .header').css({ transform: "scale(" + w / 2000 + ")" });
    var iw = $(".wrapper")[0].getBoundingClientRect().width;
    var ih = $(".wrapper")[0].getBoundingClientRect().height;
    $('body').css({ height: ih, width: iw });

  }
  else if (w < 750) {
    $('.wrapper, .header').css({ transform: "scale(" + w / 750 + ")" });
    var iw = $(".wrapper")[0].getBoundingClientRect().width;
    var ih = $(".wrapper")[0].getBoundingClientRect().height;
    $('body').css({ height: ih, width: iw });
  }

  $(window).on('resize', function () {
    var w1 = $(window).width();
    if (w1 > 750) {
      $('.wrapper, .header').css({ transform: "scale(" + w / 2000 + ")" });
      var iw = $(".wrapper")[0].getBoundingClientRect().width;
      var ih = $(".wrapper")[0].getBoundingClientRect().height;
      $('body').css({ height: ih, width: iw });
    }
    var h = $(window).height();
    var w = $(window).width();
    if (w > 750) {
      $('.wrapper, .header').css({ transform: "scale(" + w / 2000 + ")" });
      var iw = $(".wrapper")[0].getBoundingClientRect().width;
      var ih = $(".wrapper")[0].getBoundingClientRect().height;
      $('body').css({ height: ih, width: iw });

    }
    else if (w < 750) {
      $('.wrapper, .header').css({ transform: "scale(" + w / 750 + ")" });
      var iw = $(".wrapper")[0].getBoundingClientRect().width;
      var ih = $(".wrapper")[0].getBoundingClientRect().height;
      $('body').css({ height: ih, width: iw });
    }
  });
});



function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

// --------------------------
// gsap
// --------------------------

/* global ready, gsap, ScrollTrigger*/
ready(() => {
  'use strict';
  gsap.registerPlugin(ScrollTrigger);

  const tlSection1 = gsap.timeline({
    defaults: { autoAlpha: 0 },
  });

  tlSection1
    .from('#header', { autoAlpha: 1, y: '-100%' })    
    .from('#frame1 .art-main', { scale: 0.5, stagger: 0.1, ease: 'back.out(2)' }, '-=0.2')
    .from('#frame1 .text-main', { scale: 0.5, ease: 'back.out(2)' }, '-=0.2')
    .from('#frame2 .frame-info', { y: '1rem' })
    .from('#frame2 .btn-group-motiec', { y: '1rem' })

    .from('#download-sticky', {
      onStart: () => {
        document.getElementById('download-sticky').classList.add('active');
      }
    }, '-=0.2')
    .to('.text-main', { autoAlpha: 1, scale: 1.05, yoyoEase: true, repeat: -1, duration: 1 })
    .to('.art-main', { autoAlpha: 1, y: '.5rem', yoyoEase: true, repeat: -1, duration: 1 });

  tlSection1.delay(.6);


  if (window.innerWidth >= 600) {
    ScrollTrigger.defaults({
      // toggleActions: 'play complete none reverse',
      start: 'top bottom',
      end: '80% bottom',
      scrub: 1,
      // markers: true
    });
    const tlPosition = '-=0.4';

    // frame 2
    gsap.timeline({
      defaults: { autoAlpha: 0 },
      scrollTrigger: { trigger: '#frame2' }
    }).from('#frame2 .title', { y: '6rem' })
	  .from('#frame3 .title', { y: '6rem' })
      .from('#frame3 .list-items', { scale: 0.5, stagger: 0.1, ease: 'back.out(2)' }, tlPosition);


  }

});


var parallax = new Parallax(art1,{
	limitY:0
});