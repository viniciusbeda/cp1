import React, { useState } from 'react';
import styled from 'styled-components';

const NovaLista = () => {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <Container>
      <Title>Nova lista</Title>
      <InputContainer>
        <Input
          type="text"
          placeholder="Digite o item desejado"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <AddButton onClick={addItem}>+</AddButton>
      </InputContainer>
      <ItemList>
        {items.map((item, index) => (
          <Item key={index}>{item}</Item>
        ))}
      </ItemList>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  color: #007aff;
  font-size: 24px;
`;

const InputContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const AddButton = styled.button`
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 18px;
`;

const ItemList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
`;

const Item = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export default NovaLista;
