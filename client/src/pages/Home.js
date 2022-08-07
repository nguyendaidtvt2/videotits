import React from "react";
import { useQuery } from "@apollo/client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { QUERY_VIDEOS } from "../utils/queries";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link , Routes , Route} from "react-router-dom";
import HoverVideoPlayer from 'react-hover-video-player';
import { AiFillHeart } from 'react-icons/ai';
import { GrView } from 'react-icons/gr';
import VideoList from "../components/VideoList";

// Home page
const Home = () => {
  // Queries videos
  const { loading, data } = useQuery(QUERY_VIDEOS);
  const videos = data?.videos || [];
  const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed:3000,
    adaptiveHeight: true,
    autoplay: true,
    speed: 500,
    centerPadding: "60px",
    slidesToShow:5,
    adaptiveHeight: true,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <Container fluid className="content-warp"> 
        <Row>
            <Col sm={9}>
          {loading ? (
            <div>Loading...</div>
          ) : ( 
            
                    <div class="mt-ttl">
                        <div class="ttl-filter mt-ttl flex">
                            {!videos.length ? (<h3 className="roboto-font2">No Videos Yet!</h3>): (
                                <div class="ttl">
                                <h2>New Videos</h2>
                                <VideoList videos={videos} title="HEADER TEXT" />
                            </div>
                            )} 

                        </div>  
                    </div>  
                
              
          )}
          </Col>
            <Col sm={3} className="aside" >

                        <div className="ttl">
                            <h3>Trending Searches Hot video</h3>
                        </div>
                        <div className="tags-cloud mt-block">
                            <ul>
                                <li><a className="gradient-box" href="videos/onlyfans">OnlyFans</a></li><li><a class="gradient-box" href="videos/foursome">Foursome</a></li><li><a class="gradient-box" href="videos/stripchat">Stripchat</a></li><li><a class="gradient-box" href="videos/hot-falling-devil">Hot Falling Devil</a></li><li><a class="gradient-box" href="videos/edging">Edging</a></li><li><a class="gradient-box" href="videos/accidental">Accidental</a></li><li><a class="gradient-box" href="videos/cum-fetish">Cum Fetish</a></li><li><a class="gradient-box" href="videos/fake-boobs">Fake Boobs</a></li><li><a class="gradient-box" href="videos/top">Top</a></li><li><a class="gradient-box" href="videos/scottish">Scottish</a></li><li><a class="gradient-box" href="videos/cherokee-d-ass">Cherokee D Ass</a></li><li><a class="gradient-box" href="videos/post-orgasm">Post Orgasm</a></li><li><a class="gradient-box" href="videos/fisting">Fisting</a></li><li><a class="gradient-box" href="videos/honey-gold">Honey Gold</a></li><li><a class="gradient-box" href="videos/husband">Husband</a></li><li><a class="gradient-box" href="videos/natural">Natural</a></li>
                            </ul>
                        </div>
                        <div className="mt-block adv-block no-desctop"></div>
            </Col>
            </Row>            
    </Container>
  );
};

export default Home;
