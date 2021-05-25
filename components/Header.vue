<template>
  <div>
    <!--Mobile navigation-->
    <div class="sticky-header fixed d-lg-none d-md-block">
      <div class="text-right">
        <div class="container mobile-menu-fixed pr-5">
          <h1 class="logo-small navbar-brand">
            <a href="/" class="logo">Butter67</a>
          </h1>

          <a class="author-avatar" href="#"
            ><img src="assets/images/author-avata-1.jpg" alt=""
          /></a>

          <ul
            class="
              social-network
              heading
              navbar-nav
              d-lg-flex
              align-items-center
            "
          >
            <li>
              <a href="#"><img src="@/assets/img/twitter.png" alt="" /></a>
            </li>
          </ul>

          <a href="javascript:void(0)" class="menu-toggle-icon">
            <span class="lines"></span>
          </a>
        </div>
      </div>

      <div class="mobi-menu">
        <div class="mobi-menu__logo">
          <h1 class="logo navbar-brand">
            <a href="index.html" class="logo">Butter67</a>
          </h1>
        </div>
        <form action="#" method="get" class="menu-search-form d-lg-flex">
          <input
            type="text"
            class="search_field"
            placeholder="Search..."
            value=""
            name="s"
          />
        </form>
        <nav>
          <ul>
            <li class="current-menu-item"><a href="index.html">Home</a></li>
            <li class="menu-item-has-children">
              <a href="categories.html">Categories</a>
              <ul class="sub-menu">
                <li><a href="categories.html">Politics</a></li>
                <li><a href="categories.html">Health</a></li>
                <li><a href="categories.html">Design</a></li>
              </ul>
            </li>
            <li><a href="typography.html">Typography</a></li>
            <li><a href="categories.html">Politics</a></li>
            <li><a href="categories.html">Health</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <!--Mobile navigation-->

    <div id="wrapper">
      <header id="header" class="d-lg-block d-none">
        <div class="container">
          <div class="align-items-center w-100">
            <h1 class="logo float-left navbar-brand">
              <a href="index.html" class="logo">Butter67</a>
            </h1>
            <div class="header-right float-right w-50">
              <div
                class="d-inline-flex float-right text-right align-items-center"
              >
                <ul
                  class="
                    social-network
                    heading
                    navbar-nav
                    d-lg-flex
                    align-items-center
                  "
                >
                  <li>
                    <a href="https://twitter.com/Butter617" class="snsicons"
                      ><img src="@/assets/img/twitter.png" alt=""
                    /></a>
                  </li>
                </ul>
                <ul
                  class="
                    social-network
                    heading
                    navbar-nav
                    d-lg-flex
                    align-items-center
                  "
                >
                  <li>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeH6JxyIKlPIm1osJxxfjGkZBmdEV8pkRnE_ZMdg0p_9rBEMQ/viewform"
                      class="snsicons"
                      ><img src="@/assets/img/mail.png" alt=""
                    /></a>
                  </li>
                </ul>
                <a class="author-avatar" href="#"
                  ><img src="@/assets/img/buttericon.png" alt=""
                /></a>
              </div>
              <form
                action="#"
                method="get"
                class="search-form d-lg-flex float-right"
              >
                <a href="javascript:void(0)" class="searh-toggle">
                  <i class="icon-search"></i>
                </a>
                <input
                  type="text"
                  class="search_field"
                  placeholder="Search..."
                  value=""
                  name="s"
                />
              </form>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
        <nav id="main-menu" class="d-lg-block d-none">
          <div class="container">
            <div class="menu-primary">
              <ul>
                <li class="current-menu-item">
                  <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li class="menu-item-has-children">
                  <nuxt-link to="/Portfolio/">Portfolio</nuxt-link>
                  <!-- <ul class="sub-menu">
                    <li><a href="categories.html">Politics</a></li>
                    <li><a href="categories.html">Health</a></li>
                    <li><a href="categories.html">Design</a></li>
                  </ul> -->
                </li>
                <li><nuxt-link to="/Content/">Blog</nuxt-link></li>
                <!-- <li><a href="categories.html">Politics</a></li>
                <li><a href="categories.html">Health</a></li>
                <li><a href="categories.html">Design</a></li>
                <li><a href="categories.html">Startups</a></li>
                <li><a href="categories.html">Culture</a></li> -->
                <li>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeH6JxyIKlPIm1osJxxfjGkZBmdEV8pkRnE_ZMdg0p_9rBEMQ/viewform"
                    >Contact</a
                  >
                </li>
                <!-- <li class="menu-item-has-children">
                  <a href="#">More...</a>
                  <ul class="sub-menu">
                    <li><a href="search.html">Search</a></li>
                    <li><a href="author.html">Author</a></li>
                    <li><a href="404.html">404</a></li>
                  </ul>
                </li> -->
              </ul>
              <span></span>
            </div>
          </div>
        </nav>
      </header>
    </div>
  </div>
</template>
<style scoped>
.stick {
  position: sticky;
  top: 10px;
}
.menu-primary ul {
  display: flex !important;
  justify-content: space-around;
}
.v-application ul {
  padding-left: 10px;
}
.author-avatar {
  margin-left: 20px;
}
.snsicons:hover {
  opacity: 0.7;
  transition: all 0.2s;
}
</style>
