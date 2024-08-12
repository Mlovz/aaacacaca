import Logo from './assets/photo_2024-06-03_10-06-00 1@2x.png'


function App() {
  
  return (
    <div className='overlay'>
      <div className="container main">
        <img src={Logo} alt="" />
        <form className='form'>
            <h1>
              <span>A</span>
              <span>c</span>
              <span>q</span>
              <span>u</span>
              <span>i</span>
              <span>r</span>
              <span>e</span>
            </h1>
            <input type="text" placeholder="Email Address" />
            <button>Submit</button>
        </form>
      </div>

      <div className="container section">
        <h2>Language Courses</h2>

        <div className='row'>
          <img src="https://www.teacheracademy.eu/wp-content/uploads/2019/02/LANG.1.HACK_.jpg" alt="" />
          <p>Unlock access to comprehensive courses for multiple languages, catering to all proficiency levels from absolute beginners to native speakers. Achieve your language goals with our tailored programs.</p>
        </div>
      </div>
      <div className="container section">
        <h2>Vocabulary Expansion</h2>

        <div className='row'>
          <p>Enhance your vocabulary using our extensive lists or create personalized vocabulary sets to suit your learning needs.</p>
          <img src="https://www.wikihow.com/images/thumb/6/65/Expand-Your-Vocabulary-Step-2-Version-4.jpg/v4-460px-Expand-Your-Vocabulary-Step-2-Version-4.jpg" alt="" />
        </div>
      </div>
      <div className="container section">
        <h2>Movies and Videos</h2>

        <div className='row'>
          <img src="https://dailyorange.com/resize/800/wp-content/uploads/2022/09/06210133/screentimeilloa5_dailyorangefileillustration-01.png" alt="" />
          <p>Enjoy your favorite shows and videos with subtitles in your target language to boost comprehension and language skills.</p>
        </div>
      </div>
      <div className="container section">
        <h2>Books and Audiosbooks</h2>

        <div className='row'>
          <p>Delve into our vast library of captivating stories and literature to deepen your understanding and appreciation of your target language.</p>
          <img src="https://www.publishersweekly.com/images/data/ARTICLE_PHOTO/photo/000/085/85585-1.JPG" alt="" />

        </div>
      </div>
      <div className="container section">
        <h2>Community Connection</h2>

        <div className='row'>
          <img src="https://isb.org/wp-content/uploads/2018/10/community-connection.jpg" alt="" />
          <p>Join a vibrant community of fellow language learners and polyglots. Collaborate, share experiences, and support each other on your language learning journey</p>
        </div>
      </div>
      <div className="container section">
        <h2>Online Tutoring</h2>

        <div className='row'>
          <p>Unlock access to comprehensive courses for multiple languages, catering to all proficiency levels from absolute beginners to native speakers. Achieve your language goals with our tailored programs.</p>
          <img src="https://media.privateequityinternational.com/uploads/2020/04/GettyImages-520409700-Converted.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default App
