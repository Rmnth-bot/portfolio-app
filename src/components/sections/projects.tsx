import eu from "../../img/eu.png"
import listColmena from "../../img/list-colmena.png"
import listCovid from "../../img/list-covid.png"
import sermecoop from "../../img/sermecoop.png"

var projectItems = [
	{
		img: eu,
		content: <>
			<span>Sitio Web <b>Espacio Urbano</b></span>
			<p>Espacio Urbano nos solicito la creación, experiencia de usuario y diseño para el cambio de look and feel de su sitio web. Mejorando y optimizando el posicionamiento y la conversión desde dispositivos móviles.</p>
			<p>Aqui se hicieron labores de:</p>
			<p>
				<ul className="list-disc pl-2">
					<li>AMP</li>
					<li>SEO</li>
					<li>UX/UI</li>
				</ul>
			</p>
			<p>Link al <a target="_blank" href="https://www.espaciourbano.cl/" rel="noreferrer">sitio web</a></p>
		</>
	},
	{
		img: listCovid,
		content: <>
			<span>Contador de Personas <b>COVID-19</b></span>
			<p>Espacio Urbano nos solicito el desarrollo de una plataforma que le permitiera conocer la cantidad de personas que ingresan a sus diferentes Malls de Chile.</p>
			<p>Creamos una aplicación web mobile que les informara cuantas personas habían dentro.</p>
		</>
	},
	{
		img: sermecoop,
		content: <>
			<span>Intranet Corporativa <b>Sermecoop</b></span>
			<p>Sermecoop nos solicito el desarrollo y diseño para su Intranet Corporativa. Uno de los requisitos fundamentales fue hacer una plataforma robusta, pero con un diseño intuitivo y de fácil manipulación.</p>
			<p>En este proyecto fui el encargado de la maquetación del sitio, creación de las hojas de estilos, tanto como para desktop y mobile, junto con componentes extra del sitio como sliders informativos, calendarios, modals, etc. </p>
		</>
	},
	{
		img: listColmena,
		content: <>
			<span>Nuevo Simulador de Planes <b>Colmena</b></span>
			<p>El área de innovación de Colmena en conjunto con la Agencia Modo nos solicito la creación, experiencia de usuario y diseño del nuevo cotizador de planes de Colmena.</p>
			<p>Aqui se hicieron labores de:</p>
			<p>
				<ul className="list-disc pl-2">
					<li>Api Rest</li>
					<li>React</li>
					<li>UX/UI</li>
				</ul>
			</p>
		</>
	},
]

export const Projects = () => {
	return (
		<section id="projects" className="projects">
			<div className="container w-full min-h-screen">
				<div className="content">

					<div className="projects__title">
						<h3>Proyectos</h3>
						<p>Una pequeña muestra de los <b>projectos</b> en los que he participado codo a codo con distintos equipos de trabajo</p>
					</div>

					{
						projectItems.map((item, i) => <>
							<div className="projects__box" key={i}>
								<div className="projects__box__img">
									<img src={item.img} alt="sermecoop" />
								</div>
								<div className="projects__box__content">
									{item.content}
								</div>
							</div>
						</>)
					}

				</div>
			</div>
		</section>
	)
}
