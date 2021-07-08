import React from 'react'

function About() {
    return (
        <section className="s2">
		<div className="main-container">

			<div className="about-wrapper">
				<div className="about-me">
					<h4>More about me</h4>
					<p>I graduated from college in 2020 </p>
					<p>Basically working on ReactJs and NodesJs from last 1 year when i was in college.</p>
					<p>Been playing with the Frontend technologies from long time.</p>
					<p>Build some projects from scratch to boost the development knowledge.</p>
					<p>I really enjoy and appreciate working with good people who are motivated and honest.</p>
					<p>I believe in constant and mutual growth.</p>

					


					<hr/>

					<h4>TOP EXPERTISE</h4>

					<p>Fullstack developer with primary focus on MERN stack: <a target="_blank" href="resume.pdf">Download Resume</a></p>

					<div id="skills">
						<ul>
							<li>HTML 5</li>
							<li>CSS 3  and Bootstrap 4</li>
							<li>JavaScript </li>
							<li>ReactJs and Redux</li>
							<li>NodesJs</li>
							<li>Express js </li>
							<li>MongoDB and MySQL </li>
						</ul>

						<ul>
							<li>JS Charts</li>
							<li>Heroku</li>
							<li>Github</li>
						</ul>

					</div>

				</div>

				
				<div className="social-links">
				<h4>Skills Level / 10</h4>
				<p>HTML</p>
				<div class="container">
				  <div class="skills html"><small>10</small></div>
				</div>
				
				<p>CSS</p>
				<div class="container">
				  <div class="skills css"><small>10</small></div>
				</div>

				<p>Bootstrap</p>
				<div class="container">
				  <div class="skills boot"><small>9.5</small></div>
				</div>
				
				<p>JavaScript</p>
				<div class="container">
				  <div class="skills js"><small>8</small></div>
				</div>
				
				<p>ReactJs and Redux</p>
				<div class="container">
				  <div class="skills react"><small>8.5</small></div>
				</div>

				<p>NodeJS and ExpressJs</p>
				<div class="container">
				  <div class="skills node"><small>8</small></div>
				</div>

				<p>MongoDB and MySQL</p>
				<div class="container">
				  <div class="skills mongo"><small>8</small></div>
				</div>

				</div>
			</div>

		</div>
	</section>
    )
}

export default About
