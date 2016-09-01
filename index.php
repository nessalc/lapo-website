<?php include 'header.php'; ?>

<div class="banner"  style="background: url(/layout/img/header-background.jpg) center/cover">
	<div class="container">
		<div class="row">
			<div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-xs-center">
				<h1>Get closer <span class="nobr">to the stars.</span></h1>
				<p>Come look at the night sky through our lens. Experience a wondrous view. A unique experience awaits you at Lake Afton Observatory.</p>
				<a href="about.php" class="btn">Learn More</a>
			</div>
		</div>
	</div>
</div>

<div class="viewing">
	<span class="light-gray">Next viewing:</span> <span class="nobr">Friday September 12, 2016</span>
</div>

<div class="content">
	<div class="container">
		<div class="row">
			<div class="col-md-8 offset-md-2 text-xs-center">
				<h2 class="light-gray">Who Are We</h2>
				<span class="dots"><i></i><i></i><i></i></span>
				<h1>Lake Afton <span class="nobr">Public</span> Observatory</h1>
				<p>We are a group of people who are passionate about astronomy. Through our telescope, exhibits and events, we aim to foster education and wonder about our solar system and beyond.</p>
			</div>
		</div>
	</div>
</div>


<div class="quick-links">
	<div class="link">
		<div class="overlay"></div>
		<h1>About</h1>
		<a href="about.php" class="btn">Learn More</a>
	</div>
	<div class="link">
		<div class="overlay"></div>
		<h1>Who We Are</h1>
		<a href="who-we-are.php" class="btn">Learn More</a></div>
	</div>
</div>


<div class="content">
	<div class="container">
		<div class="row">
			<div class="col-md-8 offset-md-2 text-xs-center">
				<h2 class="light-gray">Stay Connected</h2>
				<span class="dots"><i></i><i></i><i></i></span>
				<h1>Keep your eyes <span class="nobr">on the sky</span></h1>
				<p>Here’s what we’ve been up to lately. Come see for yourself or follow us on Instagram.</p>
			</div>

			<div class="col-md-12">


				<div id="instafeed"></div>

				<script type="text/javascript">
					var feed = new Instafeed({
						clientId: '6fa0543a0ac647f8aeb20c53d16a86bb'
					});
					feed.run();
				</script>

			</div>
		</div>
	</div>
</div>



<?php include 'footer.php'; ?>