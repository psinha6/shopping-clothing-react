import { useNavigate } from "react-router-dom";
import { BackgroudImage, Body, DirectoryItemContainer } from "./directory-item.style";

const DirectoryItem = ({category}) => {
    const {imageUrl, title, route} = category;
    const navigate = useNavigate();

    const onNavigationHandler = () => navigate(route);
    return (
        <DirectoryItemContainer onClick={onNavigationHandler}>
            <BackgroudImage imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;