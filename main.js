import { CSS3DObject } from './libs/three.js-r132/examples/jsm/renderers/CSS3DRenderer.js';
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: './targets.mind',
    });	
	
	const {renderer, cssRenderer, scene, cssScene, camera} = mindarThree;

    const artist1Obj = new CSS3DObject(document.querySelector("#theVid"));
    const artist1Css = mindarThree.addCSSAnchor(0);
    artist1Css.group.add(artist1Obj);
	
	
	
	
	
	
    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      cssRenderer.render(cssScene, camera);
    });
  }
  
  
  

  start();
});