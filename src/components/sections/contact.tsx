export const Contact = () => {
	return (
		<section id="contact" className="contact">
			<div className="container w-full">
				<div className="content">
					<div className="contact__content">
						<div className="contact__title">
							<h3>Contacto</h3>
							<p>Conozcámonos! Te invito a que nos comuniquemos por alguna de mis vias de contacto! 👇</p>
						</div>
						<div className="contact__icons">
							<div className="contact__icons__box">
								<span>
									<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-mail">
										<path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
										<path d="M3 7l9 6l9 -6"></path>
									</svg>
								</span>
								<div className="contact__info">
									<h3>Mail</h3>
									<a href="mailto:ardiaca.reymonth@gmail.com">ardiaca.reymonth@gmail.com</a>
								</div>
							</div>
							<div className="contact__icons__box">
								<span>
									<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-phone">
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
									</svg>
								</span>
								<div className="contact__info">
									<h3>Teléfono de contacto</h3>
									<a href="tel:+56971904978">+56 971904978</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
