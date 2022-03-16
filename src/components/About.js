import Nav from "./Nav";

function About() {
    return ( 
    <>
    <Nav />
            <div className='Page-Title'>
              <div>
                <div className="Headline">
                  
                  <h1>About this exhibition</h1>
        
                </div>
                <p>Hi, I'm Bruno. etg#1 presents my recent artworks and those of 18 friends and artists, most
                    of which I met along my journey being a digital nomad in the 
                    Philippines. While the pandemic keeps the world on hold, 
                    I am having the fortune of feeling greatly inspired by living on the small pacific 
                    island Siargao for over a year now. Certainly, the inspiration arose from the uncertainty inherent in this
                    special time the world is experiencing, the beauty, rawness of the island itself,
                    the simple island life, ultimately amplified by my vivid and intimate social surrounding.
                    etg#1 was born from this inspiration. Here is to share some of it, and to give 
                    my very talented friends a humble platform to present their artworks.
                    Lastly, this exhibition ought to be the first of many, one each year from now.
                    For each beginning bears a special magic...
                    </p>
                    <p>...</p>
                    <p>If you liked, disliked or don't care about this exhibit, please leave some feedback!</p>
                    <a className='bigButton startTourButton' href="https://fervent-lichterman-562f37.netlify.app/">Feedback</a>
               
              </div>
            </div>
            </>
          );
        };


export default About;