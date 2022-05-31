<template>
	<div class="footer-left">

		<div>
			<img class='logo' alt="logo" src="../public/logo.png">
			<h3>Sailing Logbook</h3>
		</div>
	
		<p class="footer-links">
			<a href="#">Home</a>
			·
			<a href="#">Blog</a>
			·
			<a href="#">Pricing</a>
			·
			<a href="#">About</a>
			·
			<a href="#">Faq</a>
			·
			<a href="#">Contact</a>
		</p>

		<p class="footer-company-name">Liam Skinner © 2022</p>
		<div class="footer-icons">
			<a rel="noreferrer" target="_blank" href="https://twitter.com/ThatsLiamS"><i class="bi bi-twitter"></i></a>
			<a rel="noreferrer" target="_blank" href="https://discord.com/invite/2je9aJynqt"><i class="bi bi-discord"></i></a>
			<a rel="noreferrer" target="_blank" href="https://github.com/ThatsLiamS"><i class="bi bi-github"></i></a>

		</div>

	</div>

	<div class="footer-right">

		<p>Contact Us</p>

		<form v-on:submit.prevent="">

			<input type="text" name="email" v-model="email" placeholder="Email">
			<textarea name="message" v-model="message" placeholder="Message"></textarea>
			<button type="submit" class="sendButton" value="Send">Send</button>

		</form>

	</div>
</template>

<script>

	export default {
		name: 'FooterComponent',

		methods: {
		},
	};
</script>
<style>
	@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);

* {
  font-family: Roboto;
}

.footer{
	background: #444;
	box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
	box-sizing: border-box;
	width: 100%;
	font: bold 16px sans-serif;
	text-align: left;
	padding: 50px 85px 40px;
	overflow: hidden;
}

section {
  width: 100%;
  display: inline-block;
  background: #ccc;
  height: 60vh;
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  text-decoration: underline;
}


/* Footer left */

.footer .footer-left{
	float: left;
}

/* The company logo */

.footer h3{
	color:  #ffffff;
	font: normal 36px 'Roboto', cursive;
	margin: 0 0 10px;
}

.footer img{
	height: 70px;
}

/* Footer links */

.footer .footer-links{
	color:  #ffffff;
	margin: 0 0 10px;
	padding: 0;
}

.footer .footer-links a {
	display:inline-block;
	line-height: 1.8;
	text-decoration: none;
	color:  inherit;
}
	
.footer .footer-company-name{
	color:  #8f9296;
	font-size: 14px;
	font-weight: normal;
	margin: 0;
}

/* Footer social icons */

.footer .footer-icons{
	margin-top: 40px;
}

.footer .footer-icons a {
	display: inline-block;
	width: 44px;
	height: 44px;
	cursor: pointer;
	background-color:  #33383b;
	border-radius: 2px;

	font-size: 20px;
	color: #ffffff;
	text-align: center;
	vertical-align: middle;
	line-height: 44px;

	margin: 5px 10px;
}
.footer .footer-icons i {
	padding: 12px;
	vertical-align: middle;
	text-align: center;
}
/* Footer Right */

.footer .footer-right{
	float: right;
	margin-left: 15px;
}

.footer .footer-right p{
	display: inline-block;
	vertical-align: top;
	margin: 15px 42px 0 0;
	color: #ffffff;
}

/* The contact form */

.footer form{
	display: inline-block;
}

.footer form input,
.footer form textarea{
	display: block;
	border-radius: 3px;
	box-sizing: border-box;
	background-color:  #1f2022;
	box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);
	border: none;
	resize: none;

	font: inherit;
	font-size: 14px;
	font-weight: normal;
	color:  #d1d2d2;

	width: 400px;
	padding: 18px;
}

.footer ::-webkit-input-placeholder {
	color:  #5c666b;
}

.footer ::-moz-placeholder {
	color:  #5c666b;
	opacity: 1;
}

.footer :-ms-input-placeholder{
	color:  #5c666b;
}


.footer form input{
	height: 55px;
	margin-bottom: 15px;
}

.footer form textarea{
	height: 100px;
	margin-bottom: 20px;
}

.footer form .sendButton{
	border-radius: 3px;
	background-color:  #33383b;
	color: #ffffff;
	border: 0;
	padding: 15px 50px;
	font-weight: bold;
	float: right;
}


@media (max-width: 1025px) {

	.footer {
		font: bold 14px sans-serif;
	}

	.footer .footer-company-name{
		font-size: 12px;
	}

	.footer form input,
	.footer form textarea{
		width: 285px;
	}

	.footer form .sendButton{
		padding: 10px 35px;
	}

}

@media (max-width: 860px) {
	.footer form input,
	.footer form textarea{
		width: 255px;
	}
}
@media (max-width: 830px) {
	.footer form input,
	.footer form textarea{
		width: 235px;
	}
}
@media (max-width: 815px) {
	.footer form input,
	.footer form textarea{
		width: 215px;
	}
}
@media (max-width: 790px) {

	.footer{
		padding: 30px;
		padding-left: 85px;
	}

	.footer .footer-left,
	.footer .footer-right{
		float: none;
		max-width: 300px;
		margin: 0 auto;
	}

	.footer .footer-left{
		margin-bottom: 40px;
	}

	.footer form{
		margin-top: 30px;
	}

	.footer form{
		display: block;
	}

	.footer form .sendButton{
		float: none;
	}

	.footer form input,
	.footer form textarea{
		width: 265px;
	}
}
@media (max-width: 425px) {
	.footer .footer-left h3{
		font-size: 30px;
	}
}
@media (max-width: 350px) {
	.footer form input,
	.footer form textarea{
		width: 225px;
	}
}
</style>