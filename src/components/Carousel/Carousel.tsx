import { useState } from "react";
import { CarouselItem } from "../CarouselItem/CarouselItem";
import { LeftIcon } from "../Icons/LeftIcon/LeftIcon";
import { RightIcon } from "../Icons/RightIcon/RightIcon";
import { StyledCarousel, StyledItemsOverflowHider, StyledItemsWrapper, StyledNavButton } from "./Carousel.styles";
import { CarouselItemType } from "./Carousel.types";

export const Carousel: React.FC = () => {
    const [items, setItems] = useState<CarouselItemType[]>([
        {
            id: '1',
            name: 'Coucou',
            image: 'https://picsum.photos/200/300?random=1',
        },
        {
            id: '2',
            name: 'Coucou',
            image: 'https://picsum.photos/200/300?random=2',
        },
        {
            id: '3',
            name: 'Coucou',
            image: 'https://picsum.photos/200/300?random=3',
        },
        { 
            id: '4',
            name: 'Coucou',
            image: 'https://picsum.photos/200/300?random=4',
        },
        { 
            id: '5',
            name: 'CoucouCou couCoucouCoucou CoucouCoucouC oucouCoucouCoucou CoucouCoucouCoucouCoucou CoucouCoucou  CoucouCoucou CoucouCoucou',
            image: 'https://picsum.photos/200/300?random=5',
        },
        { 
            id: '6',
            name: 'Coucou',
            image: 'https://picsum.photos/200/300?random=6',
        }
    ]);

    const [offset, setOffset] = useState<number>(0);

    const onNavClick = (buttonPosition: 'left' | 'right') => {
        if (buttonPosition === 'left' && offset < 0) {
            setOffset(offset + 224);
        }

        if (buttonPosition === 'right' && offset > -224 * (items.length - 5)) {
            setOffset(offset - 224);
        }
    }

    return (
        <StyledCarousel>
            <StyledNavButton onClick={() => onNavClick('left')}  position="left">
                <LeftIcon />
            </StyledNavButton>
            <StyledItemsOverflowHider>
                <StyledItemsWrapper offset={offset}>
                    {items.map(item => (
                        <CarouselItem key={item.id} imageUrl={item.image} name={item.name} />
                    ))}
                </StyledItemsWrapper>
            </StyledItemsOverflowHider>
            <StyledNavButton onClick={() => onNavClick('right')} position="right">
                <RightIcon />
            </StyledNavButton>
        </StyledCarousel>
    )
}
