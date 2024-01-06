import { useDroppable } from "@dnd-kit/core";
import { Grid, Typography } from "@mui/material";
import KanbanCard from "./KanbanCard";

const KanbanLane = ({ title, items }) => {
  const { setNodeRef } = useDroppable({
    id: title,
  });
  return (
    <Grid
      display={"flex"}
      flex={1}
      padding={5}
      flexDirection="column"
      minHeight="10rem"
    >
      <Typography variant="h6" align="center" padding={1}>
        {title}
      </Typography>
      <Grid
        ref={setNodeRef}
        bgcolor={"lightgray"}
        borderRadius="8px"
        flex={1}
        padding={2}
        flexDirection="column"
      >
        {items.map(({ title: cardTitle }, key) => (
          <KanbanCard title={cardTitle} key={key} index={key} parent={title} />
        ))}
      </Grid>
    </Grid>
  );
};

export default KanbanLane;
