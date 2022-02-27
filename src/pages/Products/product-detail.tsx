import { createElement, FC, Fragment } from 'react';
import { useParams } from 'react-router-dom';

export const ProductDetail: FC = () => {
  const params: any = useParams();

  console.log(params.productId);
  return (
    <Fragment>
      This is Product Detail component
      <p>{params.productId}</p>
    </Fragment>
  )
}