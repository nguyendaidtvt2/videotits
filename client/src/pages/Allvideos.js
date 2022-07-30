import React from "react";
import { useQuery } from "@apollo/client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { QUERY_VIDEOS } from "../utils/queries";
import VideoList from "../components/VideoList";
// Allvideos page
const Allvideos = () => {
  // Queries videos
  const { loading, data } = useQuery(QUERY_VIDEOS);
  const videos = data?.videos || [];
  return (
    <Container fluid className="content-warp">

          {loading ? (
            <div>Loading...</div>
          ) : ( 
            <VideoList videos={videos} title="HEADER TEXT" />
          )}

    </Container>
  );
};

export default Allvideos;