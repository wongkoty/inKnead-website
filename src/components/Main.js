import React, { Component } from 'react';
import share2x from '../../public/images/share@2x.png';
// import '../../public/stylesheets/main.css.scss';

export default class Main extends Component {
  render() {
    return (
      <div className="container-fluid">
				<div className="home">

					<div className='logo-container'>
						<img role="presentation" src='./images/logo@2x.png' className='logo'/>
					</div>
					<div className='social-container'>
						<img src='../assets/images/icon_facebook@2x.png' className='social-icons'/>
						<img src='../assets/images/icon_twitter@2x.png' className='social-icons'/>
						<img src={share2x} className='social-icons share-icon'/>
					</div>

					<div className="main-text">
						<div className="headline">
							<p>BEST HEADLINE IN THE WORLD</p>
						</div>
						<div className="headline-info-temp">
							<p>Lorem ipsum dolor sit amet, consectetua adipiscing elit.
							Verstibulum rutrum urna felis.</p>
						</div>
						<div className='email-form-container'>
							<form action='/landing_page' method="POST">
								<input type='text' name='email' placeholder='Your E-mail' className='email-input'/>
								<input type='submit' className='white-button' />
							</form>
						</div>
						<div className='learn-demo-container'>
							<button className='white-button learn-button'>Learn More</button>
							<button className='demo-button'>Demo</button>

						</div>
					</div>


					<div className="iphone-container">
						<img src='../../assets/images/iphone_big.png' className='iphone img-responsive'/>
					</div>
				</div>
			</div>
    )
  }
}