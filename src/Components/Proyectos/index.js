import spotify from '../../img/spotify.png';
import ecommerce from '../../img/ecommerce.png';
import spotify2 from '../../img/spotify_II.png';
import netflix from '../../img/netflix.png';
import hiramgomez from '../../img/hiramgomez.png';

const Proyectos = () => {
    return (
        <>
            <article className="proyectos">
                <div className="proyectos-contenido">
                    <h2 className='proyectos-titulo'>PROYECTOS</h2>
                    <div className="proyectos-grid">
                        <div className="proyectos-card">
                            <div className='proyectos-card-img'>
                                <img className='proyectos-img' src={ecommerce} alt="Ecommerce"/>
                            </div>
                            <div className='proyectos-card-titulo'>
                                <h3>E-Commerce</h3>
                            </div>
                            <div className='proyectos-card-descripcion'>
                                <p>Aplicación realizada con HTML, para los estilos se utiliza el pre-procesador de CSS SASS, se utiliza JQuery para la manipulación del DOM, se suben los repositorios a github, se instala el paquete gh-pages, se modifica el archivo JSON, se guardan los cambios en los repositorios de github, se realiza el deploy de la aplicación y se pone en producción el proyecto, mediante github pages. Falta realizar algunos ajustes en la parte CSS para la que la aplicación sea totalmente responsiva.</p>
                            </div>
                            <div className='proyectos-card-link'>
                                <a target='_blank' href='https://arnulfopinedo.github.io/EBAC-EcommerceJQuery/'>Ver proyecto</a>
                            </div>
                        </div>
                        <div className="proyectos-card">
                            <div className='proyectos-card-img'>
                                <img className='proyectos-img' src={spotify} alt="Spotify"/>
                            </div>
                            <div className='proyectos-card-titulo'>
                                <h3>Spotity I</h3>
                            </div>
                            <div className='proyectos-card-descripcion'>
                                <p>Aplicación realizada en React, la cuál utiliza el routing para administrar las rutas de navegación, para los estilos se utiliza el pre-procesador de CSS SASS, se utiliza axios para realizar solicitudes al endpoint de "theaudiodb.com", así mismo se suben los repositorios a github, se instala el paquete gh-pages, se modifica el archivo JSON, se guardan los cambios en los repositorios de github, se realiza el deploy de la aplicación y se pone en producción el proyecto, mediante github pages. Falta realizar algunos ajustes en la parte CSS para la que la aplicación sea totalmente responsiva. Nota.- Esta es una practica que estoy realizando, todavía le falta programación a la aplicación por lo cuál algunas cosas no se van a ver 100% funcionales.</p>
                            </div>
                            <div className='proyectos-card-link'>
                                <a target='_blank' href='https://arnulfopinedo.github.io/spotify/'>Ver proyecto</a>
                            </div>
                        </div>
                        <div className="proyectos-card">
                            <div className='proyectos-card-img'>
                                <img className='proyectos-img' src={spotify2} alt="Spotify"/>
                            </div>
                            <div className='proyectos-card-titulo'>
                                <h3>Spotity II</h3>
                            </div>
                            <div className='proyectos-card-descripcion'>
                                <p>Aplicación realizada con HTML, para los estilos se utiliza el pre-procesador de CSS SASS, se suben los repositorios a github, se instala el paquete gh-pages, se modifica el archivo JSON, se guardan los cambios en los repositorios de github, se realiza el deploy de la aplicación y se pone en producción el proyecto, mediante github pages. Falta realizar algunos ajustes en la parte CSS para la que la aplicación sea totalmente responsiva.</p>
                            </div>
                            <div className='proyectos-card-link'>
                                <a target='_blank' href='https://arnulfopinedo.github.io/EBAC-Practica10/'>Ver proyecto</a>
                            </div>
                        </div>
                        <div className="proyectos-card">
                            <div className='proyectos-card-img'>
                                <img className='proyectos-img' src={netflix} alt="Netflix"/>
                            </div>
                            <div className='proyectos-card-titulo'>
                                <h3>Netflix</h3>
                            </div>
                            <div className='proyectos-card-descripcion'>
                                <p>Aplicación realizada en HTML, para los estilos se utiliza el pre-procesador de CSS SASS, se utiliza axios para realizar solicitudes al endpoint de "https://api.tvmaze.com", así mismo se suben los repositorios a github, se instala el paquete gh-pages, se modifica el archivo JSON, se guardan los cambios en los repositorios de github, se realiza el deploy de la aplicación y se pone en producción el proyecto, mediante github pages.</p>
                            </div>
                            <div className='proyectos-card-link'>
                                <a target='_blank' href='https://arnulfopinedo.github.io/EBAC-Practica24/'>Ver proyecto</a>
                            </div>
                        </div>
                        <div className="proyectos-card">
                            <div className='proyectos-card-img'>
                                <img className='proyectos-img' src={hiramgomez} alt="Hiram Gómez"/>
                            </div>
                            <div className='proyectos-card-titulo'>
                                <h3>Hiram Gómez</h3>
                            </div>
                            <div className='proyectos-card-descripcion'>
                                <p>Aplicación realizada en Wordpress, se realiza la programación de la aplicación, se adquiere nombre del dominio y hosting para poner en producción la aplicación.</p>
                            </div>
                            <div className='proyectos-card-link'>
                                <a target='_blank' href='https://hiramgomez.com.mx/'>Ver proyecto</a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <br/><hr/>
        </>
    )
}

export default Proyectos;