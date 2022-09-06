import React, { Component } from 'react';
import { gql, useQuery } from "@apollo/client";
import { connect, useDispatch } from 'react-redux';
import { setProducts } from '../redux/Shopping/shopping-actions';
import '../styles/CategoryPage.css'
import { Query } from '@apollo/client';

const PRODUCTS_QUERY = gql`
    {
        categories{
            name
        products{
            name
            prices{
            amount
            currency{
                symbol
            }
            }
            gallery
        }
        }
    }
`;


// const CategoryPage = ({ products, activeTab }) => {
//     const { data } = useQuery(PRODUCTS_QUERY);
//     const dispatch = useDispatch()
//     dispatch(setProducts(data))
//     const activeCategory = products?.categories?.find(product => product?.name === activeTab)
//     return (
//         <div className="container">
//             <h1 className="page_heading">{activeTab}</h1>
//             <div className="products_container">
//                 {
//                     activeCategory?.products.map(product =>
//                         <div className="product">
//                             <img src={product?.gallery[0]} alt="" className="product_image" />
//                             <p className='product_title'>{product?.name}</p>
//                             <p className='product_price'>{product?.prices[0].currency?.symbol} {product?.prices[0].amount}</p>
//                         </div>)
//                 }
//             </div>
//         </div>
//     );
// };


class CategoryPage extends Component {
    render() {
        console.log("products", this.props.products)
        return (
            <>
                <Query query={PRODUCTS_QUERY}>
                    {({ loading, data }) => {
                        if (loading) return 'loading..'
                        return this.props.setProducts(data)
                    }}
                </Query>
                <div>CategoryPage</div>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.shop.products,
        activeTab: state.shop.activeTab
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setProducts: products => dispatch(setProducts(products))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);