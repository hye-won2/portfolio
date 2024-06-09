$(function () {
  $('#slide').sliderPro({
    width: 1000,
    height: 600,
    arrows: true,
    buttons: false,
    slideDistance: 0,
    waitForLayers: true,
    thumbnailWidth: 200,
    thumbnailHeight: 55,
    thumbnailPointer: true,
    autoplay: true,
    autoScaleLayers: false,
    breakpoints: {
      1000: {
        width: 400,
        height: 565,
        arrows: false,
        thumbnailWidth: 8,
        thumbnailHeight: 8
      }
    }
  });
});