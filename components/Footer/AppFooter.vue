<template>
  <footer class="revealed">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <h3 data-target="#collapse_1" data-toggle="collapse" class="collapsed" aria-expanded="false">
            Quick Links <a-icon type="down" class="d-block d-md-none float-right" />
          </h3>

          <div id="collapse_1" class="collapse dont-collapse-sm links">
            <ul>
              <li><a href="about.html">About us</a></li>
              <li><a href="help.html">Faq</a></li>
              <li><a href="help.html">Help</a></li>
              <li><a href="contacts.html">Contacts</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <h3 data-target="#collapse_2">
            Categories <a-icon type="down" class="d-block d-md-none float-right" />
          </h3>
          <div id="collapse_2" class="collapse dont-collapse-sm links">
            <ul>
              <li><a href="listing-grid-1-full.html">Category 1</a></li>
              <li><a href="listing-grid-2-full.html">Category 2</a></li>
              <li><a href="listing-grid-1-full.html">Category 3</a></li>
              <li><a href="listing-grid-3.html">Category 4</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <h3 data-target="#collapse_3">
            Contacts <a-icon type="down" class="d-block d-md-none float-right" />
          </h3>
          <div id="collapse_3" class="collapse dont-collapse-sm contacts">
            <ul>
              <li><a-icon type="home" />KG 200 St 13<br>Kigali - Rwanda</li>
              <li><a-icon type="phone" />+250 780 000 000</li>
              <li><a-icon type="mail" /><a href="#0">info@alohagk.com</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <h3 data-target="#collapse_4">
            Keep in touch <a-icon type="down" class="d-block d-md-none float-right" />
          </h3>
          <div id="collapse_4" class="collapse dont-collapse-sm mt-3">
            <div id="newsletter">
              <div class="input-group">
                <input id="email_newsletter" type="email" name="email_newsletter" class="form-control" placeholder="Your email">
                <div class="input-group-append">
                  <a-button type="primary" icon="double-right" size="large" />
                </div>
              </div>
            </div>
            <div class="follow_us">
              <h5>Follow Us</h5>
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a href="#0"><a-icon type="facebook" /></a>
                </li>
                <li class="list-inline-item">
                  <a href="#0"><a-icon type="twitter" /></a>
                </li>
                <li class="list-inline-item">
                  <a href="#0"><a-icon type="instagram" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- /row-->
      <hr>
      <div class="row add_bottom_25">
        <div class="col-lg-6">
          <ul class="footer-selector clearfix">
            <li>
              <img
                src="https://previews.dropbox.com/p/thumb/AA4mYGyaoeinZzYnSQZpUSentRsSyP4Bz6ZJJ9hxU2p9PfAuCC4Pe2EyGBCX1_iDUKw4Vux6dfezBageOtpeBixLG3fhe4mdyHHsp8XrODRs0UiGdMpF_SxOUtg2iCDZhDkF_qzxigaLFHt_YqPb3ZSCQslYpoGy7TFZzkFslXJXtZpB_A9stA2yWk6QKvJjszgVgm4BGFD1tCNyPZL_9JUvOerVamVtGHYb0HJWTj9_r_QOFlmu02gz6p3sIF3gmPdp_m9m1fpkmipB1TLl6B1FE4WnpmHaSeuJEIecG6_4cy3q921Xpd2jDE0lWqMLnTENPaLfNEDxF80TkBiLBKLd-fY5tTL0aVek2AFyEuniFg/p.png?fv_content=true&size_mode=5"
                data-src="img/cards_all.svg"
                alt=""
                width="198"
                height="30"
                class="lazy"
              >
            </li>
          </ul>
        </div>
        <div class="col-lg-6">
          <ul class="additional_links">
            <li><a href="#0">Terms and conditions</a></li>
            <li><a href="#0">Privacy</a></li>
            <li><span>© 2020 Allaia</span></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  methods: {
    handleCollapse (id) {
      const el = document.querySelector(id)
      console.log(el.style)
      if (el.style.display === 'none') { el.style.display = 'block' }
      if (el.style.display === 'block') { el.style.display = 'none' }
    }
  }
}
</script>

<style scoped>
@media (min-width: 768px) {
  .collapse.dont-collapse-sm {
    display: block !important;
    height: auto !important;
    visibility: visible !important;
  }
}
footer {
  background-color: #1F131E;
  padding: 60px 0 35px 0;
}
@media (max-width: 767px) {
  footer {
    padding: 0 0 15px 0;
  }
}
footer hr {
  border-color: rgba(255, 255, 255, 0.15);
  margin-top: 5px;
}
@media (max-width: 767px) {
  footer hr {
    border-color: transparent;
  }
}
footer .contacts ul {
  margin: 0 0 25px 0;
  padding: 0;
  list-style: none;
}
@media (max-width: 767px) {
  footer .contacts ul {
    margin-top: 15px;
  }
}
footer .contacts ul li {
  padding-left: 35px;
  position: relative;
  margin-bottom: 15px;
  color: #fff;
  opacity: 0.8;
}
footer .contacts ul li a {
  color: #fff;
  opacity: 1;
}
footer .contacts ul li a:hover {
  opacity: 1;
}
footer .contacts ul li i {
  font-size: 18px;
  font-size: 1.125rem;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  line-height: 1;
}
footer h3 {
  font-size: 14px;
  font-size: 0.875rem;
  margin-bottom: 15px;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  color: #fff;
  text-transform: uppercase;
}
@media (max-width: 767px) {
  footer h3 {
    font-size: 13px;
    font-size: 0.8125rem;
    cursor: pointer;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    margin: 0 -15px 0 -15px;
    padding: 15px 15px 15px 15px;
    display: block;
  }
  footer h3.opened:after {
    content: "\e622";
  }
}
footer .links ul {
  margin: 0 0 25px 0;
  padding: 0;
  list-style: none;
}
@media (max-width: 767px) {
  footer .links ul {
    margin-top: 15px;
  }
}
footer .links ul li {
  margin-bottom: 8px;
  line-height: 1.2;
}
footer .links ul li a {
  position: relative;
  color: #fff;
  opacity: 0.8;
  display: inline-block;
}
footer .links ul li a:hover {
  -webkit-transform: translate(5px, 0);
  -moz-transform: translate(5px, 0);
  -ms-transform: translate(5px, 0);
  -o-transform: translate(5px, 0);
  transform: translate(5px, 0);
  color: #fff;
  opacity: 1;
}
footer .links ul li a:hover:after {
  opacity: 1;
  color: #fff;
}

#newsletter input[type='email'] {
    border: 0;
    height: 40px;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    -ms-border-radius: 0;
    border-radius: 0;
    padding-left: 15px;
    background-color: #f3f3f3;
    background-color: rgba(255, 255, 255, 0.05);
    color: #ccc;
}
#newsletter button {
    /* position: absolute; */
    right: 0;
    color: #fff;
    font-size: 18px;
    font-size: 1.125rem;
    top: 0;
    border: 0;
    padding: 0 12px;
    height: 40px;
    line-height: 44px;
    cursor: pointer;
    -webkit-border-radius: 0 3px 3px 0;
    -moz-border-radius: 0 3px 3px 0;
    -ms-border-radius: 0 3px 3px 0;
    border-radius: 0 3px 3px 0;
    background-color: #c82f63;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
}
.follow_us h5 {
    font-size: 16px;
    font-size: 1rem;
    margin: 35px 0 10px 0;
    color: #fff;
}
i.anticon.anticon-instagram {
    color: #fd5949;
    font-size: 1.5rem;
}
i.anticon.anticon-twitter {
    color: rgb(29, 161, 242);
    font-size: 1.5rem;
}
i.anticon.anticon-facebook {
    font-size: 1.5rem;
    color: #1877f2;
}
.collapse:not(.show) {
    display: block;
}
/* .revealed{
    z-index: 1;
    position: fixed;
    bottom: 0px;
    width: 1440px;
} */
</style>>
