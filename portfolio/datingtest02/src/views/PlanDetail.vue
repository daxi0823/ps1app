<template>
  <div class="result">
    <div class="searchWrapper">
      <p>{{ $route.params.planId }}</p>
      <h1>結果</h1>
      <p>希望条件</p>
      <ul>
        <li>
          日付：
          <select name="" id="">
            <option value="">4/15</option>
          </select>
        </li>
        <li>
          出発時間：
          <select name="" id="">
            <option value="10:00">10:00</option>
          </select>
        </li>
        <li>出発駅：<select name="" id=""></select></li>
        <li>所要時間：<select name="" id=""></select></li>
        <li>移動時間（片道）<select name="" id=""></select></li>
      </ul>
    </div>
    <!-- /searchWrapper -->
    <div class="resultWrapper">
      <div class="container">
        <div class="navbar">
          <a href="#">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </a>
          <div class="profile-pic">
            <img
              src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"
              alt=""
            />
            <div class="notification"></div>
          </div>
          <span>Timeline</span>
        </div>

        <div class="header">
          <div class="color-overlay">
            <div class="day-number">8</div>
            <div class="date-right">
              <div class="day-name">Monday</div>
              <div class="month">February 2015</div>
            </div>
          </div>
          <div class="actionbutton">+</div>
        </div>

        <div class="timeline">
          <ul>
            <li>
              <div class="bullet pink"></div>
              <div class="time">5pm</div>
              <div class="desc">
                <h3>New Icon</h3>
                <h4>Mobile App</h4>
              </div>
            </li>
            <li>
              <div class="bullet green"></div>
              <div class="time">3 - 4pm</div>
              <div class="desc">
                <h3>Design Stand Up</h3>
                <h4>Hangouts</h4>
                <div class="people">
                  <img
                    src="https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg"
                    alt=""
                  />
                  <img
                    src="https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"
                    alt=""
                  />
                  <img
                    src="https://s3.amazonaws.com/uifaces/faces/twitter/mattsince87/128.jpg"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li>
              <div class="bullet orange"></div>
              <div class="time">12pm</div>
              <div class="desc">
                <h3>Lunch Break</h3>
              </div>
            </li>
            <li>
              <div class="bullet green"></div>
              <div class="time">9 - 11am</div>
              <div class="desc">
                <h3>Finish Home Screen</h3>
                <h4>Web App</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <a
        href="https://dribbble.com/shots/1980532-Timeline-Profile/"
        target="_blank"
        class="credits"
        >original concept</a
      >

      <a
        href="https://www.youtube.com/watch?v=zKtzNqiM3sA"
        target="_blank"
        class="video"
        >watch process video</a
      >
    </div>
    <!-- /.resultWrapper -->
  </div>
</template>


<style scoped>
ul {
  list-style-type: none;
  display: flex;
}

.container {
  max-width: 350px;
  max-height: 630px;
  overflow: hidden;
  margin: 30px auto 0;
  box-shadow: 0 0 40px #a0a0a0;
  font-family: "Open Sans", sans-serif;
}

.navbar {
  background: #b97cfc;
  color: #fff;
  padding: 1em 0.5em;
}
.navbar a {
  color: #fff;
  text-decoration: none;
  font-size: 1.3em;
  float: left;
}
.navbar span {
  font-size: 1.1em;
  font-weight: 300;
  display: block;
  text-align: center;
}

.profile-pic {
  width: 30px;
  height: 30px;
  display: inline-block;
  float: right;
  position: relative;
}
.profile-pic img {
  width: 100%;
  border-radius: 50%;
}

.notification {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  top: 2px;
  right: 2px;
  background: #f93b69;
}

.header {
  background: url(https://unsplash.it/1080/720?image=1044);
  background-size: cover;
  color: #fff;
  position: relative;
}

.color-overlay {
  padding: 3em 2em;
  box-sizing: border-box;
  background: rgba(123, 94, 155, 0.5);
}

.actionbutton {
  position: absolute;
  background: #f93b69;
  width: 50px;
  height: 50px;
  font-size: 3em;
  font-weight: 300;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: -25px;
  right: 20px;
  box-shadow: 0 0 8px #202020;
}

.day-number {
  font-size: 4em;
  display: inline-block;
  margin-right: 15px;
}

.date-right {
  display: inline-block;
}

.day-name {
  font-size: 1.6em;
}

.month {
  text-transform: uppercase;
  font-weight: 300;
  font-size: 0.6em;
  letter-spacing: 2px;
  margin-top: 2px;
}

.timeline ul {
  padding: 1em 0 0 2em;
  margin: 0;
  list-style: none;
  position: relative;
}
.timeline ul::before {
  content: " ";
  height: 100%;
  width: 1px;
  background-color: #d9d9d9;
  position: absolute;
  top: 0;
  left: 2.5em;
  z-index: -1;
}
.timeline li div {
  display: inline-block;
  margin: 1em 0;
  vertical-align: top;
}
.timeline .bullet {
  width: 1em;
  height: 1em;
  box-sizing: border-box;
  border-radius: 50%;
  background: #fff;
  z-index: 1;
  margin-right: 1em;
}
.timeline .bullet.pink {
  border: 2px solid #f93b69;
}
.timeline .bullet.green {
  border: 2px solid #b0e8e2;
}
.timeline .bullet.orange {
  border: 2px solid #eb8b6e;
}
.timeline .time {
  width: 20%;
  font-size: 0.75em;
  padding-top: 0.25em;
}
.timeline .desc {
  width: 50%;
}
.timeline h3 {
  font-size: 0.9em;
  font-weight: 400;
  margin: 0;
}
.timeline h4 {
  margin: 0;
  font-size: 0.7em;
  font-weight: 400;
  color: #808080;
}
.timeline .people img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.credits,
.video {
  position: absolute;
  bottom: 10px;
  color: #808080;
  font-size: 100%;
  text-decoration: underline;
}

.credits {
  left: 10px;
}

.video {
  right: 10px;
}

</style>