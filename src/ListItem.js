import { Draggable } from "react-beautiful-dnd";
import React from "react";
import styled from "styled-components";

import Avatar from 'react-avatar';

import Button from '@mui/material/Button';
import { blueGrey } from '@mui/material/colors';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const CardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
`;
const CardFooter = styled.div`
  font-weight: 500;
`;

const ItemId = styled.span`
  font-size: 14px;
  color: #6b7077;
`;

const DragItem = styled.div`
  padding: 10px;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: #27282b;
  margin: 8px 0;
  display: grid;
  grid-gap: 20px;
  flex-direction: column;
`;



const ListItem = ({ item, index }) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Draggable
        key={item.id}
        draggableId={item.id}
        index={index}
      >
        {(provided, snapshot) => {
          return (
            <DragItem
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              onClick={handleClickOpen}
            >
              <CardHeader>
                <ItemId>{item.id}</ItemId>
                <Author>
                  <Avatar name={item.owner} size={30} round alt={item.owner}/>
                </Author>
              </CardHeader>
              {item.content}
              <CardFooter>...</CardFooter>
            </DragItem>
          );
        }}
      </Draggable>
      <Dialog 
        open={open} 
        onClose={handleClose} 
        sx={{
          backgroundColor: 'black',
        }}>
        <DialogTitle>{item.id} / {item.owner}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Avatar name={item.owner} size={30} round alt={item.owner}/> 
            <div>
              {item.content}
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} error>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ListItem;