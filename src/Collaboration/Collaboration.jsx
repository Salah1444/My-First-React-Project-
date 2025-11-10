import './Collaboration.css';

const Collaboration = () => {
  const companies = [
    "google.com",
    "facebook.com",
    "openai.com",
    "microsoft.com",
    "apple.com",
    "amazon.com",
    "netflix.com",
    "twitter.com",
    "github.com",
    "whatsapp.com",
    "spotify.com",
    "tesla.com"
  ];

  // Dupliquer la liste pour un effet continu
  const logos = [...companies, ...companies];

  return (
    <div className="collaboration-container">
      <h1>Collaboration</h1>
      <div className="companies">
        <div className="company-track">
          {logos.map((item, index) => (
            <div className="company-item" key={index}>
              <img
                className="company-logo"
                src={`https://logo.clearbit.com/${item}`}
                alt={item}
              />
              <p>{item.split('.')[0].toUpperCase()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
