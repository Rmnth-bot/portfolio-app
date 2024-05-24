import profileImg from "../../img/profile-pic.png"

export const Home = () => {
	return (
		<section id="home" className="home">
			<div className="container w-full min-h-screen">
				<div className="content">
					<div className="main">
						<div className="main__text">
							<h1><span className="text-[#FF003F]">Front-End</span> Developer</h1>
							<p>Hola, soy Reymonth Ardiaca. Un desarrollador apasionado por el mundo del Front-End quien actualmente reside en Santiago, Chile. 📍</p>
							<span>
								<a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/reymonth-ardiaca-lazaro/">
									<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-brand-linkedin">
										<path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
										<path d="M8 11l0 5"></path>
										<path d="M8 8l0 .01"></path>
										<path d="M12 16l0 -5"></path>
										<path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
									</svg>
								</a>
							</span>
						</div>
						<div className="main__img">
							<img src={profileImg} alt="me" />
						</div>
					</div>
					<div className="skills">
						<p>Tech Stack://</p>
						<div className="logos">
							<ul>
								<li>
									<img src="https://skillicons.dev/icons?i=html" alt="skill-icon" />
								</li>
								<li>
									<img src="https://skillicons.dev/icons?i=css" alt="skill-icon" />
								</li>
								<li>
									<img src="https://skillicons.dev/icons?i=js" alt="skill-icon" />
								</li>
								<li>
									<img src="https://skillicons.dev/icons?i=ts" alt="skill-icon" />
								</li>
								<li>
									<img src="https://skillicons.dev/icons?i=react" alt="skill-icon" />
								</li>
								<li>
									<img src="https://skillicons.dev/icons?i=bootstrap" alt="skill-icon" />
								</li>
								<li>
									<img src="https://skillicons.dev/icons?i=tailwind" alt="skill-icon" />
								</li>
								<li>
									<img src="https://skillicons.dev/icons?i=scss" alt="skill-icon" />
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
