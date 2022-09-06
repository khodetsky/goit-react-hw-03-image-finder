import { Button, BtnContainer } from './LoadMoreBtn.styled';

export const LoadMoreBtn = ({onLoadMore}) => {
    return (
        <BtnContainer>
            <Button type="button" onClick={onLoadMore}>Load more</Button>
        </BtnContainer>
    )
}