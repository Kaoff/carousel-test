import React from 'react';
import { StyledApp } from './App.styles';
import { CarouselItem } from './components/CarouselItem/CarouselItem';

function App() {
  return (
    <StyledApp>
      <CarouselItem 
        imageUrl='https://picsum.photos/200/300'
        name='Carousel'
      />
    </StyledApp>
  );
}

export default App;
