<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
		const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
		renderer.setClearColor(0x000000, 0);

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
		camera.position.z = 7;

		const geometry = new THREE.IcosahedronGeometry(1.38, 3);
		const uniforms = {
			uTime: { value: 0 },
			uPointer: { value: new THREE.Vector2(0, 0) }
		};
		const material = new THREE.ShaderMaterial({
			transparent: true,
			uniforms,
			vertexShader: `
				uniform float uTime;
				uniform vec2 uPointer;
				varying vec3 vNormal;
				varying vec3 vWorld;
				void main() {
					float wave = sin(position.y * 4.2 + uTime * 0.65) * 0.08;
					wave += sin(position.x * 5.1 - uTime * 0.42) * 0.045;
					vec3 displaced = position + normal * wave;
					displaced.x += uPointer.x * 0.08;
					displaced.y += uPointer.y * 0.05;
					vec4 world = modelMatrix * vec4(displaced, 1.0);
					vWorld = world.xyz;
					vNormal = normalize(normalMatrix * normal);
					gl_Position = projectionMatrix * viewMatrix * world;
				}
			`,
			fragmentShader: `
				precision highp float;
				varying vec3 vNormal;
				varying vec3 vWorld;
				void main() {
					vec3 viewDir = normalize(cameraPosition - vWorld);
					float fresnel = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 2.4);
					float light = dot(vNormal, normalize(vec3(-0.4, 0.8, 1.0))) * 0.5 + 0.5;
					vec3 sky = vec3(0.40, 0.89, 0.98);
					vec3 cobalt = vec3(0.01, 0.25, 0.60);
					vec3 color = mix(cobalt, sky, light) + fresnel * vec3(0.72, 0.95, 1.0);
					gl_FragColor = vec4(color, 0.48 + fresnel * 0.42);
				}
			`,
			depthWrite: false
		});
		const subject = new THREE.Mesh(geometry, material);
		scene.add(subject);

		const setComposition = () => {
			const mobile = window.innerWidth < 700;
			subject.position.set(mobile ? 1.1 : 2.35, mobile ? -1.5 : -1.35, 0);
			subject.scale.setScalar(mobile ? 0.72 : 0.84);
			const width = Math.max(canvas.clientWidth, 1);
			const height = Math.max(canvas.clientHeight, 1);
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			renderer.setSize(width, height, false);
		};

		const pointerTarget = new THREE.Vector2();
		const onPointer = (event: PointerEvent) => {
			pointerTarget.set(
				event.clientX / window.innerWidth - 0.5,
				0.5 - event.clientY / window.innerHeight
			);
		};
		let frame = 0;
		let inViewport = true;
		let running = false;
		const clock = new THREE.Clock();
		const render = () => {
			running = true;
			uniforms.uTime.value = reducedMotion ? 0 : clock.getElapsedTime();
			uniforms.uPointer.value.lerp(pointerTarget, 0.035);
			subject.rotation.y += reducedMotion ? 0 : 0.0015;
			subject.rotation.x = uniforms.uPointer.value.y * 0.18;
			subject.rotation.z = uniforms.uPointer.value.x * -0.12;
			renderer.render(scene, camera);
			if (!reducedMotion && !document.hidden && inViewport) frame = requestAnimationFrame(render);
			else running = false;
		};
		const start = () => {
			if (!running && inViewport && !document.hidden) render();
		};
		const onVisibility = () => {
			cancelAnimationFrame(frame);
			running = false;
			if (!reducedMotion) start();
		};
		const viewportObserver = new IntersectionObserver(([entry]) => {
			inViewport = entry.isIntersecting;
			if (!inViewport) {
				cancelAnimationFrame(frame);
				running = false;
			} else if (!reducedMotion) start();
		});

		setComposition();
		render();
		viewportObserver.observe(canvas);
		window.addEventListener('resize', setComposition);
		if (!coarsePointer) window.addEventListener('pointermove', onPointer, { passive: true });
		document.addEventListener('visibilitychange', onVisibility);

		return () => {
			cancelAnimationFrame(frame);
			viewportObserver.disconnect();
			window.removeEventListener('resize', setComposition);
			window.removeEventListener('pointermove', onPointer);
			document.removeEventListener('visibilitychange', onVisibility);
			geometry.dispose();
			material.dispose();
			renderer.dispose();
		};
	});
</script>

<canvas bind:this={canvas} class="shader" aria-hidden="true"></canvas>
