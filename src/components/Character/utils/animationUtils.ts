import * as THREE from "three";
import { GLTF } from "three-stdlib";

const setAnimations = (gltf: GLTF) => {
  let character = gltf.scene;
  let mixer = new THREE.AnimationMixer(character);

  if (gltf.animations && gltf.animations.length > 0) {
    // Play intro animation if available
    const introClip = gltf.animations.find(
      (clip) => clip.name === "introAnimation"
    );
    if (introClip) {
      const introAction = mixer.clipAction(introClip);
      introAction.setLoop(THREE.LoopOnce, 1);
      introAction.clampWhenFinished = true;
      introAction.play();
    }

    // Play any available animations
    const clipNames = ["key1", "key2", "key5", "key6"];
    clipNames.forEach((name) => {
      const clip = THREE.AnimationClip.findByName(gltf.animations, name);
      if (clip) {
        const action = mixer.clipAction(clip);
        action.play();
        action.timeScale = 1.2;
      }
    });

    // Typing animation
    const typingClip = THREE.AnimationClip.findByName(gltf.animations, "typing");
    if (typingClip) {
      const typingAction = mixer.clipAction(typingClip);
      typingAction.enabled = true;
      typingAction.play();
      typingAction.timeScale = 1.2;
    }
  }

  function startIntro() {
    if (!gltf.animations || gltf.animations.length === 0) return;

    const introClip = gltf.animations.find(
      (clip) => clip.name === "introAnimation"
    );
    if (introClip) {
      const introAction = mixer.clipAction(introClip);
      introAction.clampWhenFinished = true;
      introAction.reset().play();
    }

    setTimeout(() => {
      const blink = gltf.animations.find((clip) => clip.name === "Blink");
      if (blink) {
        mixer.clipAction(blink).play().fadeIn(0.5);
      }
    }, 2500);
  }

  function hover(_gltf: GLTF, hoverDiv: HTMLDivElement) {
    if (!hoverDiv) return;
    // Hover effects only work with models that have eyebrow animations
    // Avaturn models don't have these, so this is a no-op
    return () => {};
  }

  return { mixer, startIntro, hover };
};

export default setAnimations;
