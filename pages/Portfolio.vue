<template>
  <div>
    <main id="content">
      <div class="content-widget">
        <div class="container">
          <!--Begin Archive Header-->
          <div class="row">
            <div class="col-12 archive-header text-center pt-3 pb-3">
              <h1 class="mb-3">Portfolio</h1>
            </div>
          </div>

          <div class="row">
            <article
              v-for="content in contents"
              :key="content.id"
              class="post-list-style-2 mb-5 col-md-4"
            >
              <a href="single.html"
                ><figure class="bgcover">
                  <img src="assets/images/author-avata-1.jpg" alt="" />
                  <img v-bind:src="content.img.url" alt="" /></figure
              ></a>
              <h3 class="entry-title mb-3 txtC">
                <a href="single.html">
                  {{ content.title }}
                </a>
              </h3>
            </article>

            <ul class="page-numbers heading">
              <li>
                <span aria-current="page" class="page-numbers current">1</span>
              </li>
              <li><a class="page-numbers" href="#">2</a></li>
              <li><a class="page-numbers" href="#">3</a></li>
              <li><a class="page-numbers" href="#">4</a></li>
              <li><a class="page-numbers" href="#">5</a></li>
              <li><a class="page-numbers" href="#">...</a></li>
              <li><a class="page-numbers" href="#">98</a></li>
              <li>
                <a class="next page-numbers" href="#"
                  ><i class="icon-right-open-big"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <!--content-widget-->
      </div>

      <div class="content-widget">
        <div class="container">
          <div class="sidebar-widget ads">
            <a href="#"><img src="assets/images/ads/ads-2.png" alt="ads" /></a>
          </div>
          <div class="hr"></div>
        </div>
      </div>
      <!--content-widget-->
    </main>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      'https://butter67.microcms.io/api/v1/portfolio/',
      {
        headers: { 'X-API-KEY': '88e775b5-25e0-4af1-a3f8-cf525e46bbc8' },
      }
    )
    return data
  },
}
</script>

<style scoped>
h3.entry-title {
  padding-top: 10px;
}
.bgcover {
  position: relative;
  width: 100%;
  display: block;
  margin: 0 auto;
}
.bgcover::before {
  content: '';
  display: block;
  padding-top: 100%;
}
.bgcover img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  font-family: 'object-fit: cover;';
}
.txtC {
  text-align: center;
}
</style>
