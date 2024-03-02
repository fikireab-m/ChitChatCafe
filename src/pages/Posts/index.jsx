import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import PostCard from "../../components/PostCard";

export default function Posts() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        {[0, 1, 2, 3].map((i) => (
          <PostCard key={i}/>
        ))}
      </Container>
    </React.Fragment>
  );
}
