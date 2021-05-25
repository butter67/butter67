<template>
  <div>
    <div class="row bottomWrap">
      <div class="col-md-8">
        <!-- <div class="divider"></div>                 -->
        <article
          v-for="content in contents"
          :key="content.id"
          class="row justify-content-between mb-5 mr-0"
        >
          <div class="col-md-9">
            <div class="align-self-center">
              <a class="capsSubtle mb-2">
                {{ content.category && content.category.name }}
              </a>
              <h3 class="entry-title mb-3">
                <nuxt-link :to="`/${content.id}`">{{
                  content.title
                }}</nuxt-link>
              </h3>
              <div class="entry-excerpt">
                <p v-html="$md.render(content.content)" class="entry-pra"></p>
              </div>

              <div class="entry-meta align-items-center">
                <span>May 21</span>
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
          <div class="col-md-3 bgcover">
            <nuxt-link :to="`/${content.id}`">
              <img
                v-bind:src="content.thumbnail.url"
                alt="image"
                class="blog-img"
              />
            </nuxt-link>
          </div>
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
      <!--col-md-8-->
      <div class="col-md-4 pl-md-5 sticky-sidebar">
        <div class="sidebar-widget latest-tpl-4 sticky">
          <h5 class="spanborder widget-title">
            <span>Popular in Culture</span>
          </h5>

          <ol v-for="content in contents" :key="content.id" class="cat-list">
            <li class="d-flex">
              <div class="post-content">
                <h5 class="entry-title mb-3 add-air">
                  <a href="single.html">
                    {{ content.category && content.category.name }}
                  </a>
                </h5>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <!--col-md-4-->
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  async asyncData() {
    const { data } = await axios.get(
      'https://butter67.microcms.io/api/v1/blog',
      {
        headers: { 'X-API-KEY': '88e775b5-25e0-4af1-a3f8-cf525e46bbc8' },
      }
    )
    return data
  },
}
</script>
<style scoped>
.hero {
  padding: 40px 20px;
  margin-top: 16px;
}
.bottomWrap {
  padding: 40px 0px 0px;
}
.sticky {
  position: sticky;
  top: 10px;
}
.blog-img {
  border-radius: 20px;
}
</style>

<style scoped>
.entry-pra {
  max-height: 60px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.bgcover {
  position: relative;
  width: 100%;
  margin: 5px 0px;
}
.bgcover::before {
  content: '';
  display: block;
  padding-top: 66.66%;
}
.blog-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  font-family: 'object-fit: cover;';
}
.entry-title {
  font-size: 21px;
  position: relative;
}
.add-air:before {
  content: '';
  display: inline-block;
  width: 26px;
  height: 20px;
  background-image: url('~@/assets/img/paperairplane.png');
  background-size: contain;
  vertical-align: middle;
  margin-right: 10px;
}
.entry-title:hover {
  opacity: 0.75;
  transition: all 0.3s;
}
.capsSubtle {
  letter-spacing: 0.02em;
  color: rgb(120, 161, 124) !important;
  position: relative;
}
.cat-list {
  padding-left: 0px !important;
}
</style>
