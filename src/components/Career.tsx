import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>M.Sc. Data Science</h4>
                <h5>Deakin University, Australia</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed Master of Data Science (GPA 3.58/5.0) via distance
              learning while working full-time. Capstone: NLP Recommendation
              Engine using transformer-based + collaborative-filtering models;
              87% precision@10 on held-out test set.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Analyst → Software Engineer</h4>
                <h5>DataKernels Analytics & Consulting LLP</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built the company's BI stack from zero — designed an end-to-end
              data pipeline (AWS S3 → Snowflake → Zoho CRM) and Power BI
              dashboards. Promoted to Software Engineer; sole architect of
              MedXprts — a LangChain multi-agent AI platform that reduced
              delivery time by 96% and automated 400+ monthly workflows on AWS.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer (Current)</h4>
                <h5>DataKernels Analytics & Consulting LLP</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Continuing to scale MedXprts — built a 153-point LCP quality
              framework (BLEURT, BERTScore, ROUGE-L), redesigned the FastAPI
              backend for parallel LLM section generation (85% latency
              reduction), and architected event-driven n8n orchestration across
              AWS microservices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
