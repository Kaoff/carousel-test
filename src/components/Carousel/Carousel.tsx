import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { CarouselItem } from "../CarouselItem/CarouselItem";
import { LeftIcon } from "../Icons/LeftIcon/LeftIcon";
import { RightIcon } from "../Icons/RightIcon/RightIcon";
import { StyledCarousel, StyledItemsOverflowHider, StyledItemsWrapper, StyledNavButton } from "./Carousel.styles";
import { CarouselItemType } from "./Carousel.types";

export const Carousel: React.FC = () => {
    const [offset, setOffset] = useState<number>(0);

    const { loading, error, data } = useQuery<CarouselItemType>(gql`
        query MyQuery {
            program {
                thumnail {
                    url
                }
                name
                id
            }
        }
    `);


    if (loading) return <p>Loading...</p>;

    const onNavClick = (buttonPosition: 'left' | 'right') => {
        if (!data) return;

        if (buttonPosition === 'left' && offset < 0) {
            setOffset(offset + 224);
        }

        if (buttonPosition === 'right' && offset > -224 * (data.program.length - 5)) {
            setOffset(offset - 224);
        }
    }

    return (
        <StyledCarousel>
            {
                offset < 0 && (
                    <StyledNavButton onClick={() => onNavClick('left')}  position="left">
                        <LeftIcon />
                    </StyledNavButton>
                )
            }
            <StyledItemsOverflowHider>
                <StyledItemsWrapper offset={offset}>
                    {data?.program.map(item => (
                        <CarouselItem key={item.id} imageUrl={item.thumnail.url} name={item.name} />
                    ))}
                </StyledItemsWrapper>
            </StyledItemsOverflowHider>
            {
                data && offset > -224 * (data.program.length - 5) && (
                    <StyledNavButton onClick={() => onNavClick('right')} position="right">
                        <RightIcon />
                    </StyledNavButton>
                )
            }
        </StyledCarousel>
    )
}
