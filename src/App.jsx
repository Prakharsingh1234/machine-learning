import "./frontend.css";

export default function App() {
  return (
  <div className="page">
  <div className="bg-glow"></div>

  <div className="container">

    {/* Hero */}
    <div className="hero">
      <p className="hero-tag">MACHINE LEARNING ENGINEER ROADMAP</p>

      <h1 className="hero-title">
        Build models that{" "}
        <span className="gradient-text">learn & predict</span>
      </h1>

      <p className="hero-sub">
        Learn how to design, train, optimize, and deploy machine learning systems at scale
      </p>
    </div>

    {/* Sections */}
    <div className="sections">

      <Card title="📘 Description">
        Machine Learning Engineering focuses on building systems that can learn from data and make predictions.
        It combines data science, software engineering, and model deployment to create scalable ML solutions.
      </Card>

      <Card title="🛠 Tech Stack">
        <ul>
          <li>Python (core language)</li>
          <li>NumPy, Pandas</li>
          <li>Scikit-learn (ML algorithms)</li>
          <li>TensorFlow / PyTorch</li>
          <li>Matplotlib, Seaborn</li>
          <li>ML Ops tools (Docker, MLflow, Kubernetes basics)</li>
        </ul>
      </Card>

      <Card title="🗺 Roadmap">
        <ol>
          <li>Learn Python fundamentals</li>
          <li>Understand math (Linear Algebra, Probability, Statistics)</li>
          <li>Learn data preprocessing & feature engineering</li>
          <li>Study ML algorithms (Regression, Classification, Clustering)</li>
          <li>Model evaluation & optimization</li>
          <li>Work on real ML projects</li>
          <li>Deploy models (APIs, Cloud basics)</li>
        </ol>
      </Card>

      <Card title="🚀 Future Scope">
        <ul>
          <li>Machine Learning Engineer</li>
          <li>AI Engineer</li>
          <li>Data Scientist</li>
          <li>ML Ops Engineer</li>
        </ul>
      </Card>

    </div>
  </div>
</div>
  );
}


/* ✅ Card Component */
function Card({ title, children }) {
  return (
    <div className="card-wrapper">
      <div className="card">
        <h2 className="card-title">{title}</h2>
        <div className="card-content">{children}</div>
      </div>
    </div>
  );
}
