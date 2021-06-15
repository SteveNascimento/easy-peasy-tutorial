import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'


export default function ProductCard({procuct}) {

    return (
        <Link to={`/product/${product.id}`}>
            <Card title={procuct.params.name} bordered={false} style={{ width: 300 }}>
                <p>{procuct.params.price}</p> 
            </Card>
        </Link>
    )
}