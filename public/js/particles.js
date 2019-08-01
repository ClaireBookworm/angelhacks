document.addEventListener('DOMContentLoaded', () =>
	particlesJS('particles-js', {
		particles: {
			number: {
				value: 38,
				density: {
					enable: true,
					value_area: 236.7442924896818
				}
			},
			color: {
				value: '#fff'
			},
			shape: {
				type: 'circle',
				stroke: {
					width: 0,
					color: '#c4d0eb'
				},
				polygon: {
					nb_sides: 5
				}
			},
			opacity: {
				value: 0.5,
				random: false,
				anim: {
					enable: false,
					speed: 1,
					opacity_min: 0.1,
					sync: false
				}
			},
			size: {
				value: 3,
				random: true,
				anim: {
					enable: false,
					speed: 40,
					size_min: 0.1,
					sync: false
				}
			},
			line_linked: {
				enable: true,
				distance: 150,
				color: '#fff',
				opacity: 0.4,
				width: 1
			},
			move: {
				enable: true,
				speed: 6,
				direction: 'none',
				random: false,
				straight: false,
				out_mode: 'out',
				bounce: false,
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 1200
				}
			}
		},
		interactivity: {
			detect_on: 'window',
			events: {
				onhover: {
					enable: true,
					mode: 'repulse'
				},
				onclick: {
					enable: true,
					mode: 'push'
				},
				resize: true
			},
			modes: {
				grab: {
					distance: 400,
					line_linked: {
						opacity: 1
					}
				},
				bubble: {
					distance: 400,
					size: 40,
					duration: 2,
					opacity: 8,
					speed: 3
				},
				repulse: {
					distance: 200,
					duration: 0.4
				},
				push: {
					particles_nb: 4
				},
				remove: {
					particles_nb: 2
				}
			}
		},
		retina_detect: true
	})
)