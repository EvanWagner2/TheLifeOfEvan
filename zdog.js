
let isSpinning = true;
// create illo
let illo = new Zdog.Illustration({
    // set canvas with selector
    element: '.zdog-canvas',
    rotate: { x:-Zdog.TAU/16},
    dragRotate: true,
    onDragStart: function(){
      isSpinning = false;
    }
  });
  const distance = 80 / Math.sqrt(2);

  var dot = new Zdog.Shape({
    addTo: illo,
    translate: { y: -distance },
    stroke: 80,
    color: '#636',
  });
  dot.copy({
    translate: { x: -distance },
    color: '#EA0',
  });
  dot.copy({
    translate: {z: distance },
    color: '#C25',
  });
  dot.copy({
    translate: { x: distance },
    color: '#E62',
  });
dot.copy({
  translate: { z: -distance },
  color: '#C25',
});
  dot.copy({
    translate: { y: distance },
  });
  
  // add circle
  
  
  // update & render
  

  function animate() {
    illo.rotate.y += isSpinning ? 0.03 : 0;
    illo.updateRenderGraph();
    requestAnimationFrame( animate );
  }
  
  animate();
  