import React from 'react';
import PropTypes from 'prop-types';
import { BackIc, ForwardIc } from "../Icons";
import { PaginatioNumber, PaginationWrapper, Icon } from './Pagination.style';

const Pagination = ({
  page,
  showBackIc,
  showForwardIc,
  onClickBackIc,
  onClickForwardIc
}) => {

  return (
    <PaginationWrapper data-testid="pagination-wrapper">
      <Icon data-testid="back-ic" onClick={() => onClickBackIc('Back')} isIcToBeShown={showBackIc}>
        <BackIc />
      </Icon>
      <PaginatioNumber data-testid="page-number-title">{page}</PaginatioNumber>
      <Icon data-testid="forward-ic" onClick={() => onClickForwardIc('Forward')} isIcToBeShown={showForwardIc}>
        <ForwardIc />
      </Icon>
    </PaginationWrapper>
  )
};

Pagination.propTypes = {
  page: PropTypes.any.isRequired,
  onClickForwardIc: PropTypes.func.isRequired,
  onClickBackIc: PropTypes.func.isRequired,
  showBackIc: PropTypes.bool,
  showForwardIc: PropTypes.bool,
}

Pagination.defaultProps = {
  showBackIc: false,
  showForwardIc: false,
}

export default Pagination;