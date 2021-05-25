<template>
  <div>
    <main id="content">
      <div class="container">
        <div class="entry-header">
          <div class="mb-5">
            <h1 class="entry-title m_b_2rem">
              {{ title }}
            </h1>
            <div class="entry-meta align-items-center">
              <a class="author-avatar" href="#"
                ><img src="assets/images/author-avata-2.jpg" alt=""
              /></a>
              <!-- <a href="author.html">Darcy Reeder</a> in -->
              <a href="archive.html">
                {{ category && category.name }}
              </a>
              <br />
              <span> {{ new Date(publishedAt).toLocaleDateString() }}</span>
              <span class="middotDivider"></span>
              <span class="svgIcon svgIcon--star">
                <svg class="svgIcon-use" width="15" height="15">
                  <path
                    d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <!--end single header-->
        <figure class="image zoom mb-5 trim">
          <img v-bind:src="thumbnail.url" alt="image" class="blog-img" />
        </figure>
        <!--figure-->
        <article class="entry-wraper mb-5">
          <div class="entry-left-col">
            <div class="social-sticky">
              <a href="#"><img src="@/assets/img/twitter.png" alt="" /></a>
              <a href="#"><img src="@/assets/img/mail.png" alt="" /></a>
            </div>
          </div>
          <div class="entry-main-content dropcap">
            <p v-html="$md.render(content)"></p>
          </div>
          <!-- <div class="entry-bottom">
            <div class="tags-wrap heading">
              <span class="tags">
                <a href="#" rel="tag">fashion</a>
                <a href="#" rel="tag">lifestyle</a>
                <a href="#" rel="tag">news</a>
                <a href="#" rel="tag">style</a>
              </span>
            </div>
          </div> -->
        </article>
      </div>
      <!--container-->
    </main>
  </div>
</template>
<script>
import axios from 'axios'
// import cheerio from 'cheerio'
// import hljs from 'highlight.js'

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://butter67.microcms.io/api/v1/blog/${params.slug}`,
      {
        headers: { 'X-API-KEY': '88e775b5-25e0-4af1-a3f8-cf525e46bbc8' },
      }
    )

    return data
  },
}
</script>
<style scoped>
#content {
  font-family: 'Lato', 'Noto Sans JP', sans-serif !important;
}
.trim {
  position: relative;
  width: 86%;
  display: block;
  margin: 0 auto;
}
.trim::before {
  content: '';
  display: block;
  padding-top: 50%;
}
.trim img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  font-family: 'object-fit: cover;';
}
.entry-wraper {
  padding-top: 20px;
}
</style>
