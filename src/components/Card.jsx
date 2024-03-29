/* eslint-disable react/prop-types */
import { Comment, MoreVertRounded, Share, ThumbUp } from "@mui/icons-material";
import { Box, Button, IconButton, Typography, alpha } from "@mui/material";

const Card = ({ post }) => {
  return (
    <Box
      sx={(theme) => ({
        mt: { xs: 2, sm: 4 },
        alignSelf: "center",
        width: { xs: "100%", sm: "70%" },
        maxHeight: 700,
        borderRadius: "1rem",
        overflow: "hidden",
        boxShadow:
          theme.palette.mode === "light"
            ? `0 0 12px 8px ${alpha("#d8d8d8", 0.2)}`
            : `0 0 24px 12px ${alpha("#575757", 0.2)}`,
      })}
    >
      <img
        style={{ width: "100%" }}
        src="https://placehold.co/1600x600?text=Post+Media&font=roboto"
        alt="Post media"
      />
      <Box
        sx={{
          p: 2,
          alignSelf: "center",
          width: "100%",
        }}
      >
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="body2">{post.body}</Typography>
      </Box>
      <Box
        sx={{
          px: 2,
          py: 1,
          alignSelf: "center",
          width: "100%",
          display: "flex",
          gap: 1,
          justifyItems: "space-between",
          background: alpha("#cccccc", 0.1),
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            gap: 1,
            justifyItems: "center",
          }}
        >
          <Button
            size="small"
            variant="text"
            color="primary"
            sx={{
              p: 0,
              display: "flex",
              gap: 1,
              justifyItems: "center",
            }}
          >
            {imporessionIcons[0]}
            <Typography variant="body2">
              {post.impressions["likes"].length}
            </Typography>
          </Button>
          <Button
            size="small"
            variant="text"
            color="primary"
            sx={{
              p: 0,
              display: "flex",
              gap: 1,
              justifyItems: "center",
            }}
          >
            {imporessionIcons[1]}
            <Typography variant="body2">
              {post.impressions["comments"].length}
            </Typography>
          </Button>
          <Button
            size="small"
            variant="text"
            color="primary"
            sx={{
              p: 0,
              display: "flex",
              gap: 1,
              justifyItems: "center",
            }}
          >
            {imporessionIcons[2]}
            <Typography variant="body2">
              {post.impressions["shares"].length}
            </Typography>
          </Button>
        </Box>

        <IconButton size="small" color="primary">
          <MoreVertRounded />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Card;
const imporessionIcons = [
  <ThumbUp fontSize="small" key={0} />,
  <Comment fontSize="small" key={1} />,
  <Share fontSize="small" key={2} />,
];
