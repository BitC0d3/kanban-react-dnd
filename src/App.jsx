import { Divider, Grid } from "@mui/material";
import React, { useState } from "react";
import { DndContext, DragOverlay, rectIntersection } from "@dnd-kit/core";
import AddCard from "./AddCard";
import KanbanLane from "./KanbanLane";
import KanbanCard from "./KanbanCard";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [doneItems, setDoneItems] = useState([]);
  const [inProgressItems, setInProgressItems] = useState([]);
  const [uItems, setuItems] = useState([]);
  const [title, setTitle] = useState("");
  const addNewCard = (title) => {
    setuItems([...uItems, { title }]);
  };
  return (
    <DndContext
      collisionDetection={rectIntersection}
      onDragStart={(e) => {
        const title = e.active.data.current?.title ?? "";
        setTitle(title);
      }}
      onDragEnd={(e) => {
        const container = e.over?.id;
        const title = e.active.data.current?.title ?? "";
        const index = e.active.data.current?.index ?? 0;
        const parent = e.active.data.current?.parent ?? "Under Devlopment";
        if (container === "Under Devlopment") {
          setTodoItems([...todoItems, { title }]);
        } else if (container === "Done") {
          setDoneItems([...doneItems, { title }]);
        } else if (container === "Unassigned") {
          setuItems([...uItems, { title }]);
        } else {
          setInProgressItems([...inProgressItems, { title }]);
        }
        if (parent === "Under Devlopment") {
          setTodoItems([
            ...todoItems.slice(0, index),
            ...todoItems.slice(index + 1),
          ]);
        } else if (parent === "Done") {
          setDoneItems([
            ...doneItems.slice(0, index),
            ...doneItems.slice(index + 1),
          ]);
        } else if (parent === "Unassigned") {
          setuItems([...uItems.slice(0, index), ...uItems.slice(index + 1)]);
        } else {
          setInProgressItems([
            ...inProgressItems.slice(0, index),
            ...inProgressItems.slice(index + 1),
          ]);
        }
      }}
    >
      <Grid
        display={"flex"}
        flexDirection="column"
        width={"100vw"}
        height={"100vh"}
      >
        <AddCard addCard={addNewCard} />
        <Divider />
        <Grid display={"flex"} flex={1}>
          <KanbanLane title="Under Devlopment" items={todoItems} />
          <KanbanLane title="Testing" items={inProgressItems} />
          <KanbanLane title="Done" items={doneItems} />
          <KanbanLane title="Unassigned" items={uItems} />
        </Grid>
      </Grid>
      <DragOverlay>
        <KanbanCard title={title}></KanbanCard>
      </DragOverlay>
    </DndContext>
  );
};

export default App;
