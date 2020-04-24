import {
  homeHeader,
  profile,
  postHome,
  postProfile,
}
  from './templateHomeProfile.js';

export default () => {
  const headerHome = `<input type="checkbox" id="btnMenu">
  <label for="btnMenu">&#9776;</label>
  <h1 class="coderPlace">&lt;CoderPlace/&gt;</h1>
  <nav class="menu">
    <section class="separator">
      <section>
        <div class="items userLogged">
          <img src="./img/user.png" alt="Profile" class="userImage">
          <span class="userName">Nombre y Apellido </span>
        </div>
        <div class="items itemsHover">${(/profile/.test(window.location.hash)) ? homeHeader : profile}</div>
      </section>
      <div class="main-title">
        <h1 class="coderPlaceDesktop">&lt;CoderPlace/&gt;</h1>
      </div>
      <div class="items itemsHover">
        <img src="./img/log-out.png" alt="Log Out" class="icons-cp">
        <span><a href="./index.html" class="salir">Cerrar Sesión</a></span>
      </div>
    </section>
  </nav>`;

  const mainHome = `
  <div class="container-main">
    <div class="general-information">
      <div class="user-logged">
        <figure>
          <img src="./img/ImgRandom/image_3.png" alt="cover image" class="img-general">
        </figure>
        <div class="user-data">
          <img src="./img/user.png" class="photo">
          <div class="container-info">
            <div class="name">
              <p>Sandra Zapata Quentasi</p>
              <img src="./img/edit.png">
            </div>
            <div>
              <div class="comun-ocupation"><span>&lt;/&gt; </span>
                <p>Developer</p>
              </div>
              <img src="./img/edit.png">
            </div>

          </div>
        </div>
      </div>
      <div class="coder-information">
        <div class="coder-header">
          <p>&lt; Coders /&gt;</p>
        </div>
        <div class="container-coders">
          <div class="info-coder">
            <img src="./img/user.png">
            <div class="name-ocupation">
              <div class="comun-coders">
                <p>Isabel Angelica Lucia Paredes Apaza</p>
              </div>
              <div class="comun-ocupation"><span>&lt;/&gt; </span>
                <p>Developer</p>
              </div>
            </div>
          </div>
          <div class="info-coder">
            <img src="./img/user.png">
            <div class="name-ocupation">
              <div class="comun-coders">
                <p>Veria Villagra Garcia Merino</p>
              </div>
              <div class="comun-ocupation"><span>&lt;/&gt; </span>
                <p>Developer</p>
              </div>
            </div>
          </div>
          <div class="info-coder">
            <img src="./img/user.png">
            <div class="name-ocupation">
              <div class="comun-coders">
                <p>Juan Jose Gaallegos Valdivia</p>
              </div>
              <div class="comun-ocupation"><span>&lt;/&gt; </span>
                <p>Developer</p>
              </div>
            </div>
          </div>
          <div class="info-coder">
            <img src="./img/user.png">
            <div class="name-ocupation">
              <div class="comun-coders">
                <p>Juan Jose Gaallegos Valdivia</p>
              </div>
              <div class="comun-ocupation"><span>&lt;/&gt; </span>
                <p>Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-post">
      <div class = "change-post">${(/profile/.test(window.location.hash)) ? postHome : postProfile}</div>
      <!--------------------------nuevo post a ocultar------------------------------------------------------------------->
      
      <!---------------------------seccion a ocultar---------------------------------------------------------------------------->
      <div class="container-new-post">
        <div class="each-post">
          <div class="title-new-post">
            <img src="./img/user.png" alt="" class="user-foto">
            <div>
              <h4>Laura Zapata Quentasi</h4>
              <div class="time">
                <p>20/09/2020</p>
                <p>23:14</p>
                <img src="./img/public.png" alt="">
              </div>
            </div>
          </div>
          <div class="body-post">
            <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
              incidunt.</p>
          </div>
          <div class="like-comment">
            <div>
              <img src="./img/like.png" alt="" class="icon-like">
              <img src="./img/comment.png" alt="" class="icon-comment">
            </div>
            <p>1234 Me Gusta</p>
          </div>
          <div class="new-comment">
            <img src="./img/user.png" alt="" class="user-comment">
            <input type="text" placeholder="Agrega un comentario...">
            <img src="./img/icon-send.png" alt="" class="icon-send">
          </div>
          <div class="name-comment">
            <img src="./img/user.png" alt="" class="user-comment">
            <div class="">
              <h4>Juan Jose Gallegos Valdivia</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem autem illo fugit, voluptate
                laborum possimus in quia, aut nesciunt alias voluptatem? Animi amet dolorum labore! Exercitationem
                rem asperiores quo maxime.
              </p>
            </div>
              <div class="simulator-select">
                <span>...</span>
                  <ul>
                    <li>✎ Editar</li>
                    <li>✖ Eliminar</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="each-post">
          <div class="title-new-post">
            <img src="./img/user.png" alt="" class="user-foto">
            <div>
              <h4>Laura Zapata Quentasi</h4>
              <div class="time">
                <p>20/09/2020</p>
                <p>23:14</p>
                <img src="./img/public.png" alt="">
              </div>
            </div>
          </div>
          <div class="body-post">
            <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
              incidunt.</p>
          </div>
          <div class="like-comment">
            <div>
              <img src="./img/like.png" alt="" class="icon-like">
              <img src="./img/comment.png" alt="" class="icon-comment">
            </div>
            <p>1234 Me Gusta</p>
          </div>
        </div>
        <div class="each-post">
          <div class="title-new-post">
            <img src="./img/user.png" alt="" class="user-foto">
            <div>
              <h4>Laura Zapata Quentasi</h4>
              <div class="time">
                <p>20/09/2020</p>
                <p>23:14</p>
                <img src="./img/public.png" alt="">
              </div>
            </div>
          </div>
          <div class="body-post">
            <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
              incidunt.</p>
          </div>
          <div class="like-comment">
            <div>
              <img src="./img/like.png" alt="" class="icon-like">
              <img src="./img/comment.png" alt="" class="icon-comment">
            </div>
            <p>1234 Me Gusta</p>
          </div>
        </div>
        <div class="each-post">
          <div class="title-new-post">
            <img src="./img/user.png" alt="" class="user-foto">
            <div>
              <h4>Laura Zapata Quentasi</h4>
              <div class="time">
                <p>20/09/2020</p>
                <p>23:14</p>
                <img src="./img/public.png" alt="">
              </div>
            </div>
          </div>
          <div class="body-post">
            <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
              incidunt.</p>
          </div>
          <div class="like-comment">
            <div>
              <img src="./img/like.png" alt="" class="icon-like">
              <img src="./img/comment.png" alt="" class="icon-comment">
            </div>
            <p>1234 Me Gusta</p>
          </div>
        </div>
      </div>
    </div>
  </div>

   `;
  const sectionMain = document.createElement('section');
  sectionMain.className = 'section-main';
  const header = document.querySelector('header');
  sectionMain.innerHTML = mainHome;
  header.innerHTML = headerHome;
  return sectionMain;
};