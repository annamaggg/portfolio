import './Navbar.css';

export const Navbar = () => {
  return (
    <div className='outer'>
      <nav style={{textAlign: 'center'}}>
        <ul className='list'>
          <li><a href="#" className='pages'>Home</a></li>
          <li><a href="#/software" className='pages'>Software</a></li>
          <li><a href="#/video" className='pages'>Video</a></li>
          <li><a href="#/gallery" className='pages'>Gallery</a></li>
          {/* <li><a href="#/about" className='pages'>About</a></li> */}
        </ul>
      </nav>
    </div>
  )
}