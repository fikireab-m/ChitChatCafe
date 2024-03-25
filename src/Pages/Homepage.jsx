import { Send } from "@mui/icons-material";
import { Fab } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostRequest, getPostsRequest } from "../features/post/postSlice";

export default function HomePage() {
  // const [showTextArea, setShowTextArea] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handleBodyChange = (e) => {
    e.preventDefault();
    setBody(e.target.value);
  };
  const handleSubmit = () => {
    if (title.length > 3 && body.length > 8) {
      const post = { title, body };
      dispatch(addPostRequest(post));
      setTitle("");
      setBody("");
    }
  };

  useEffect(() => {
    dispatch(getPostsRequest());
  }, [dispatch]);
  
  return (
    <Box id="home" sx={{ width: "100%" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 10,
          pb: 4,
        }}
      >
        <Stack
          direction="row"
          alignSelf="center"
          spacing={1}
          alignItems="center"
          sx={{ mt: 2, width: { xs: "100%", sm: "70%", lg: "50%" } }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: 2,
              flexDirection: "column",
            }}
          >
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              fullWidth
              variant="outlined"
              aria-label="What do you have in mind?"
              placeholder="What do you have in mind?"
              inputProps={{
                autocomplete: "off",
                ariaLabel: "What do you have in mind?",
              }}
              onChange={handleTitleChange}
            />
            <TextField
              id="outlined-basic"
              hiddenLabel
              fullWidth
              multiline
              maxRows={6}
              minRows={2}
              variant="outlined"
              aria-label="Well, write about it"
              placeholder="Well, write about it"
              inputProps={{
                autocomplete: "off",
                ariaLabel: "Well, write about it",
              }}
              sx={{ display: title.length > 3 ? "block" : "none" }}
              onChange={handleBodyChange}
            />
          </Box>

          <Fab
            variant="extended"
            color="primary"
            sx={{ width: "3rem", height: "3rem" }}
            onClick={handleSubmit}
          >
            <Send />
          </Fab>
        </Stack>
        {posts.map((post, index) => (
          <Card key={index} post={post}/>
        ))}
      </Container>
    </Box>
  );
}
