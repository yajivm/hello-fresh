import PropTypes from 'prop-types';
import { DeleteIc, EditIc  } from '../Icons';
import { CardWrapper, CardImage, CardContent, CardTitle, CardDescription, FloatIcons, Icon, CardInnerWrapper } from './Card.styles';

const Card = ({
  id,
  imageSrc,
  title,
  description,
  isShadowEnabled,
  onClickCard,
  showActionIcons,
  onClickDeleteIcon,
  onClickEditIcon
}) => {

  return (
    <CardWrapper data-testid={id} isShadowEnabled={isShadowEnabled}>
      {showActionIcons && (
        <FloatIcons>
          <Icon onClick={() => onClickDeleteIcon(id)} data-testid={`delete-ic-${id}`} >
            <DeleteIc/>
          </Icon>
          <Icon onClick={() => onClickEditIcon(id)} data-testid={`edit-ic-${id}`}>
            <EditIc />
          </Icon>
        </FloatIcons>
      )}
      <CardInnerWrapper data-testid={`card-content-${id}`} onClick={() => onClickCard(id)}>
        <CardImage src={imageSrc} alt={`card-image-${id}`} data-testid={`card-image-${id}`} />
        <CardContent>
          <CardTitle data-testid={`card-title-${id}`}>{title}</CardTitle>
          {description &&
            <CardDescription data-testid={`card-description-${id}`}>{description}</CardDescription>
          }
        </CardContent>
      </CardInnerWrapper>
    </CardWrapper>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  isShadowEnabled: PropTypes.bool,
  onClickCard: PropTypes.func,
  onClickDeleteIcon: PropTypes.func,
  onClickEditIcon: PropTypes.func,
  showActionIcons: PropTypes.bool,
}

Card.defaultProps = {
  isShadowEnabled: false,
  showActionIcons: false,
  description: null,
  onClickDeleteIcon: () => { },
  onClickEditIcon: () => {},
  onClickCard: () => { },
}

export default Card;