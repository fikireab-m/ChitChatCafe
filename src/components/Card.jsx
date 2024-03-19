import { Comment, MoreVertRounded, Share, ThumbUp } from "@mui/icons-material";
import { Box, Button, IconButton, Typography, alpha } from "@mui/material";

const Card = () => {
  return (
    <Box
      sx={(theme) => ({
        mt: { xs: 2, sm: 4 },
        alignSelf: "center",
        width: { xs: "100%", sm: "70%" },
        maxHeight: 700,
        outline: "1px solid",
        borderRadius: "1rem",
        overflow: "hidden",
        outlineColor:
          theme.palette.mode === "light"
            ? alpha("#BFCCD9", 0.5)
            : alpha("#9CCCFC", 0.1),
        boxShadow:
          theme.palette.mode === "light"
            ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
            : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
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
        <Typography variant="h6">Title lorem</Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          beatae tenetur id, praesentium suscipit nulla illo animi voluptas non
          ipsam molestiae sunt laboriosam aliquid, natus repellendus veritatis
          adipisci iusto corporis.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Alias, quam? Aut distinctio eveniet numquam sint
          earum aliquid voluptatum asperiores, similique minus, possimus ipsa
          nesciunt debitis natus corporis error esse reiciendis.
        </Typography>
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
          background: alpha("#cccccc", 0.2),
        }}
      >
        <Box
          sx={{
            flex:1,
            display: "flex",
            gap: 1,
            justifyItems: "center",
          }}
        >
          {[
            <ThumbUp fontSize="small" key={0} />,
            <Comment fontSize="small" key={1} />,
            <Share fontSize="small" key={2} />,
          ].map((el) => (
            <Button
              key={el}
              variant="text"
              color="primary"
              sx={{
                p: 0,
                display: "flex",
                gap: 1,
                justifyItems: "center",
              }}
            >
              {el}
              <Typography variant="body2">99+</Typography>
            </Button>
          ))}
        </Box>

        <IconButton color="primary">
          <MoreVertRounded />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Card;
