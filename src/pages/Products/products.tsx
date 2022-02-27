import { createElement, FC, Fragment } from'react';
import { Link } from 'react-router-dom';

export const Products: FC = () => {

  return (
    <Fragment>
      <ul>
        <li><Link to='/products/productId'>Product 1</Link></li>
        <li><Link to='/products/productId'>Product 2</Link></li>
        <li><Link to='/products/productId'>Product 3</Link></li>
      </ul>
    </Fragment>
  )
}