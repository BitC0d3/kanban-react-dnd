import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Grid, Typography } from "@mui/material";

const KanbanCard = ({ title, index, parent }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: title,
    data: {
      title,
      index,
      parent,
    },
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };
  return (
    <Grid
      padding={3}
      backgroundColor="white"
      margin={2}
      borderRadius="8px"
      border="2px solid gray"
      boxShadow="0px 0px 5px 2px #2121213b"
      transform={style.transform}
      {...listeners}
      {...attributes}
      ref={setNodeRef}
    >
      <Typography>{title}</Typography>
    </Grid>
  );
};

export default KanbanCard;
