export default function Info() {
  return (
    <div className="info">
      <img className="profile-picture" src="./profile.jpg" alt="" />
      <div className="info-header">
        <h3 className="name">Zahed Abrar</h3>
        <p className="post">Frontend Developer</p>
        <a className="website-link" href="https://abrar-zahed.herokuapp.com/">
          Visit Website
        </a>
      </div>
      <div className="info-actions">
        <a href="mailto: abrarzahed6986@gmail.com">Email</a>
        <a href="#">Linkedin</a>
      </div>
    </div>
  );
}
