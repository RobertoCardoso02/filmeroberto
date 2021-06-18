import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [filmes, setFilmes] = useState([]);
  const [destaques, setDestaques] = useState([]);
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [makingOf, setMakingOf] = useState([]);
  const [novidades, setNovidades] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/filmes")
      .then((response) => {
        setFilmes(response.data);
      })
      .catch(console.log);
    axios
      .get("http://localhost:3000/destaques")
      .then((response) => {
        setDestaques(response.data);
      })
      .catch(console.log);
    axios
      .get("http://localhost:3000/avaliacao")
      .then((response) => {
        setAvaliacoes(response.data);
      })
      .catch(console.log);
    axios
      .get("http://localhost:3000/makingOf")
      .then((response) => {
        setMakingOf(response.data);
      })
      .catch(console.log);
    axios
      .get("http://localhost:3000/novidades")
      .then((response) => {
        setNovidades(response.data);
      })
      .catch(console.log);
  }, []);

  return (
    <div className="row justify-content-md-center">
      <nav class="navbar fixed-top navbar-expand-md navbar-light bg-light mb-5">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-badge-4k-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.577 8.9v.03h1.828V5.898h-.062a46.781 46.781 0 0 0-1.766 3.001z" />
              <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm2.372 3.715.435-.714h1.71v3.93h.733v.957h-.733V11H5.405V9.888H2.5v-.971c.574-1.077 1.225-2.142 1.872-3.202zm7.73-.714h1.306l-2.14 2.584L13.5 11h-1.428l-1.679-2.624-.615.7V11H8.59V5.001h1.187v2.686h.057L12.102 5z" />
            </svg>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" />
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#top" selected>
                  Lançamentos
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#destaque" selected>
                  Destaques
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#avaliacoes" selected>
                  Avaliações
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#entrevistas" selected>
                  Entrevistas
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#novidades" selected>
                  Novidades
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#footer" selected>
                  Sobre
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Ação
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Aventura
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Ficção
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="pesquisar"
                placeholder="Procurar Filme"
                aria-label="Search"
              />
              <button class="btn btn-outline-dark" type="submit">
                Pesquisar
              </button>
            </form>
          </div>
        </div>
      </nav>
      <main class=" text-light py-5 mt-5 ">
        <div class="row">
          <div class="col">
            <h1 class="text-center my-3">Lançamentos</h1>
          </div>
        </div>
        <div
          id="carouselExampleControls"
          class="carousel slide py-2"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            {filmes.map((filme) => (
              <div class={filme.class}>
                <div class="row justify-content-md-center">
                  <div class="col-5">
                    <iframe
                      width="588"
                      height="336"
                      src={filme.src}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div class="col-4 mx-3">
                    <h1 class="text-center">{filme.title}</h1>
                    <p>
                      <b>Sinopse: </b>
                      <span>
                        {filme.sinopseInit}
                        <span
                          class="d-inline-block text-truncate"
                          style={{ "max-width": "350px" }}
                        >
                          {filme.sinopseEnd}
                        </span>
                      </span>
                    </p>

                    <div class="row">
                      <div class="col-4">
                        <b> Diretor: </b>
                      </div>
                      <div class="col-4">
                        <b> Roteiro: </b>{" "}
                      </div>
                      <div class="col-4">
                        <b> Estreia: </b>
                      </div>

                      <div class="col-4">{filme.diretor}</div>
                      <div class="col-4">{filme.roteiro}</div>
                      <div class="col-4">{filme.estreia}</div>
                    </div>

                    <div class="row my-3">
                      <div class="col my-auto">
                        <b class="text-left">Elenco :</b>
                      </div>
                      <div class="row">
                        <div class="col">{filme.elenco}</div>
                      </div>
                    </div>

                    <div class="row mb-2 my-1">
                      <div class="col-3 my-auto">
                        <b> Avaliação:</b>
                      </div>
                      <div class="col-8 my-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="text-warning"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="text-warning"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="text-warning"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="text-warning"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="text-warning"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div class="carousel-item">
              <div class="row justify-content-md-center">
                <div class="col-5">
                  <iframe
                    width="588"
                    height="336"
                    src="https://www.youtube.com/embed/CVwG8htrRYI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div class="col-4 mx-3">
                  <h1 class="text-center">Circulo de Fogo: A Revolta </h1>

                  <p>
                    <b>Sinopse: </b>
                    <span>
                      {" "}
                      Já se foram dez anos desde a Batalha na Fenda e os oceanos
                      continuam estáveis, mas inquietos. Vindicado{" "}
                      <span
                        class="d-inline-block text-truncate"
                        style={{ "max-width": "350px" }}
                      >
                        {" "}
                        pela vitória na batalha, o programa Jaeger evoluiu para
                        se tornar a força de defensa mais poderosa da história
                        da humanidade. O PPDC agora seleciona os melhores e mais
                        promissores para se tornar a nova geração de heróis.{" "}
                      </span>
                    </span>
                  </p>
                  <div class="row">
                    <div class="col-4">
                      <b> Diretor: </b>
                    </div>
                    <div class="col-4">
                      <b> Roteiro: </b>{" "}
                    </div>
                    <div class="col-4">
                      <b> Estreia: </b>
                    </div>
                    <div class="col-4">Steven S. DeKnight</div>
                    <div class="col-4">T.S. Nowlin</div>
                    <div class="col-4">22/03/2021</div>
                  </div>

                  <div class="row my-3">
                    <div class="col-3 my-auto">
                      <b class="text-left">Elenco :</b>
                    </div>
                    John Boyega, Scott Eastwood, Cailee Spaeny
                  </div>

                  <div class="row mb-2 my-1">
                    <div class="col-3 my-auto">
                      <b> Avaliação:</b>
                    </div>
                    <div class="col-8 my-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="text-warning"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="text-warning"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="text-warning"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="text-warning"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="text-warning"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="row justify-content-md-center">
                <div class="col-5">
                  <iframe
                    width="588"
                    height="336"
                    src="https://www.youtube.com/embed/YyGCwm3Fo8o"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div class="col-4 mx-3">
                  <h1 class="text-center">Evangelion 3.0+1.0</h1>

                  <p>
                    <b>Sinopse: </b>
                    <span>
                      Shinji Ikari, a causa do Terceiro Impacto, ficou
                      abandonado… Ele será capaz de se reconstruir? A animação{" "}
                      <span
                        class="d-inline-block text-truncate"
                        style={{ "max-width": "350px" }}
                      >
                        conta a continuação de uma história que está trancada
                        desde o Evangelion 3.0 de 2012.
                      </span>{" "}
                    </span>
                  </p>
                  <div class="row">
                    <div class="col-4">
                      <b> Diretor: </b>
                    </div>
                    <div class="col-4">
                      <b> Roteiro: </b>{" "}
                    </div>
                    <div class="col-4">
                      <b> Estreia: </b>
                    </div>

                    <div class="col-4">Hideaki Anno</div>
                    <div class="col-4">Hideaki Anno</div>
                    <div class="col-4">08/04/2021</div>
                  </div>
                  <div class="row my-3">
                    <div class="col-3 my-auto">
                      <b class="text-left">Elenco :</b>
                    </div>
                    <div class="col-8">
                      Megumi Ogata, Kotono Mitsuishi, Yuko Miyamura
                    </div>
                  </div>
                  <div class="row mb-2 my-1">
                    <div class="col-3 my-auto">
                      <b> Avaliação:</b>
                    </div>
                    <div class="col-8 my-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="text-warning"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="text-warning"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="text-warning"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="text-warning"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="text-warning"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <br id="destaque" />
        <div class="container">
          <div class="row">
            <div class="col-8">
              <h1 class="text-center my-3">Em Destaques</h1>
            </div>
            <div class="col-4">
              <h1 class="text-center my-3">
                <select class="form-select form-select-lg mb-3">
                  <option selected>Escolher Categoria</option>
                  <option value="1">Ação</option>
                  <option value="2">Aventura</option>
                  <option value="3">Romance</option>
                </select>
              </h1>
            </div>
          </div>

          <div class="card-deck text-center text-dark">
            <div class="row gap-3">
              {destaques.map((destaque) => (
                <div class="card mb-4 shadow-sm col">
                  <div class="card-body">
                    <img src={destaque.src} width="259.328" alt="" />
                  </div>
                  <div class="card-footer border mb-2">
                    <div class="row ">
                      {destaque.estrelas.map((s) => (
                        <div class="col">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="text-warning"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div class="text-light text-end">
              <button
                type="button"
                class="btn btn-outline-light btn-lg text-end"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                Carregar mais Filmes
              </button>
            </div>
          </div>
        </div>
        <div style={{ "max-width": "1200px" }} class="mx-auto">
          <br id="avaliacoes" />
          <div class="row gap-3 py-5 mx-3">
            <h1 class="text-center">Ultimas avaliações</h1>
            {avaliacoes.map((item) => (
              <div class="card col text-center bg-light text-dark ">
                <div class="card-body">
                  <div class="feature-icon ">
                    <img
                      class="rounded-circle"
                      src={item.src}
                      width="140"
                      height="140"
                      alt=""
                    />
                  </div>
                  <b>{item.nome}</b>
                  <p>
                    <small>{item.data} </small>
                  </p>
                  <h3>{item.filme}</h3>
                  <p>{item.descricao}</p>
                </div>
                <div class="card-footer bg-light border">
                  <small>
                    <b>Avaliação : </b>{" "}
                  </small>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-warning"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-warning"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-warning"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-warning"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-warning"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                  </svg>
                </div>
              </div>
            ))}
            <div class="text-light text-end">
              <button
                type="button"
                class="btn btn-outline-light btn-lg text-end"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                Carregar mais Avaliações
              </button>
            </div>
            <br id="entrevistas" />
            <div class="row">
              <div class="col">
                <h1 class="text-center my-3">Entrevistas e Making Of</h1>
              </div>
            </div>
            <div class="row mb-3 text-center text-dark">
              {makingOf.map((item) => (
                <div class="col">
                  <div class="card mb-4 rounded-3 shadow-sm">
                    <div class="card-header py-3">
                      <h4 class="my-0 fw-normal">Transformers 04</h4>
                    </div>
                    <div class="card-body">
                      <iframe
                        width="260"
                        src={item.src}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                      <ul class="list-unstyled mt-3 mb-4">
                        <div class="row">
                          <div class="col">
                            <b> Diretor: </b> {item.diretor}
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <b> Roteiro: </b> {item.roteiro}
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <b> Estreia: </b> {item.estreia}
                          </div>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
              <div class="text-light text-end">
                <button
                  type="button"
                  class="btn btn-outline-light btn-lg text-end"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-plus"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                  Carregar mais Avaliações
                </button>
              </div>
              <br id="novidades" />
              <div class="row ">
                <div class="col">
                  <h1 class="text-center my-3 text-light">Novidades</h1>
                </div>
                {novidades.map((item) => (
                  <div class="row justify-content-md-center bg-light py-3">
                    <div class="col-6 ">
                      <h4>{item.titulo}</h4>
                    </div>
                    <div class="row featurette">
                      <div class="col-md-7 my-auto py-auto">
                        <p class="lead ">{item.descricao}</p>
                      </div>
                      <div class="col-md-5 my-auto">
                        <img
                          class="rounded"
                          src={item.src}
                          width="400"
                          alt=""
                        />
                      </div>
                    </div>
                    {item.last ? "" : <hr class="my-4" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
