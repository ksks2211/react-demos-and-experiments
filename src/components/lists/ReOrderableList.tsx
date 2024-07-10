import { Box, styled } from "@mui/material";
import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

const StyledListContainer = styled(Box)`
  width: 200px;
  margin: 0 auto;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const StyledListItem = styled(Box)`
  padding: 10px;
  margin-bottom: 8px;
  background-color: #3498db;
  color: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

export default function ReOrderableList() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const startIndex = result.source.index;
    const endIndex = result.destination.index;

    setItems((items) => {
      const numbers = [...items];
      const [removed] = numbers.splice(startIndex, 1);
      numbers.splice(endIndex, 0, removed);
      return numbers;
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <StyledListContainer
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {items.map((item, index) => (
              <Draggable key={item} draggableId={item.toString()} index={index}>
                {(provided, snapshot) => (
                  <StyledListItem
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {item}
                  </StyledListItem>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </StyledListContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
}
