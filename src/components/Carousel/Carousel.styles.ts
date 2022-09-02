import styled from "@emotion/styled";

interface StyledNavButtonProps {
    position: 'left' | 'right';
}
export const StyledNavButton = styled.button<StyledNavButtonProps>`
    position: absolute;
    width: 48px;
    height: 48px;
    background: #313132;
    top: 116px;
    z-index: 99;
    border: none;
    padding: 8px;

    ${props => 
        props.position === 'left' ? 'left: -24px'
            : 'right: -24px'}
`;

export const StyledCarousel = styled.div`
    position: relative;
    width: 1130px;
`;

interface StyledItemsWrapperProps {
    offset: number;
}
export const StyledItemsWrapper = styled.div<StyledItemsWrapperProps>`
    display: flex;
    align-items: flex-start;
    width: 1130px;
    margin-left: ${props => props.offset}px;

    > div {
        margin-right: 24px;
    }

    transition: margin-left 0.3s;
`;

export const StyledItemsOverflowHider = styled.div`
    overflow: hidden;
    width: 1130px;
`;